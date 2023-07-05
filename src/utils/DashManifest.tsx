import type Actions from '../core/Actions.js';
import type Player from '../core/Player.js';
import type { IStreamingData } from '../parser/index.js';
import type { Format } from '../parser/misc.js';
import * as DashUtils from './DashUtils.js';
import type { FormatFilter, URLTransformer } from './FormatUtils.js';
import { InnertubeError, getStringBetweenStrings } from './Utils.js';
import { Constants } from './index.js';

interface DashManifestProps {
  streamingData: IStreamingData;
  transformURL?: URLTransformer;
  rejectFormat?: FormatFilter;
  cpn?: string;
  player?: Player;
  actions?: Actions;
}

interface OTFSegmentInfo {
  resolved_url: string,
  segment_durations: {
    duration: number,
    repeat_count?: number
  }[]
}

async function getOTFSegmentInfo(url: string, actions: Actions): Promise<OTFSegmentInfo> {
  // Fetch the first segment as it contains the segment durations which we need to generate the manifest
  const response = await actions.session.http.fetch_function(`${url}&rn=0&sq=0`, {
    method: 'GET',
    headers: Constants.STREAM_HEADERS,
    redirect: 'follow'
  });

  // Example OTF video: https://www.youtube.com/watch?v=DJ8GQUNUXGM

  // There might have been redirects, if there were we want to write the resolved URL to the manifest
  // So that the player doesn't have to follow the redirects every time it requests a segment
  const resolved_url = response.url.replace('&rn=0', '').replace('&sq=0', '');

  // In this function we only need the segment durations and how often the durations are repeated
  // The segment count could be useful for other stuff though
  // The response body contains a lot of junk but the useful stuff looks like this:
  // Segment-Count: 922\r\n' +
  //   'Segment-Durations-Ms: 5120(r=920),3600,\r\n'
  const response_text = await response.text();

  const segment_duration_strings = getStringBetweenStrings(response_text, 'Segment-Durations-Ms:', '\r\n')?.split(',');

  if (!segment_duration_strings) {
    throw new InnertubeError('Failed to extract the segment durations from this OTF stream', { url });
  }

  const segment_durations = [];
  for (const segment_duration_string of segment_duration_strings) {
    const trimmed_segment_duration = segment_duration_string.trim();
    if (trimmed_segment_duration.length === 0) {
      continue;
    }

    let repeat_count;

    const repeat_count_string = getStringBetweenStrings(trimmed_segment_duration, '(r=', ')');
    if (repeat_count_string) {
      repeat_count = parseInt(repeat_count_string);
    }

    segment_durations.push({
      duration: parseInt(trimmed_segment_duration),
      repeat_count
    });
  }

  return {
    resolved_url,
    segment_durations
  };
}

async function OTFSegmentInfo({ format, url, actions }: { format: Format, url: string, actions?: Actions }) {
  if (!actions)
    throw new InnertubeError('Unable to get segment durations for this OTF stream without an Actions instance', { format });

  const { resolved_url, segment_durations } = await getOTFSegmentInfo(url, actions);

  return <segment-template
    startNumber="1"
    timescale="1000"
    initialization={`${resolved_url}&sq=0`}
    media={`${resolved_url}&sq=$Number$`}
  >
    <segment-timeline>
      {
        segment_durations.map((segment_duration) => (
          <s
            d={segment_duration.duration}
            r={segment_duration.repeat_count}
          />
        ))
      }
    </segment-timeline>
  </segment-template>;
}

function SegmentInfo({ format, url, actions }: { format: Format, url: string, actions?: Actions }) {
  if (format.is_type_otf) {
    return <OTFSegmentInfo format={format} url={url} actions={actions} />;
  }

  if (!format.index_range || !format.init_range)
    throw new InnertubeError('Index and init ranges not available', { format });

  return <>
    <base-url>
      {url}
    </base-url>
    <segment-base indexRange={`${format.index_range.start}-${format.index_range.end}`}>
      <initialization range={`${format.init_range.start}-${format.init_range.end}`} />
    </segment-base>
  </>;
}

function AudioRepresentation({ format, player, cpn, actions, transformURL }: { format: Format, player?: Player, cpn?: string, actions?: Actions, transformURL?: URLTransformer }) {
  const codecs = getStringBetweenStrings(format.mime_type, 'codecs="', '"');

  const url = new URL(format.decipher(player));
  url.searchParams.set('cpn', cpn || '');

  return <representation
    id={format.audio_track ? `${format.itag}-${format.audio_track.id}` : format.itag}
    codecs={codecs}
    bandwidth={format.bitrate}
    audioSamplingRate={format.audio_sample_rate}
  >
    <audio-channel-configuration
      schemeIdUri="urn:mpeg:dash:23003:3:audio_channel_configuration:2011"
      value={format.audio_channels || 2}
    />
    <SegmentInfo format={format} actions={actions} url={transformURL ? transformURL(url).toString() : url.toString()} />
  </representation>;
}

function VideoRepresentation({ format, player, cpn, actions, transformURL }: { format: Format, player?: Player, cpn?: string, actions?: Actions, transformURL?: URLTransformer }) {
  const codecs = getStringBetweenStrings(format.mime_type, 'codecs="', '"');

  const url = new URL(format.decipher(player));
  url.searchParams.set('cpn', cpn || '');

  return <representation
    id={format.itag?.toString()}
    codecs={codecs}
    bandwidth={format.bitrate}
    width={format.width}
    height={format.height}
    maxPlayoutRate='1'
    frameRate={format.fps}
  >
    <SegmentInfo format={format} actions={actions} url={transformURL ? transformURL(url).toString() : url.toString()} />
  </representation>;
}

function MutiTrackSet({
  formats, type, player, cpn, actions, transformURL, getNextSetId
} : {
  formats: Format[], type: string, player?: Player, cpn?: string,
  actions?: Actions,
  transformURL?: URLTransformer, getNextSetId: () => number
}) {
  const tracks = new Map<string, Format[]>();
  for (const format of formats) {
    // eslint-disable-next-line
    if (!tracks.has(format.audio_track!.id)) {
      // eslint-disable-next-line
      tracks.set(format.audio_track!.id, []);
    }
    // eslint-disable-next-line
    tracks.get(format.audio_track!.id)!.push(format);
  }

  // The lang attribute has to go on the AdaptationSet element and the Role element goes inside the AdaptationSet too, so we need a separate adaptation set for each language and role
  return <>
    {
      Array.from(tracks.values()).map((formats) => {
        const first_format = formats[0];
        const set_id = getNextSetId();
        return (
          <adaptation-set
            id={set_id}
            mimeType={type.split(';').shift()}
            startWithSAP="1"
            subsegmentAlignment="true"
            lang={first_format.language}
            // Non-standard attribute used by shaka instead of the standard Label element
            label={first_format.audio_track?.display_name}
          >
            <role
              schemeIdUri="urn:mpeg:dash:role:2011"
              value={
                first_format.audio_track?.audio_is_default ? 'main' :
                  first_format.is_dubbed ? 'dub' :
                    first_format.is_descriptive ? 'description' :
                      'alternate'
              }
            />
            <label id={set_id}>
              {first_format.audio_track?.display_name}
            </label>
            {
              formats.map((format) => (
                <AudioRepresentation
                  format={format}
                  player={player}
                  cpn={cpn}
                  actions={actions}
                  transformURL={transformURL}
                />
              ))
            }
          </adaptation-set>
        );
      })
    }
  </>;
}

function DashManifest({
  streamingData,
  transformURL,
  rejectFormat,
  cpn,
  player,
  actions
}: DashManifestProps) {
  const formats = rejectFormat ? streamingData.adaptive_formats.filter((fmt) => !rejectFormat(fmt)) : streamingData.adaptive_formats;

  if (!formats.length)
    throw new InnertubeError('No adaptive formats found');

  const duration = formats[0].approx_duration_ms / 1000;

  const mime_info = new Map<string, Format[]>();

  for (const video_format of formats) {
    if ((!video_format.index_range || !video_format.init_range) && !video_format.is_type_otf) {
      continue;
    }
    const mime_type = video_format.mime_type;
    if (!mime_info.has(mime_type)) {
      mime_info.set(mime_type, []);
    }
    mime_info.get(mime_type)?.push(video_format);
  }

  let set_id = 0;

  return <mpd
    xmlns="urn:mpeg:dash:schema:mpd:2011"
    minBufferTime="PT1.500S"
    profiles="urn:mpeg:dash:profile:isoff-main:2011"
    type="static"
    mediaPresentationDuration={`PT${duration}S`}
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="urn:mpeg:dash:schema:mpd:2011 http://standards.iso.org/ittf/PubliclyAvailableStandards/MPEG-DASH_schema_files/DASH-MPD.xsd"
  >
    <period>
      {
        Array.from(mime_info.entries()).map(([ type, formats ]) => {
          // When the video has multiple different audio tracks we want to include the extra information in the manifest
          if (formats[0].has_audio && formats[0].audio_track) {
            return <MutiTrackSet
              formats={formats} type={type} player={player} cpn={cpn} actions={actions} transformURL={transformURL} getNextSetId={() => set_id++}
            />;
          }

          return (
            <adaptation-set
              id={set_id++}
              mimeType={type.split(';').shift()}
              startWithSAP="1"
              subsegmentAlignment="true"
            >
              {
                formats.map((format) => {
                  if (format.has_video)
                    return <VideoRepresentation
                      format={format}
                      player={player}
                      cpn={cpn}
                      actions={actions}
                      transformURL={transformURL}
                    />;

                  return <AudioRepresentation
                    format={format}
                    player={player}
                    cpn={cpn}
                    actions={actions}
                    transformURL={transformURL}
                  />;
                })
              }
            </adaptation-set>
          );
        })
      }
    </period>
  </mpd>;
}

export function toDash(
  streaming_data?: IStreamingData,
  url_transformer: URLTransformer = (url) => url,
  format_filter?: FormatFilter,
  cpn?: string,
  player?: Player,
  actions?: Actions
) {
  if (!streaming_data)
    throw new InnertubeError('Streaming data not available');

  return DashUtils.serialize(
    <DashManifest
      streamingData={streaming_data}
      transformURL={url_transformer}
      rejectFormat={format_filter}
      cpn={cpn}
      player={player}
      actions={actions}
    />
  );
}
