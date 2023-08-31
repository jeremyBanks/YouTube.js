# Changelog

## [7.0.0](https://github.com/jeremyBanks/YouTube.js/compare/v6.2.0...v7.0.0) (2023-08-31)


### ⚠ BREAKING CHANGES

* replace unnecessary classes with pure functions ([#468](https://github.com/jeremyBanks/YouTube.js/issues/468))
* overhaul core classes and remove redundant code ([#388](https://github.com/jeremyBanks/YouTube.js/issues/388))
* **Parser:** general refactoring of parsers ([#344](https://github.com/jeremyBanks/YouTube.js/issues/344))
* The `toDash` functions are now asynchronous, they now return a `Promise<string>` instead of a `string`, as we need to fetch the first sequence of the OTF format streams while building the manifest.
* cleanup platform support ([#306](https://github.com/jeremyBanks/YouTube.js/issues/306))
* fix inconsistent use of `SuperParsedResult`
* migrate core renderers to TypeScript
* rewrite `MusicNavigationButton` to TypeScript
* **ytmusic:** rewrite `Album` to TypeScript
* rewrite `History` to TypeScript
* rewrite `Analytics` to TypeScript ([#122](https://github.com/jeremyBanks/YouTube.js/issues/122))
* better cross runtime support ([#97](https://github.com/jeremyBanks/YouTube.js/issues/97))
* rewrite `PlaylistManager`
* finish parser migration

### Features

* add `&lt;info&gt;#addToWatchHistory()` ([#169](https://github.com/jeremyBanks/YouTube.js/issues/169)) ([28a651e](https://github.com/jeremyBanks/YouTube.js/commit/28a651ea3a889adcea8c34678a8ebac1318d225c))
* add `ANDROID_MUSIC` client ([ecac5f4](https://github.com/jeremyBanks/YouTube.js/commit/ecac5f4d7e5790baf4a6858f2255f1f84fc42851))
* add `CollaboratorInfoCardContent` renderer parser ([#180](https://github.com/jeremyBanks/YouTube.js/issues/180)) ([eb44b71](https://github.com/jeremyBanks/YouTube.js/commit/eb44b719396f30f8cdbd50af15829b2a76029d0f))
* add `LiveChatProductItem` and migrate `LiveChatBanner` to TypeScript ([323b90a](https://github.com/jeremyBanks/YouTube.js/commit/323b90a98c610af0c8e19e99bb35e17955a4379c))
* add `LiveChatRestrictedParticipation` node ([#267](https://github.com/jeremyBanks/YouTube.js/issues/267)) ([1163125](https://github.com/jeremyBanks/YouTube.js/commit/1163125f5ca066e2c1ec48d2ee4a6d648654e6a9))
* add `music#getRecap()` ([#165](https://github.com/jeremyBanks/YouTube.js/issues/165)) ([85fc468](https://github.com/jeremyBanks/YouTube.js/commit/85fc468cc9639dcc9ea6aa297a0e4ed8483a664b))
* add `MusicSortFilterButton` ([#151](https://github.com/jeremyBanks/YouTube.js/issues/151)) ([6fe4d23](https://github.com/jeremyBanks/YouTube.js/commit/6fe4d235ff739d1d22282cb44a78ce39e8ad34fa))
* add `MusicVisualHeader` ([#157](https://github.com/jeremyBanks/YouTube.js/issues/157)) ([b9e6e16](https://github.com/jeremyBanks/YouTube.js/commit/b9e6e16ce91a2aab173c0ed6c85a0a0ef1477a55))
* add `PlaylistPanelVideoWrapper` parser ([#176](https://github.com/jeremyBanks/YouTube.js/issues/176)) ([bc03c91](https://github.com/jeremyBanks/YouTube.js/commit/bc03c91df9d9f42d5b04bcfd2a803c489a255d0a))
* add `SimpleCardContent` ([3ff3d3c](https://github.com/jeremyBanks/YouTube.js/commit/3ff3d3c633bbe50abd65d10a6eebb105aa26f59f)), closes [#129](https://github.com/jeremyBanks/YouTube.js/issues/129)
* add `Studio#setThumbnail()` method ([#111](https://github.com/jeremyBanks/YouTube.js/issues/111)) ([a210396](https://github.com/jeremyBanks/YouTube.js/commit/a2103963b4b46d7fbefa73ceccd16a01416bcd5d))
* add `TVHTML5_SIMPLY_EMBEDDED_PLAYER` client ([#193](https://github.com/jeremyBanks/YouTube.js/issues/193)) ([2e5688f](https://github.com/jeremyBanks/YouTube.js/commit/2e5688f23553dbbcaaa0f29366a93ab805d9a84b))
* add account info parsers ([f4ce4d2](https://github.com/jeremyBanks/YouTube.js/commit/f4ce4d2f746f44dc9ad6381d89ba0e179a8ec98b))
* add is_live and is_upcoming to VideoDetails ([#271](https://github.com/jeremyBanks/YouTube.js/issues/271)) ([22b9c17](https://github.com/jeremyBanks/YouTube.js/commit/22b9c174bb14f2f05edced1884e83e52b6983cba))
* add live stream start_timestamp ([#275](https://github.com/jeremyBanks/YouTube.js/issues/275)) ([cd4d28c](https://github.com/jeremyBanks/YouTube.js/commit/cd4d28c9519c0f08fb118ed6278f8c4ab637769b))
* add LiveChatAutoModMessage ([#177](https://github.com/jeremyBanks/YouTube.js/issues/177)) ([e00be25](https://github.com/jeremyBanks/YouTube.js/commit/e00be25bf49cf6cf20239fad4c23e97e200dd291))
* Add paid chat color info ([#164](https://github.com/jeremyBanks/YouTube.js/issues/164)) ([a8322e3](https://github.com/jeremyBanks/YouTube.js/commit/a8322e35f554e2b9a7f18415f837a6a432e8e2d4))
* add parser support for MultiImage community posts ([#298](https://github.com/jeremyBanks/YouTube.js/issues/298)) ([de61782](https://github.com/jeremyBanks/YouTube.js/commit/de61782f1a673cbe66ae9b410341e39b7501ba84))
* add parsers for `TimeWatched` ([541cdc4](https://github.com/jeremyBanks/YouTube.js/commit/541cdc455f07b06ff5b7e3eb1a6b09c9a2cbfaa1))
* add RemoveChatItemAction and LiveChatTickerStickerItem ([#214](https://github.com/jeremyBanks/YouTube.js/issues/214)) ([a9eba7c](https://github.com/jeremyBanks/YouTube.js/commit/a9eba7ca62ff8bbfc9d1030395088dedd89ea769))
* add settings page parser ([#154](https://github.com/jeremyBanks/YouTube.js/issues/154)) ([13a86cb](https://github.com/jeremyBanks/YouTube.js/commit/13a86cb4e796db573ec7eefc93f1cda1d49e5d53))
* add support for chapters & video heatmap ([#263](https://github.com/jeremyBanks/YouTube.js/issues/263)) ([6a4b4f3](https://github.com/jeremyBanks/YouTube.js/commit/6a4b4f335924b96550403ad0d0b12eabeb29d760))
* Add support for descriptive audio tracks ([#338](https://github.com/jeremyBanks/YouTube.js/issues/338)) ([574b67a](https://github.com/jeremyBanks/YouTube.js/commit/574b67a1f707a32378586dd2fe7b2f36f4ab6ddb))
* add support for generating sessions locally ([#277](https://github.com/jeremyBanks/YouTube.js/issues/277)) ([00fa514](https://github.com/jeremyBanks/YouTube.js/commit/00fa514b030b311a9e493391cbb938b2a04667ed))
* add support for hashtag feeds ([#312](https://github.com/jeremyBanks/YouTube.js/issues/312)) ([bf12740](https://github.com/jeremyBanks/YouTube.js/commit/bf12740333a82c26fe84e7c702c2fbb8859814fc))
* Add support for OTF format streams ([3e4d41b](https://github.com/jeremyBanks/YouTube.js/commit/3e4d41bf06ba16232979977c705444f2032bcde6))
* add support for searching within a channel ([#262](https://github.com/jeremyBanks/YouTube.js/issues/262)) ([2b3642b](https://github.com/jeremyBanks/YouTube.js/commit/2b3642ba63bbcd0c6330860245722cbf2f91191e))
* add support for switching accounts (cookie based auth only) ([#236](https://github.com/jeremyBanks/YouTube.js/issues/236)) ([5ea0a0e](https://github.com/jeremyBanks/YouTube.js/commit/5ea0a0ebf8fe5e0731d8bbdd08cdc50bad069a6b))
* add support for topic/auto-generated channels and fix minor parsing errors ([#233](https://github.com/jeremyBanks/YouTube.js/issues/233)) ([3cbcd71](https://github.com/jeremyBanks/YouTube.js/commit/3cbcd71a3a2a868377b46b9240758642bec2a051))
* add support for uploading videos ([#115](https://github.com/jeremyBanks/YouTube.js/issues/115)) ([95079ce](https://github.com/jeremyBanks/YouTube.js/commit/95079ced09531dd8877cd3692f7c705f5b4a375c))
* add support for YouTube Kids ([#291](https://github.com/jeremyBanks/YouTube.js/issues/291)) ([2bbefef](https://github.com/jeremyBanks/YouTube.js/commit/2bbefefbb7cb061f3e7b686158b7568c32f0da5d))
* Add upcoming and live info to playlist videos ([#317](https://github.com/jeremyBanks/YouTube.js/issues/317)) ([a0bfe16](https://github.com/jeremyBanks/YouTube.js/commit/a0bfe164279ec27b0c49c6b0c32222c1a92df5c3))
* allow checking whether a channel has optional tabs ([#296](https://github.com/jeremyBanks/YouTube.js/issues/296)) ([ceefbed](https://github.com/jeremyBanks/YouTube.js/commit/ceefbed98c70bb936e2d2df58c02834842acfdfc))
* allow enabling safety mode ([#269](https://github.com/jeremyBanks/YouTube.js/issues/269)) ([a27807b](https://github.com/jeremyBanks/YouTube.js/commit/a27807b6c1b1e39bc54b0259c266ab3a8d81d944))
* allow users to cache OAuth credentials ([#121](https://github.com/jeremyBanks/YouTube.js/issues/121)) ([9ef765d](https://github.com/jeremyBanks/YouTube.js/commit/9ef765dbc1a466b839b273d6fc1b77278f95c1a1))
* better cross runtime support ([#97](https://github.com/jeremyBanks/YouTube.js/issues/97)) ([fb68e6b](https://github.com/jeremyBanks/YouTube.js/commit/fb68e6bcfedecc67e9131b71292a2dd3a21b7f14))
* bring back `Video#is_live` and add `ExpandableMetadata` ([#256](https://github.com/jeremyBanks/YouTube.js/issues/256)) ([e37f42f](https://github.com/jeremyBanks/YouTube.js/commit/e37f42f41b9dc884e0ef6cb57d974875c2915382))
* **Channel:** Add `getPodcasts()` method ([f267fcd](https://github.com/jeremyBanks/YouTube.js/commit/f267fcd8beccf237b8d1924463990273887cae28))
* **Channel:** Add `getReleases()` method ([f267fcd](https://github.com/jeremyBanks/YouTube.js/commit/f267fcd8beccf237b8d1924463990273887cae28))
* **Channel:** Add getters for all optional tabs ([#303](https://github.com/jeremyBanks/YouTube.js/issues/303)) ([b2900f4](https://github.com/jeremyBanks/YouTube.js/commit/b2900f48a7aa4c22635e1819ba9f636e81964f2c))
* **Channel:** add support for filters ([#237](https://github.com/jeremyBanks/YouTube.js/issues/237)) ([0e5e0c0](https://github.com/jeremyBanks/YouTube.js/commit/0e5e0c0fabc75882ad9d4fba1c1a5682581e285f))
* **Channel:** add support for sorting the playlist tab ([#295](https://github.com/jeremyBanks/YouTube.js/issues/295)) ([50ef712](https://github.com/jeremyBanks/YouTube.js/commit/50ef71284db41e5f94bb511892651d22a1d363a0))
* **Channel:** parse subscribe button ([b036e2f](https://github.com/jeremyBanks/YouTube.js/commit/b036e2fcdc0d7fdad4802aa6b9072fbeb50350bb))
* custom parser error handler ([#222](https://github.com/jeremyBanks/YouTube.js/issues/222)) ([8740deb](https://github.com/jeremyBanks/YouTube.js/commit/8740deb1f264fd7eb084001317c0a1207e48b78c))
* **download:** bring back `WEB` client ([#156](https://github.com/jeremyBanks/YouTube.js/issues/156)) ([317bca2](https://github.com/jeremyBanks/YouTube.js/commit/317bca261c2974a6fb5996212c8685ef62d25ce7))
* **EmojiRun:** Add is_custom to identify custom emojis ([#283](https://github.com/jeremyBanks/YouTube.js/issues/283)) ([5a362a0](https://github.com/jeremyBanks/YouTube.js/commit/5a362a0bd5b6974dc029bdbcdbcb81c8c65a1573))
* Enable importHelpers in tsconfig to reduce output size ([#378](https://github.com/jeremyBanks/YouTube.js/issues/378)) ([0b301de](https://github.com/jeremyBanks/YouTube.js/commit/0b301de6a1e1352a64881c1751a84360922a77cd))
* export `FormatUtils`' types ([2d774e2](https://github.com/jeremyBanks/YouTube.js/commit/2d774e26aae79f3d1b115e0e85c148ae80985529))
* expose parser and YTNodes as public APIs ([3dc357b](https://github.com/jeremyBanks/YouTube.js/commit/3dc357bee075e92904ea097ef80a51ff9aa172d7))
* extract channel error alert ([0b99180](https://github.com/jeremyBanks/YouTube.js/commit/0b991800a5c67f0e702251982b52eb8531f36f19))
* finalize comment section nodes  ([#280](https://github.com/jeremyBanks/YouTube.js/issues/280)) ([dca61c3](https://github.com/jeremyBanks/YouTube.js/commit/dca61c3a22896b49e1f3bde000b997557a61c720))
* fix `music#library.getArtists()` and add `MusicShelf.bottom_button` ([#152](https://github.com/jeremyBanks/YouTube.js/issues/152)) ([05b4593](https://github.com/jeremyBanks/YouTube.js/commit/05b4593e0a8f13cfd8fc56470eecbc429aa15da8))
* **Format:** Populate audio language from captions when available ([#445](https://github.com/jeremyBanks/YouTube.js/issues/445)) ([bdd98a3](https://github.com/jeremyBanks/YouTube.js/commit/bdd98a3b9be39c11942043a300a6ebce9a15efc6))
* **FormatUtils:** support multiple audio tracks in the DASH manifest ([#308](https://github.com/jeremyBanks/YouTube.js/issues/308)) ([a69e43b](https://github.com/jeremyBanks/YouTube.js/commit/a69e43bf3ae02f2428c4aa86f647e3e5e0db5ba6))
* **GridVideo:** add `upcoming`, `upcoming_text`, `is_reminder_set` and `buttons` ([05de3ec](https://github.com/jeremyBanks/YouTube.js/commit/05de3ec97a1fea92543b5e5f84933b86a07ab830)), closes [#380](https://github.com/jeremyBanks/YouTube.js/issues/380)
* implement `Innertube#resolveURL(url)` ([#268](https://github.com/jeremyBanks/YouTube.js/issues/268)) ([5cfb969](https://github.com/jeremyBanks/YouTube.js/commit/5cfb969e33e810e3c117bc1a78206672cad0e453))
* improve LiveChat types ([daaba37](https://github.com/jeremyBanks/YouTube.js/commit/daaba3745e07a8f6b4cda91b3459675b355e1bac))
* improve parsing ([#145](https://github.com/jeremyBanks/YouTube.js/issues/145)) ([dc2f005](https://github.com/jeremyBanks/YouTube.js/commit/dc2f0055cc49a9a40c7546250b0a579b7c808f27))
* improve support for dubbed content ([#293](https://github.com/jeremyBanks/YouTube.js/issues/293)) ([d6c5a9b](https://github.com/jeremyBanks/YouTube.js/commit/d6c5a9b971444d0cd746aaf5310d3389793680ea))
* **LiveChat:** add `SegmentedLikeDislikeButton` and `LiveChatDialog` ([#181](https://github.com/jeremyBanks/YouTube.js/issues/181)) ([91847ae](https://github.com/jeremyBanks/YouTube.js/commit/91847ae3cc8665f7eb2d0998562c54e0fbadd99e))
* **LiveChat:** add support for moderation & more ([#202](https://github.com/jeremyBanks/YouTube.js/issues/202)) ([2f56c15](https://github.com/jeremyBanks/YouTube.js/commit/2f56c15ecc151ec8d0d764b7c3a4dcb10ec8f6e1))
* make `Player` instance optional ([#240](https://github.com/jeremyBanks/YouTube.js/issues/240)) ([fe4c543](https://github.com/jeremyBanks/YouTube.js/commit/fe4c5433cf6f8de7b9b54c1c153da7f82d9ceede))
* migrate all playlist renderers to TypeScript ([a788c9c](https://github.com/jeremyBanks/YouTube.js/commit/a788c9c80fa944e5708ec4c6ef8802016a2c20c6))
* **Music:** add automix support and other minor improvements  ([#184](https://github.com/jeremyBanks/YouTube.js/issues/184)) ([f2f48af](https://github.com/jeremyBanks/YouTube.js/commit/f2f48af1bca59354615c4830016bf3dd57145dfc))
* **MusicResponsiveListItem:** Detect non music tracks properly ([815e54b](https://github.com/jeremyBanks/YouTube.js/commit/815e54b854fcda3f5423231c8495ce1fb69d8237))
* **MusicResponsiveListItem:** make flex/fixed cols public ([#382](https://github.com/jeremyBanks/YouTube.js/issues/382)) ([096bf36](https://github.com/jeremyBanks/YouTube.js/commit/096bf362c9bd46a510ecb0d01623c70841e26e26))
* **NavigationEndpoint:** parse `content` prop ([dd21f8c](https://github.com/jeremyBanks/YouTube.js/commit/dd21f8c75ae1d76180faab4f0ef9ee40920966e3))
* parse isLive in CompactVideo ([#294](https://github.com/jeremyBanks/YouTube.js/issues/294)) ([2acb7da](https://github.com/jeremyBanks/YouTube.js/commit/2acb7da0198bfeca6ff911cf95cf06a220fccaa5))
* **parser:** Add `AlertWithButton` ([#486](https://github.com/jeremyBanks/YouTube.js/issues/486)) ([8b69587](https://github.com/jeremyBanks/YouTube.js/commit/8b6958778721ba274283f641779fb60bc6f42cd2))
* **parser:** add `banner` to `PlaylistHeader` ([#337](https://github.com/jeremyBanks/YouTube.js/issues/337)) ([95033e7](https://github.com/jeremyBanks/YouTube.js/commit/95033e723ef912706e4d176de6b2760f017184e1))
* **parser:** add `ChannelAgeGate` node ([1cdf701](https://github.com/jeremyBanks/YouTube.js/commit/1cdf701c8403db6b681a26ecb1df2daa51add454))
* **parser:** Add `ChannelHeaderLinksView` ([#484](https://github.com/jeremyBanks/YouTube.js/issues/484)) ([ed7be2a](https://github.com/jeremyBanks/YouTube.js/commit/ed7be2a675cf1ec663e743e90db6260c97546739))
* **parser:** Add `CommentsSimplebox` parser ([#442](https://github.com/jeremyBanks/YouTube.js/issues/442)) ([555d257](https://github.com/jeremyBanks/YouTube.js/commit/555d257459b76d7c0158e9c6b189a75a82b10faf))
* **parser:** Add `CompactMovie` ([#487](https://github.com/jeremyBanks/YouTube.js/issues/487)) ([2eed172](https://github.com/jeremyBanks/YouTube.js/commit/2eed1726d5bde7648af09273cc14ab4a315cb23e))
* **parser:** add `ConversationBar` node ([b2253df](https://github.com/jeremyBanks/YouTube.js/commit/b2253df8022217dc486155d8cacbf22db04dd9c2))
* **parser:** add `GridMix` ([#356](https://github.com/jeremyBanks/YouTube.js/issues/356)) ([a8e7e64](https://github.com/jeremyBanks/YouTube.js/commit/a8e7e644ec6df3b3c98a313f0321da27b4ca456e))
* **parser:** add `GridShow` and `ShowCustomThumbnail` ([8ef4b42](https://github.com/jeremyBanks/YouTube.js/commit/8ef4b42d444c4fbe5cd65a55c0e0e7aa31738755)), closes [#459](https://github.com/jeremyBanks/YouTube.js/issues/459)
* **parser:** Add `HashtagTile` ([#440](https://github.com/jeremyBanks/YouTube.js/issues/440)) ([ae2557d](https://github.com/jeremyBanks/YouTube.js/commit/ae2557d15c9df09bb92e0dc6191670d72b36631a))
* **parser:** Add `IncludingResultsFor` ([#447](https://github.com/jeremyBanks/YouTube.js/issues/447)) ([c477b82](https://github.com/jeremyBanks/YouTube.js/commit/c477b824c084552169062f72cde8890e77b31f59))
* **parser:** add `MacroMarkersList` ([#444](https://github.com/jeremyBanks/YouTube.js/issues/444)) ([708c5f7](https://github.com/jeremyBanks/YouTube.js/commit/708c5f7394b4ea140836b9483848cb61b97ea1af))
* **parser:** add `MusicCardShelf` ([#358](https://github.com/jeremyBanks/YouTube.js/issues/358)) ([9b005d6](https://github.com/jeremyBanks/YouTube.js/commit/9b005d62d6590a2ddf6848dabfa33fce36e8df9c))
* **parser:** add `MusicMultiRowListItem` ([494ee87](https://github.com/jeremyBanks/YouTube.js/commit/494ee8776af0839d3ee2cca3d2fd836680cfdb9e))
* **parser:** Add `PageHeader` ([#450](https://github.com/jeremyBanks/YouTube.js/issues/450)) ([18cbc8c](https://github.com/jeremyBanks/YouTube.js/commit/18cbc8c038ddddffa1ba1519e56a8054b2996e42))
* **parser:** Add `play_all_button` to `Shelf` ([#345](https://github.com/jeremyBanks/YouTube.js/issues/345)) ([427db5b](https://github.com/jeremyBanks/YouTube.js/commit/427db5bbc2bf3e8ec60371d504c2ab1cdae6e918))
* **parser:** Add `Quiz` ([#437](https://github.com/jeremyBanks/YouTube.js/issues/437)) ([cffa868](https://github.com/jeremyBanks/YouTube.js/commit/cffa868c6eeb579047653fac65da8e913fb3c621))
* **parser:** Add `SearchHeader` ([6997982](https://github.com/jeremyBanks/YouTube.js/commit/6997982cf2db87edf4929e9a77e2690e7b630d3d)), closes [#452](https://github.com/jeremyBanks/YouTube.js/issues/452)
* **parser:** Add `ShowMiniplayerCommand` ([#443](https://github.com/jeremyBanks/YouTube.js/issues/443)) ([a9cdbf7](https://github.com/jeremyBanks/YouTube.js/commit/a9cdbf7010e7b9b9cfde5db645d51bdad51006c5))
* **parser:** add `view_playlist` to `Playlist` ([#348](https://github.com/jeremyBanks/YouTube.js/issues/348)) ([9cb4530](https://github.com/jeremyBanks/YouTube.js/commit/9cb45302997771d909487b1ecba6f38655abef48))
* **parser:** add InfoPanelContent and InfoPanelContainer nodes ([4784dfa](https://github.com/jeremyBanks/YouTube.js/commit/4784dfa563a4dbeaee31811824d5aa37a67f5557)), closes [#326](https://github.com/jeremyBanks/YouTube.js/issues/326)
* **parser:** allow parser to find renderers by name ([f924a39](https://github.com/jeremyBanks/YouTube.js/commit/f924a394091feda6f38168eb84ccb38ab1c701ce))
* **parser:** ignore PrimetimePromo node ([ce9d9c5](https://github.com/jeremyBanks/YouTube.js/commit/ce9d9c56b4f45c0139d74edc95c295ecfd1ee4b1))
* **Parser:** just-in-time YTNode generation ([#310](https://github.com/jeremyBanks/YouTube.js/issues/310)) ([2cee590](https://github.com/jeremyBanks/YouTube.js/commit/2cee59024c730c34aa06052849ed6fb3f862ef33))
* **parser:** SharedPost ([#332](https://github.com/jeremyBanks/YouTube.js/issues/332)) ([ce53ac1](https://github.com/jeremyBanks/YouTube.js/commit/ce53ac18435cbcb20d6d4c4ab52fd156091e7592))
* **parser:** Text#toHTML ([#300](https://github.com/jeremyBanks/YouTube.js/issues/300)) ([e82e23d](https://github.com/jeremyBanks/YouTube.js/commit/e82e23dfbb24dff3ddf45754c7319d783990e254))
* **PlaylistVideo:** Extract video_info and accessibility_label texts ([#376](https://github.com/jeremyBanks/YouTube.js/issues/376)) ([c9135e6](https://github.com/jeremyBanks/YouTube.js/commit/c9135e66d3c9c72b8d063eedcf3cc2123800946d))
* properly type renderer parsers ([4181969](https://github.com/jeremyBanks/YouTube.js/commit/4181969d52a14ff01581288d15a0f17e027f3d62))
* **ReelItem:** Add accessibility label ([#401](https://github.com/jeremyBanks/YouTube.js/issues/401)) ([046103a](https://github.com/jeremyBanks/YouTube.js/commit/046103a4d8af09fafefab6e9f971184eeca75c2e))
* **Search:** add support for `features` filter ([#270](https://github.com/jeremyBanks/YouTube.js/issues/270)) ([3756e63](https://github.com/jeremyBanks/YouTube.js/commit/3756e63996735f6b3d8293cbff1e3166a9fc575d))
* **Session:** Add `IOS` to `ClientType` enum ([22a38c0](https://github.com/jeremyBanks/YouTube.js/commit/22a38c0762499de74f0aeb3ef01332f893518b08))
* **Session:** Add fallback for session data retrieval ([#490](https://github.com/jeremyBanks/YouTube.js/issues/490)) ([10c15bf](https://github.com/jeremyBanks/YouTube.js/commit/10c15bfb9f131a2acea2f26ff3328993d8d8f4aa))
* **Session:** allow overriding geolocation ([#260](https://github.com/jeremyBanks/YouTube.js/issues/260)) ([cac7625](https://github.com/jeremyBanks/YouTube.js/commit/cac762569a842bd8e8d25fad072ad3544c407c17))
* **Session:** allow setting a custom visitor data token ([#371](https://github.com/jeremyBanks/YouTube.js/issues/371)) ([13ebf0a](https://github.com/jeremyBanks/YouTube.js/commit/13ebf0a03973e7ba7b65e9f72c4333927e4254f6))
* **ShowingResultsFor:** parse all props ([1d9587e](https://github.com/jeremyBanks/YouTube.js/commit/1d9587e8c1ee0b11bb0e444c3d1e98162e9e1059))
* smaller user-agent list ([#112](https://github.com/jeremyBanks/YouTube.js/issues/112)) ([#113](https://github.com/jeremyBanks/YouTube.js/issues/113)) ([ef6ec59](https://github.com/jeremyBanks/YouTube.js/commit/ef6ec5940264fbd0449fb5af07462d67c349d0d1))
* **studio:** add support for updating video metadata ([#219](https://github.com/jeremyBanks/YouTube.js/issues/219)) ([477c030](https://github.com/jeremyBanks/YouTube.js/commit/477c0300842515b9ad76448de81e64b979ffd4cf))
* **TextRun:** add support for formatting ([#254](https://github.com/jeremyBanks/YouTube.js/issues/254)) ([883a023](https://github.com/jeremyBanks/YouTube.js/commit/883a023624cab85408b700eef186e236d28153d9))
* **toDash:** Add audio track labels to the manifest when available ([#402](https://github.com/jeremyBanks/YouTube.js/issues/402)) ([84b4f1e](https://github.com/jeremyBanks/YouTube.js/commit/84b4f1efd111321e4f3e5a87844790c4ec9b0b52))
* **toDash:** Add color information ([#430](https://github.com/jeremyBanks/YouTube.js/issues/430)) ([3500e92](https://github.com/jeremyBanks/YouTube.js/commit/3500e926327d560b1db036bfe503c276b91922ac))
* **toDash:** Add option to include thumbnails in the manifest ([#446](https://github.com/jeremyBanks/YouTube.js/issues/446)) ([1a03473](https://github.com/jeremyBanks/YouTube.js/commit/1a034733f6bb641e2d97df12de81ae3516c1f703))
* **ToggleMenuServiceItem:** parse default nav endpoint ([a056696](https://github.com/jeremyBanks/YouTube.js/commit/a0566969ba436f31ca3722d09442a0c6302235d7))
* update InnerTubePayload protobuf ([6da69b4](https://github.com/jeremyBanks/YouTube.js/commit/6da69b4f18509b1e28f43854adf328fbb3335621))
* **VideoDetails:** Add is_post_live_dvr property ([#411](https://github.com/jeremyBanks/YouTube.js/issues/411)) ([a11e596](https://github.com/jeremyBanks/YouTube.js/commit/a11e5962c6eb73b14623a9de1e6c8c2534146b1e))
* **VideoInfo:** add `game_info` and `category` ([#333](https://github.com/jeremyBanks/YouTube.js/issues/333)) ([214aa14](https://github.com/jeremyBanks/YouTube.js/commit/214aa147ce6306e37a6bf860a7bed5635db4797e))
* **VideoInfo:** support get by endpoint + more info ([#342](https://github.com/jeremyBanks/YouTube.js/issues/342)) ([0d35fe0](https://github.com/jeremyBanks/YouTube.js/commit/0d35fe0ca5e87a877b76cbb6cf3c92843eac5a99))
* **VideoInfo:** support iOS client ([#467](https://github.com/jeremyBanks/YouTube.js/issues/467)) ([46fe18b](https://github.com/jeremyBanks/YouTube.js/commit/46fe18b763e0c943b24ea10fdf25456ab9ade709))
* **VideoSecondaryInfo:** add support for attributed descriptions ([#325](https://github.com/jeremyBanks/YouTube.js/issues/325)) ([f933cb4](https://github.com/jeremyBanks/YouTube.js/commit/f933cb45bcb92c07b3bc063d63869a51cbff4eb0))
* **YouTube Playlist:** Add subtitle and fix author optionality ([#458](https://github.com/jeremyBanks/YouTube.js/issues/458)) ([0fa5a85](https://github.com/jeremyBanks/YouTube.js/commit/0fa5a859ae15a35266297079e3e34fd9f3a5ebf4))
* **YouTube/Search:** add `SearchSubMenu` node ([#340](https://github.com/jeremyBanks/YouTube.js/issues/340)) ([a511608](https://github.com/jeremyBanks/YouTube.js/commit/a511608f18b37b0d9f2c7958ed5128330fabcfa0))
* **yt:** add `getGuide()` ([#335](https://github.com/jeremyBanks/YouTube.js/issues/335)) ([2cc7b8b](https://github.com/jeremyBanks/YouTube.js/commit/2cc7b8bcd6938c7fb3af4f854a1d78b86d153873))
* **yt:** add support for movie items and trailers ([#349](https://github.com/jeremyBanks/YouTube.js/issues/349)) ([9f1c31d](https://github.com/jeremyBanks/YouTube.js/commit/9f1c31d7a09532e80a187b14acceff31c22579bf))
* **ytkids:** add `getChannel()` ([#292](https://github.com/jeremyBanks/YouTube.js/issues/292)) ([0fc29f0](https://github.com/jeremyBanks/YouTube.js/commit/0fc29f0bbf965215146a6ae192494c74e6cefcbb))
* **ytmusic:** `music#Playlist` fixes and additions ([#138](https://github.com/jeremyBanks/YouTube.js/issues/138)) ([dba34dc](https://github.com/jeremyBanks/YouTube.js/commit/dba34dc5aef9208abdc61df627732ceef0374392))
* **ytmusic:** add `music#getInfo()` ([d5f3498](https://github.com/jeremyBanks/YouTube.js/commit/d5f34982f40ac88947889e68dacc8de5d3062ecc))
* **ytmusic:** add `music#getPlaylist()` ([#131](https://github.com/jeremyBanks/YouTube.js/issues/131)) ([9b4d86b](https://github.com/jeremyBanks/YouTube.js/commit/9b4d86b81f137ec89b8adecf49d265f3de5c8392))
* **ytmusic:** Add support for YouTube Music mood filters ([#404](https://github.com/jeremyBanks/YouTube.js/issues/404)) ([77b39c7](https://github.com/jeremyBanks/YouTube.js/commit/77b39c79ee0768eb203b7d47ea81286d470c21f2))
* **ytmusic:** add taste builder nodes ([#383](https://github.com/jeremyBanks/YouTube.js/issues/383)) ([a9cad49](https://github.com/jeremyBanks/YouTube.js/commit/a9cad49333aa85c98bbb96e5f2d5b57d9beeb0c7))
* **ytmusic:** expose Message renderer in the `Search` object ([c12b148](https://github.com/jeremyBanks/YouTube.js/commit/c12b1482fea801c139d01f008948244c9a303338))
* **ytmusic:** implement music#Library ([#136](https://github.com/jeremyBanks/YouTube.js/issues/136)) ([f6a2a41](https://github.com/jeremyBanks/YouTube.js/commit/f6a2a418be1bb232ee86e5612865e215677abdcb))


### Bug Fixes

* `DidYouMean` endpoints and add `text` prop ([#158](https://github.com/jeremyBanks/YouTube.js/issues/158)) ([c993649](https://github.com/jeremyBanks/YouTube.js/commit/c99364942c928d89643e2814441a3bd8ba4c9ed3))
* `LiveChatAuthorBadge` where `MetadataBadge` was expected ([#179](https://github.com/jeremyBanks/YouTube.js/issues/179)) ([9e618cc](https://github.com/jeremyBanks/YouTube.js/commit/9e618cc576182dce77ef336846eabfcec197bb3d))
* `Music#Artist`parse err if missing shelves ([#155](https://github.com/jeremyBanks/YouTube.js/issues/155)) ([173aec6](https://github.com/jeremyBanks/YouTube.js/commit/173aec65f5189e9e142d63507f0de763c8bc29dc))
* `Music#getAlbum()`fails for private album ID ([#162](https://github.com/jeremyBanks/YouTube.js/issues/162)) ([e498815](https://github.com/jeremyBanks/YouTube.js/commit/e4988157955cae6967d7c5c304b2c7d694fc5b21))
* `Music#getArtist()` and `DropdownItem` ([#170](https://github.com/jeremyBanks/YouTube.js/issues/170)) ([60730a5](https://github.com/jeremyBanks/YouTube.js/commit/60730a5531c70ca41a75186cc1927216c3760856))
* **Actions:** do not send `undefined` payloads ([0130229](https://github.com/jeremyBanks/YouTube.js/commit/01302292360f798b0c16783e039d38563168467a))
* add missing import in index.ts ([#188](https://github.com/jeremyBanks/YouTube.js/issues/188)) ([a90f5eb](https://github.com/jeremyBanks/YouTube.js/commit/a90f5eb8539dc0af326cffa0bff8d9e29b062162))
* add missing playlist_length ([#110](https://github.com/jeremyBanks/YouTube.js/issues/110)) ([9c44cfc](https://github.com/jeremyBanks/YouTube.js/commit/9c44cfc7f89a1c14b6a9dd2c266f395e1aeed60b))
* add YouTube Studio to the list of clients ([#261](https://github.com/jeremyBanks/YouTube.js/issues/261)) ([fb2e237](https://github.com/jeremyBanks/YouTube.js/commit/fb2e237284e6e483ade48a15c3b802eac92aa2ae))
* **android:** workaround streaming URLs returning 403 ([#390](https://github.com/jeremyBanks/YouTube.js/issues/390)) ([75ea09d](https://github.com/jeremyBanks/YouTube.js/commit/75ea09dde86b1bdf13b197d6e02701899300a371))
* assign MetadataBadge's label ([#311](https://github.com/jeremyBanks/YouTube.js/issues/311)) ([e37cf62](https://github.com/jeremyBanks/YouTube.js/commit/e37cf627322f688fcef18d41345f77cbccd58829))
* author and thumbnails for autogenerated playlists ([#251](https://github.com/jeremyBanks/YouTube.js/issues/251)) ([f5d61d7](https://github.com/jeremyBanks/YouTube.js/commit/f5d61d70f2c3d4cdf9f5986794b0dcaf74ddd22a))
* browser example ([#197](https://github.com/jeremyBanks/YouTube.js/issues/197)) ([fcbdae3](https://github.com/jeremyBanks/YouTube.js/commit/fcbdae3e34ba5c2ac4cc32796ea75a56998a748b))
* build error caused by `music#Playlist.getRelated()` ([#135](https://github.com/jeremyBanks/YouTube.js/issues/135)) ([4d60679](https://github.com/jeremyBanks/YouTube.js/commit/4d6067937ad2f6d0d9e470473d8f13c47a7dbd31))
* **build:** mark all deps as external ([d1f2369](https://github.com/jeremyBanks/YouTube.js/commit/d1f2369e43bb8a78cfadef0a25798846113ba351))
* **bundles:** Use ESM tslib build for the browser bundles ([#397](https://github.com/jeremyBanks/YouTube.js/issues/397)) ([2673419](https://github.com/jeremyBanks/YouTube.js/commit/26734194ab0bc5a9f57e1c509d7646ce8903d0c6))
* captions should be a PlayerCaptionsTracklist ([#148](https://github.com/jeremyBanks/YouTube.js/issues/148)) ([22b2953](https://github.com/jeremyBanks/YouTube.js/commit/22b2953ec8149cb3746807355be6267f075979b7))
* **ChannelAboutFullMetadata:** fix error when there are no primary links ([#299](https://github.com/jeremyBanks/YouTube.js/issues/299)) ([f62c66d](https://github.com/jeremyBanks/YouTube.js/commit/f62c66db396ba7d2f93007414101112b49d8375f))
* **Channel:** getting community continuations ([#329](https://github.com/jeremyBanks/YouTube.js/issues/329)) ([4c7b8a3](https://github.com/jeremyBanks/YouTube.js/commit/4c7b8a34030effa26c4ea186d3e9509128aec31c))
* **Channel:** type mismatch in `subscribe_button` prop ([573c864](https://github.com/jeremyBanks/YouTube.js/commit/573c8643aae16ec7b6be5b333619a5d8c91ca5c1))
* DidYouMean & ShowingResultsFor throwing type errors ([dfd09e9](https://github.com/jeremyBanks/YouTube.js/commit/dfd09e9683f3a6563ce79962e4a1c2596b9d91db))
* don't remove "VL" from playlist id ([#223](https://github.com/jeremyBanks/YouTube.js/issues/223)) ([d71b762](https://github.com/jeremyBanks/YouTube.js/commit/d71b762df57d7ea1c614ef47cfeabe63162f8428))
* export `Player` & `Session` classes ([4306197](https://github.com/jeremyBanks/YouTube.js/commit/43061970c66b8c767c3a7ac456ba22b67e88f0c7))
* filtered search & continuations not working correctly ([0fb0c23](https://github.com/jeremyBanks/YouTube.js/commit/0fb0c2318a21e37eeb70d5f66d76a502db290e3a))
* **Format:** Extracting audio language from captions ([#470](https://github.com/jeremyBanks/YouTube.js/issues/470)) ([31d27b1](https://github.com/jeremyBanks/YouTube.js/commit/31d27b1bca489ee0053d2783f1a956609845a901))
* **Format:** Fix `is_original` always being `true` ([#492](https://github.com/jeremyBanks/YouTube.js/issues/492)) ([0412fa0](https://github.com/jeremyBanks/YouTube.js/commit/0412fa05ff1f00960b398c2f18d5ce39ce0cb864))
* **Format:** some types were incorrect ([d8d9286](https://github.com/jeremyBanks/YouTube.js/commit/d8d92866d10d4e58dbbb683bf8150b2bb594f4a7))
* **http:** android tv http client missing `clientName` ([#370](https://github.com/jeremyBanks/YouTube.js/issues/370)) ([cb8fafe](https://github.com/jeremyBanks/YouTube.js/commit/cb8fafe94b8ab330ae58211a892923321d65d890))
* improve sig extraction ([#183](https://github.com/jeremyBanks/YouTube.js/issues/183)) ([3a7da21](https://github.com/jeremyBanks/YouTube.js/commit/3a7da21fd18c52a839b966184f87710182567f1b))
* include `thirdParty` prop for requests using `TV_EMBEDDED` ([#198](https://github.com/jeremyBanks/YouTube.js/issues/198)) ([affbe84](https://github.com/jeremyBanks/YouTube.js/commit/affbe842842a5b387c50f84699495b69b34d47be))
* incorrect node parser implementations ([#428](https://github.com/jeremyBanks/YouTube.js/issues/428)) ([222dfce](https://github.com/jeremyBanks/YouTube.js/commit/222dfce6bbd13b2cd80ae11540cbc0edd9053fc5))
* invalid set ids in dash manifest ([#480](https://github.com/jeremyBanks/YouTube.js/issues/480)) ([1c3ea2a](https://github.com/jeremyBanks/YouTube.js/commit/1c3ea2acd38652c6b40a0817a7836c672a776c4e))
* like/dislike methods not working correctly ([a9f03a1](https://github.com/jeremyBanks/YouTube.js/commit/a9f03a15238792a572c33eb0335d72c647019782))
* likes not being parsed correctly ([89794d6](https://github.com/jeremyBanks/YouTube.js/commit/89794d65da3a8987db8aaba12fb1a9020f74492e))
* **linter:** ignore compiled protobuf ([f4b947f](https://github.com/jeremyBanks/YouTube.js/commit/f4b947f8e20ff66131944738c87380f31bc8d881))
* **linter:** oops, wrong extension ([5a99190](https://github.com/jeremyBanks/YouTube.js/commit/5a991901366d6fe8c536a8573aed756e9adfc412))
* make cookie auth possible again ([2de77c8](https://github.com/jeremyBanks/YouTube.js/commit/2de77c8f2cef4e987eabd9d468e0e71b7c7c6a9b)), closes [#105](https://github.com/jeremyBanks/YouTube.js/issues/105)
* minor parsing issues and other improvements  ([#194](https://github.com/jeremyBanks/YouTube.js/issues/194)) ([dcf2b72](https://github.com/jeremyBanks/YouTube.js/commit/dcf2b720a09c82a1ad93815d338c0490c84d0da5))
* **MultiMarkersPlayerBar:** avoid observing undefined objects ([f351770](https://github.com/jeremyBanks/YouTube.js/commit/f3517708ff34093a544c09d6f5f1ec806130d5cc))
* **music#Library:** sort_by err when items  &lt;= 1 ([#137](https://github.com/jeremyBanks/YouTube.js/issues/137)) ([713fd13](https://github.com/jeremyBanks/YouTube.js/commit/713fd13c74449e00b4f85582a8ffbf8a28a0a421))
* **Music:** search endpoint missing ([f7c1e0f](https://github.com/jeremyBanks/YouTube.js/commit/f7c1e0f2492cbaa8571df54296fa935cdd9eb5e6)), closes [#242](https://github.com/jeremyBanks/YouTube.js/issues/242)
* **node:** Electron apps crashing ([#367](https://github.com/jeremyBanks/YouTube.js/issues/367)) ([e7eacd9](https://github.com/jeremyBanks/YouTube.js/commit/e7eacd974211c90e7fbddfbf8019388cda3dfa5a))
* **NotificationsCount:** default to 0 ([db77bba](https://github.com/jeremyBanks/YouTube.js/commit/db77bba802b41c0eb429f58eaaad0e6ba614592d))
* **OAuth:** client identity matching ([#421](https://github.com/jeremyBanks/YouTube.js/issues/421)) ([07c1b3e](https://github.com/jeremyBanks/YouTube.js/commit/07c1b3e0e57cb1fa42e4772775bfd1437bbc731f))
* oopsie, forgot to remove the video id while debugging ([2d7fe04](https://github.com/jeremyBanks/YouTube.js/commit/2d7fe04a8a5d0589717e91a427d0a2449d41b61e))
* **package:** Bump Jinter to fix bad export order ([#439](https://github.com/jeremyBanks/YouTube.js/issues/439)) ([2aef678](https://github.com/jeremyBanks/YouTube.js/commit/2aef67876ec19118b37d3cecd429ccf8239989e0))
* **parser:** Allow any property in the `RawResponse` interface ([3bc53a8](https://github.com/jeremyBanks/YouTube.js/commit/3bc53a8c12e65b22f19a3e337641196b692a94db))
* **parser:** export YTNodes individually so they can be used as types ([200632f](https://github.com/jeremyBanks/YouTube.js/commit/200632f374d5e0e105b600d579a2665a6fb36e38)), closes [#321](https://github.com/jeremyBanks/YouTube.js/issues/321)
* **parser:** Logger logging `classdata` as `[Object object]` ([bf1510b](https://github.com/jeremyBanks/YouTube.js/commit/bf1510b235e3ee7d13d51f092babd1105c3d6b9f))
* **parser:** Make Video.is_live work on channel pages ([#368](https://github.com/jeremyBanks/YouTube.js/issues/368)) ([bd35faa](https://github.com/jeremyBanks/YouTube.js/commit/bd35faa5978f0b822e98d019523be1303374ddc0))
* **PlayerCaptionsTracklist:** parse props only if they exist in the node ([470d8d9](https://github.com/jeremyBanks/YouTube.js/commit/470d8d94063f0159cd005c9eb15fd1a4a175bea0)), closes [#372](https://github.com/jeremyBanks/YouTube.js/issues/372)
* **PlayerEndpoint:** Use different player params ([#419](https://github.com/jeremyBanks/YouTube.js/issues/419)) ([519be72](https://github.com/jeremyBanks/YouTube.js/commit/519be72445b7ff392b396e16bcb1dc05c7df8976))
* **PlayerMicroformat:** Make the embed field optional ([#320](https://github.com/jeremyBanks/YouTube.js/issues/320)) ([a0e6cef](https://github.com/jeremyBanks/YouTube.js/commit/a0e6cef00fb9e3f52593cec22704f7ddc1f7553e))
* playlist radios misidentified as videos ([#147](https://github.com/jeremyBanks/YouTube.js/issues/147)) ([a4965ee](https://github.com/jeremyBanks/YouTube.js/commit/a4965ee43d15d846f29a9ca99323720e4d65f06a))
* **Playlist:** Add thumbnail_renderer on Playlist when response includes it ([#424](https://github.com/jeremyBanks/YouTube.js/issues/424)) ([4f9427d](https://github.com/jeremyBanks/YouTube.js/commit/4f9427d752e89faec8dd1c4fd7a9607dca998c7a))
* **Playlist:** Only try extracting the subtitle for the first page ([#465](https://github.com/jeremyBanks/YouTube.js/issues/465)) ([e370116](https://github.com/jeremyBanks/YouTube.js/commit/e3701160928e9e959b88ca215c6b0a44c70ca6e6))
* **Playlist:** Parse `PlaylistCustomThumbnail` for `thumbnail_renderer` ([f267fcd](https://github.com/jeremyBanks/YouTube.js/commit/f267fcd8beccf237b8d1924463990273887cae28))
* **Playlist:** trying to parse an already parsed response ([#286](https://github.com/jeremyBanks/YouTube.js/issues/286)) ([e8af2a6](https://github.com/jeremyBanks/YouTube.js/commit/e8af2a603d4969a788f93cdfa0b1062ba598b86f))
* **pm:** check before setting video ids ([7400b8a](https://github.com/jeremyBanks/YouTube.js/commit/7400b8a9d9819e94ff096f4cd8673e6d34ee240d))
* race condition causing “update-credentials” to fire multiple times ([c16d632](https://github.com/jeremyBanks/YouTube.js/commit/c16d632b318e65a4355bbe2e064fbb825a7e8055))
* replace `s` placeholders in playback tracking urls ([88ebb5e](https://github.com/jeremyBanks/YouTube.js/commit/88ebb5e2ae44374be4561fd022135e9ae0fb1db1))
* search continuations not being parsed correctly  ([#173](https://github.com/jeremyBanks/YouTube.js/issues/173)) ([c9856a8](https://github.com/jeremyBanks/YouTube.js/commit/c9856a835962f3f5368ad619b70e5951824a1f11))
* **Search:** check if WatchCardHeroVideo is null before casting ([2a87f42](https://github.com/jeremyBanks/YouTube.js/commit/2a87f42b32c5ae3be76fd85960a3da464085c647)), closes [#243](https://github.com/jeremyBanks/YouTube.js/issues/243)
* **SearchHeader:** remove console.log ([d91695a](https://github.com/jeremyBanks/YouTube.js/commit/d91695a9ec6c55445cbeedba4ace4ac1e0a72eee))
* **Search:** Return search results even if there are ads ([#373](https://github.com/jeremyBanks/YouTube.js/issues/373)) ([2c5907f](https://github.com/jeremyBanks/YouTube.js/commit/2c5907f80fd76452afe87d1722fe35a4f45a22e0))
* **SearchSubMenu:** Groups not being parsed due to a typo ([90be877](https://github.com/jeremyBanks/YouTube.js/commit/90be877d28e0ef013056eaeaa4f2765c91addd61))
* **SegmentedLikeDislikeButton:** like/dislike buttons can also be a simple `Button` ([9b2738f](https://github.com/jeremyBanks/YouTube.js/commit/9b2738f1285b278c3e83541857651be9a6248288))
* send correct UA for Android requests ([f4e0f30](https://github.com/jeremyBanks/YouTube.js/commit/f4e0f30e6e94b347b28d67d9a86284ea2d23ee15)), closes [#322](https://github.com/jeremyBanks/YouTube.js/issues/322)
* **session:** `visitorData` and `originalUrl` ([1eda93e](https://github.com/jeremyBanks/YouTube.js/commit/1eda93ee08b7985a451ce26e2842bfa35cfe5e3a))
* **SharedPost:** import `Menu` node directly (oops) ([3e3dc35](https://github.com/jeremyBanks/YouTube.js/commit/3e3dc351bb44faec87616d9b922924d14a95f29f))
* signature decipher extraction failing ([#249](https://github.com/jeremyBanks/YouTube.js/issues/249)) ([be157ef](https://github.com/jeremyBanks/YouTube.js/commit/be157ef0165c6a428203afca65fc2cc80eca1bee))
* **StructuredDescriptionContent:** `items` can also be a `HorizontalCardList` ([b50d1ef](https://github.com/jeremyBanks/YouTube.js/commit/b50d1ef67d81276864818de10c61b5a7980cbc1a))
* TabbedFeed#getTab to parse response. ([#120](https://github.com/jeremyBanks/YouTube.js/issues/120)) ([dbfcb36](https://github.com/jeremyBanks/YouTube.js/commit/dbfcb36fd7f6ec72363b5cf5838e56d3c8cbf2b4))
* **tests:** require deciphers only when needed ([1837d49](https://github.com/jeremyBanks/YouTube.js/commit/1837d4929c005269153e4011d4e7c094423d1599))
* **toDash:** Format grouping into AdaptationSets ([#462](https://github.com/jeremyBanks/YouTube.js/issues/462)) ([1ff3e1a](https://github.com/jeremyBanks/YouTube.js/commit/1ff3e1a440389e71055d4b201c29021ca5b39254))
* **toDash:** Generate unique Representation ids ([#366](https://github.com/jeremyBanks/YouTube.js/issues/366)) ([a8b507e](https://github.com/jeremyBanks/YouTube.js/commit/a8b507ee65ccd8edc9aea2aef8a908fa272bb23c))
* **TopicChannelDetails:** avatar and subtitle parsing ([#302](https://github.com/jeremyBanks/YouTube.js/issues/302)) ([d612590](https://github.com/jeremyBanks/YouTube.js/commit/d612590530f5fe590fee969810b1dd44c37f0457))
* use `WEB` client in `setNotificationPreferences` ([6f3deaf](https://github.com/jeremyBanks/YouTube.js/commit/6f3deaf16aa6b7b4065c45946a68c4daff728a60))
* **Utils:** Circular dependency introduced in 38a83c3c2aa814150d1d9b8ed99fca915c1d67fe ([#400](https://github.com/jeremyBanks/YouTube.js/issues/400)) ([66b026b](https://github.com/jeremyBanks/YouTube.js/commit/66b026bf493d71a39e12825938fe54dc63aefd16))
* **Utils:** Properly parse timestamps with thousands separators ([#363](https://github.com/jeremyBanks/YouTube.js/issues/363)) ([1c72a41](https://github.com/jeremyBanks/YouTube.js/commit/1c72a41675e47f711bd61ebb898bca5527406a79))
* **Utils:** Use instanceof in deepCompare instead of the constructor name ([#398](https://github.com/jeremyBanks/YouTube.js/issues/398)) ([38a83c3](https://github.com/jeremyBanks/YouTube.js/commit/38a83c3c2aa814150d1d9b8ed99fca915c1d67fe))
* **VideoInfo.ts:** reimplement `get music_tracks` ([#409](https://github.com/jeremyBanks/YouTube.js/issues/409)) ([e434bb2](https://github.com/jeremyBanks/YouTube.js/commit/e434bb2632fe2b20aab6f1e707a93ca76f9d5c91))
* **VideoInfo:** Gracefully handle missing watch next continuation ([#288](https://github.com/jeremyBanks/YouTube.js/issues/288)) ([13ad377](https://github.com/jeremyBanks/YouTube.js/commit/13ad3774c9783ed2a9f286aeee88110bd43b3a73))
* **VideoInfo:** Use microformat view_count when videoDetails view_count is NaN ([#393](https://github.com/jeremyBanks/YouTube.js/issues/393)) ([7c0abfc](https://github.com/jeremyBanks/YouTube.js/commit/7c0abfccd78a6c291d898f898d73a4f16170e2a9))
* **VideoInfo:** watch next feed not being parsed when logged out ([#276](https://github.com/jeremyBanks/YouTube.js/issues/276)) ([d69d701](https://github.com/jeremyBanks/YouTube.js/commit/d69d70186925e6b5c97cad29ea6f6c7a6d1d2f6c))
* **VideoSecondaryInfo:** `subscribe_button` can also be just a `Button` ([4484f78](https://github.com/jeremyBanks/YouTube.js/commit/4484f78394bb96f43458d1a2615b7e4ba5574cf4))
* **Video:** typo causing node parsing to fail ([3b0498b](https://github.com/jeremyBanks/YouTube.js/commit/3b0498b68b5378e63283e792bd45571c0b919e0b))
* WatchCardHeroVideo accessibilityData parse error ([#231](https://github.com/jeremyBanks/YouTube.js/issues/231)) ([4c00f15](https://github.com/jeremyBanks/YouTube.js/commit/4c00f15f55eddcd79175aaef02795542f2d3f957))
* **web:** slow downloads due to visitor data ([#391](https://github.com/jeremyBanks/YouTube.js/issues/391)) ([4f7ec07](https://github.com/jeremyBanks/YouTube.js/commit/4f7ec07c3f689219b07e8291877c23b6fbf45fb1))
* wrong element name ([#217](https://github.com/jeremyBanks/YouTube.js/issues/217)) ([19d579d](https://github.com/jeremyBanks/YouTube.js/commit/19d579df13ae3cfdc8b3a3d0eaebe44325644888))
* **YouTube:** fix warnings when retrieving members-only content ([#341](https://github.com/jeremyBanks/YouTube.js/issues/341)) ([95f1d40](https://github.com/jeremyBanks/YouTube.js/commit/95f1d4077ff3775f36967dca786139a09e2830a2))
* ytmusic formats returning 401 when deciphered ([#161](https://github.com/jeremyBanks/YouTube.js/issues/161)) ([4f01553](https://github.com/jeremyBanks/YouTube.js/commit/4f015536ac2a5bb92546bf9f278227f4ab0d32b0))
* **ytmusic:** `fix music#getLyrics()` & `music#getUpNext()` ([4d33240](https://github.com/jeremyBanks/YouTube.js/commit/4d332402dbefee32b97c83c7fbe2a824de846deb))
* **ytmusic:** `music#getRelated()` now works again ([2599e73](https://github.com/jeremyBanks/YouTube.js/commit/2599e734b87b09081f6f61217427a0d78aa67255))
* **ytmusic:** export search filters type ([cf8a33c](https://github.com/jeremyBanks/YouTube.js/commit/cf8a33c79f5432136b865d535fd0ecedc2393382))
* **ytmusic:** oopsie, forgot to declare `player_overlays` ([3828029](https://github.com/jeremyBanks/YouTube.js/commit/38280290f739a204fa93af29788103ec699ff7c0))
* **ytmusic:** use static visitor id to avoid empty API responses ([f9754f5](https://github.com/jeremyBanks/YouTube.js/commit/f9754f5ac61d0f11b025f37f93783f971560268b)), closes [#279](https://github.com/jeremyBanks/YouTube.js/issues/279)


### Performance Improvements

* Cleanup some unnecessary uses of `YTNode#key` and `Maybe` ([#463](https://github.com/jeremyBanks/YouTube.js/issues/463)) ([0dda97e](https://github.com/jeremyBanks/YouTube.js/commit/0dda97e0b03171de52d7f11a5abf78911e74cead))
* **Format:** Cleanup the xtags parsing ([#434](https://github.com/jeremyBanks/YouTube.js/issues/434)) ([1ca2083](https://github.com/jeremyBanks/YouTube.js/commit/1ca20836bf343c78461fab7ad3b71db2b96e65c3))
* **Search:** Speed up results parsing ([#408](https://github.com/jeremyBanks/YouTube.js/issues/408)) ([1e07a18](https://github.com/jeremyBanks/YouTube.js/commit/1e07a184ffaff508ad5ba869cb5e7dc9f095f744))
* **toDash:** Hoist duplicates from Representation to AdaptationSet ([#431](https://github.com/jeremyBanks/YouTube.js/issues/431)) ([5f058e6](https://github.com/jeremyBanks/YouTube.js/commit/5f058e69ae8594491133f7f96287bea4137f7822))
* **toDash:** Speed up format filtering ([#405](https://github.com/jeremyBanks/YouTube.js/issues/405)) ([5de7b24](https://github.com/jeremyBanks/YouTube.js/commit/5de7b24dc55fca3eb8fccc6fa30d3c2cd60b8184))


### Code Refactoring

* cleanup platform support ([#306](https://github.com/jeremyBanks/YouTube.js/issues/306)) ([2ccbe2c](https://github.com/jeremyBanks/YouTube.js/commit/2ccbe2ce6260ace3bfac8b4b391e583fbcc4e286))
* finish parser migration ([68cb841](https://github.com/jeremyBanks/YouTube.js/commit/68cb841c0058ec5aac7b79b7736fdf57b825da3c))
* fix inconsistent use of `SuperParsedResult` ([40fc24b](https://github.com/jeremyBanks/YouTube.js/commit/40fc24b043ce030df788d3a9ceec24938494b132))
* migrate core renderers to TypeScript ([709c448](https://github.com/jeremyBanks/YouTube.js/commit/709c4480534ef2e86671998dea3337017a846e4a))
* overhaul core classes and remove redundant code ([#388](https://github.com/jeremyBanks/YouTube.js/issues/388)) ([95e0294](https://github.com/jeremyBanks/YouTube.js/commit/95e0294eabfdb20bbee2a4bfb751fd101402c5d6))
* **Parser:** general refactoring of parsers ([#344](https://github.com/jeremyBanks/YouTube.js/issues/344)) ([b13bf6e](https://github.com/jeremyBanks/YouTube.js/commit/b13bf6e9926c19a1939e0f4b69cbd53d1af0f7c8))
* replace unnecessary classes with pure functions ([#468](https://github.com/jeremyBanks/YouTube.js/issues/468)) ([87ed396](https://github.com/jeremyBanks/YouTube.js/commit/87ed3960ffa1c738b6f3b5acaf423647db4d367e))
* rewrite `Analytics` to TypeScript ([#122](https://github.com/jeremyBanks/YouTube.js/issues/122)) ([adae925](https://github.com/jeremyBanks/YouTube.js/commit/adae925367ca873d884ccd4f8189e888103cd8e5))
* rewrite `History` to TypeScript ([99233bc](https://github.com/jeremyBanks/YouTube.js/commit/99233bcf7a5e1a116cb209793eab47831f45b079))
* rewrite `MusicNavigationButton` to TypeScript ([3abcde7](https://github.com/jeremyBanks/YouTube.js/commit/3abcde7e67bff711400f47be9f509d326b4aeb2b))
* rewrite `PlaylistManager` ([d8266ff](https://github.com/jeremyBanks/YouTube.js/commit/d8266ff7863562b8ec57a1d2f909869f129073f2)), closes [#101](https://github.com/jeremyBanks/YouTube.js/issues/101)
* **ytmusic:** rewrite `Album` to TypeScript ([72c3af8](https://github.com/jeremyBanks/YouTube.js/commit/72c3af84b07c3b183f3bbed0ab1d86c83c79c779))

## [6.2.0](https://github.com/LuanRT/YouTube.js/compare/v6.1.0...v6.2.0) (2023-08-29)


### Features

* **Session:** Add fallback for session data retrieval ([#490](https://github.com/LuanRT/YouTube.js/issues/490)) ([10c15bf](https://github.com/LuanRT/YouTube.js/commit/10c15bfb9f131a2acea2f26ff3328993d8d8f4aa))


### Bug Fixes

* **Format:** Fix `is_original` always being `true` ([#492](https://github.com/LuanRT/YouTube.js/issues/492)) ([0412fa0](https://github.com/LuanRT/YouTube.js/commit/0412fa05ff1f00960b398c2f18d5ce39ce0cb864))

## [6.1.0](https://github.com/LuanRT/YouTube.js/compare/v6.0.2...v6.1.0) (2023-08-27)


### Features

* **parser:** Add `AlertWithButton` ([#486](https://github.com/LuanRT/YouTube.js/issues/486)) ([8b69587](https://github.com/LuanRT/YouTube.js/commit/8b6958778721ba274283f641779fb60bc6f42cd2))
* **parser:** Add `ChannelHeaderLinksView` ([#484](https://github.com/LuanRT/YouTube.js/issues/484)) ([ed7be2a](https://github.com/LuanRT/YouTube.js/commit/ed7be2a675cf1ec663e743e90db6260c97546739))
* **parser:** Add `CompactMovie` ([#487](https://github.com/LuanRT/YouTube.js/issues/487)) ([2eed172](https://github.com/LuanRT/YouTube.js/commit/2eed1726d5bde7648af09273cc14ab4a315cb23e))

## [6.0.2](https://github.com/LuanRT/YouTube.js/compare/v6.0.1...v6.0.2) (2023-08-24)


### Bug Fixes

* invalid set ids in dash manifest ([#480](https://github.com/LuanRT/YouTube.js/issues/480)) ([1c3ea2a](https://github.com/LuanRT/YouTube.js/commit/1c3ea2acd38652c6b40a0817a7836c672a776c4e))

## [6.0.1](https://github.com/LuanRT/YouTube.js/compare/v6.0.0...v6.0.1) (2023-08-22)


### Bug Fixes

* **SearchSubMenu:** Groups not being parsed due to a typo ([90be877](https://github.com/LuanRT/YouTube.js/commit/90be877d28e0ef013056eaeaa4f2765c91addd61))

## [6.0.0](https://github.com/LuanRT/YouTube.js/compare/v5.8.0...v6.0.0) (2023-08-18)


### ⚠ BREAKING CHANGES

* replace unnecessary classes with pure functions ([#468](https://github.com/LuanRT/YouTube.js/issues/468))

### Features

* **MusicResponsiveListItem:** Detect non music tracks properly ([815e54b](https://github.com/LuanRT/YouTube.js/commit/815e54b854fcda3f5423231c8495ce1fb69d8237))
* **parser:** add `MusicMultiRowListItem` ([494ee87](https://github.com/LuanRT/YouTube.js/commit/494ee8776af0839d3ee2cca3d2fd836680cfdb9e))
* **Session:** Add `IOS` to `ClientType` enum ([22a38c0](https://github.com/LuanRT/YouTube.js/commit/22a38c0762499de74f0aeb3ef01332f893518b08))
* **VideoInfo:** support iOS client ([#467](https://github.com/LuanRT/YouTube.js/issues/467)) ([46fe18b](https://github.com/LuanRT/YouTube.js/commit/46fe18b763e0c943b24ea10fdf25456ab9ade709))


### Bug Fixes

* **Format:** Extracting audio language from captions ([#470](https://github.com/LuanRT/YouTube.js/issues/470)) ([31d27b1](https://github.com/LuanRT/YouTube.js/commit/31d27b1bca489ee0053d2783f1a956609845a901))
* **parser:** Allow any property in the `RawResponse` interface ([3bc53a8](https://github.com/LuanRT/YouTube.js/commit/3bc53a8c12e65b22f19a3e337641196b692a94db))
* **parser:** Logger logging `classdata` as `[Object object]` ([bf1510b](https://github.com/LuanRT/YouTube.js/commit/bf1510b235e3ee7d13d51f092babd1105c3d6b9f))
* **Playlist:** Only try extracting the subtitle for the first page ([#465](https://github.com/LuanRT/YouTube.js/issues/465)) ([e370116](https://github.com/LuanRT/YouTube.js/commit/e3701160928e9e959b88ca215c6b0a44c70ca6e6))
* **toDash:** Format grouping into AdaptationSets ([#462](https://github.com/LuanRT/YouTube.js/issues/462)) ([1ff3e1a](https://github.com/LuanRT/YouTube.js/commit/1ff3e1a440389e71055d4b201c29021ca5b39254))


### Performance Improvements

* Cleanup some unnecessary uses of `YTNode#key` and `Maybe` ([#463](https://github.com/LuanRT/YouTube.js/issues/463)) ([0dda97e](https://github.com/LuanRT/YouTube.js/commit/0dda97e0b03171de52d7f11a5abf78911e74cead))


### Code Refactoring

* replace unnecessary classes with pure functions ([#468](https://github.com/LuanRT/YouTube.js/issues/468)) ([87ed396](https://github.com/LuanRT/YouTube.js/commit/87ed3960ffa1c738b6f3b5acaf423647db4d367e))

## [5.8.0](https://github.com/LuanRT/YouTube.js/compare/v5.7.1...v5.8.0) (2023-07-30)


### Features

* **YouTube Playlist:** Add subtitle and fix author optionality ([#458](https://github.com/LuanRT/YouTube.js/issues/458)) ([0fa5a85](https://github.com/LuanRT/YouTube.js/commit/0fa5a859ae15a35266297079e3e34fd9f3a5ebf4))

## [5.7.1](https://github.com/LuanRT/YouTube.js/compare/v5.7.0...v5.7.1) (2023-07-25)


### Bug Fixes

* **SearchHeader:** remove console.log ([d91695a](https://github.com/LuanRT/YouTube.js/commit/d91695a9ec6c55445cbeedba4ace4ac1e0a72eee))

## [5.7.0](https://github.com/LuanRT/YouTube.js/compare/v5.6.0...v5.7.0) (2023-07-24)


### Features

* **parser:** Add `PageHeader` ([#450](https://github.com/LuanRT/YouTube.js/issues/450)) ([18cbc8c](https://github.com/LuanRT/YouTube.js/commit/18cbc8c038ddddffa1ba1519e56a8054b2996e42))
* **parser:** Add `SearchHeader` ([6997982](https://github.com/LuanRT/YouTube.js/commit/6997982cf2db87edf4929e9a77e2690e7b630d3d)), closes [#452](https://github.com/LuanRT/YouTube.js/issues/452)

## [5.6.0](https://github.com/LuanRT/YouTube.js/compare/v5.5.0...v5.6.0) (2023-07-18)


### Features

* **parser:** Add `IncludingResultsFor` ([#447](https://github.com/LuanRT/YouTube.js/issues/447)) ([c477b82](https://github.com/LuanRT/YouTube.js/commit/c477b824c084552169062f72cde8890e77b31f59))
* **toDash:** Add option to include thumbnails in the manifest ([#446](https://github.com/LuanRT/YouTube.js/issues/446)) ([1a03473](https://github.com/LuanRT/YouTube.js/commit/1a034733f6bb641e2d97df12de81ae3516c1f703))

## [5.5.0](https://github.com/LuanRT/YouTube.js/compare/v5.4.0...v5.5.0) (2023-07-16)


### Features

* **Format:** Populate audio language from captions when available ([#445](https://github.com/LuanRT/YouTube.js/issues/445)) ([bdd98a3](https://github.com/LuanRT/YouTube.js/commit/bdd98a3b9be39c11942043a300a6ebce9a15efc6))
* **parser:** Add `CommentsSimplebox` parser ([#442](https://github.com/LuanRT/YouTube.js/issues/442)) ([555d257](https://github.com/LuanRT/YouTube.js/commit/555d257459b76d7c0158e9c6b189a75a82b10faf))
* **parser:** Add `HashtagTile` ([#440](https://github.com/LuanRT/YouTube.js/issues/440)) ([ae2557d](https://github.com/LuanRT/YouTube.js/commit/ae2557d15c9df09bb92e0dc6191670d72b36631a))
* **parser:** add `MacroMarkersList` ([#444](https://github.com/LuanRT/YouTube.js/issues/444)) ([708c5f7](https://github.com/LuanRT/YouTube.js/commit/708c5f7394b4ea140836b9483848cb61b97ea1af))
* **parser:** Add `ShowMiniplayerCommand` ([#443](https://github.com/LuanRT/YouTube.js/issues/443)) ([a9cdbf7](https://github.com/LuanRT/YouTube.js/commit/a9cdbf7010e7b9b9cfde5db645d51bdad51006c5))


### Bug Fixes

* **package:** Bump Jinter to fix bad export order ([#439](https://github.com/LuanRT/YouTube.js/issues/439)) ([2aef678](https://github.com/LuanRT/YouTube.js/commit/2aef67876ec19118b37d3cecd429ccf8239989e0))
* **StructuredDescriptionContent:** `items` can also be a `HorizontalCardList` ([b50d1ef](https://github.com/LuanRT/YouTube.js/commit/b50d1ef67d81276864818de10c61b5a7980cbc1a))

## [5.4.0](https://github.com/LuanRT/YouTube.js/compare/v5.3.0...v5.4.0) (2023-07-14)


### Features

* **Channel:** Add `getPodcasts()` method ([f267fcd](https://github.com/LuanRT/YouTube.js/commit/f267fcd8beccf237b8d1924463990273887cae28))
* **Channel:** Add `getReleases()` method ([f267fcd](https://github.com/LuanRT/YouTube.js/commit/f267fcd8beccf237b8d1924463990273887cae28))
* **parser:** Add `Quiz` ([#437](https://github.com/LuanRT/YouTube.js/issues/437)) ([cffa868](https://github.com/LuanRT/YouTube.js/commit/cffa868c6eeb579047653fac65da8e913fb3c621))


### Bug Fixes

* **Playlist:** Parse `PlaylistCustomThumbnail` for `thumbnail_renderer` ([f267fcd](https://github.com/LuanRT/YouTube.js/commit/f267fcd8beccf237b8d1924463990273887cae28))

## [5.3.0](https://github.com/LuanRT/YouTube.js/compare/v5.2.1...v5.3.0) (2023-07-11)


### Features

* **toDash:** Add color information ([#430](https://github.com/LuanRT/YouTube.js/issues/430)) ([3500e92](https://github.com/LuanRT/YouTube.js/commit/3500e926327d560b1db036bfe503c276b91922ac))


### Performance Improvements

* **Format:** Cleanup the xtags parsing ([#434](https://github.com/LuanRT/YouTube.js/issues/434)) ([1ca2083](https://github.com/LuanRT/YouTube.js/commit/1ca20836bf343c78461fab7ad3b71db2b96e65c3))
* **toDash:** Hoist duplicates from Representation to AdaptationSet ([#431](https://github.com/LuanRT/YouTube.js/issues/431)) ([5f058e6](https://github.com/LuanRT/YouTube.js/commit/5f058e69ae8594491133f7f96287bea4137f7822))

## [5.2.1](https://github.com/LuanRT/YouTube.js/compare/v5.2.0...v5.2.1) (2023-07-04)


### Bug Fixes

* incorrect node parser implementations ([#428](https://github.com/LuanRT/YouTube.js/issues/428)) ([222dfce](https://github.com/LuanRT/YouTube.js/commit/222dfce6bbd13b2cd80ae11540cbc0edd9053fc5))

## [5.2.0](https://github.com/LuanRT/YouTube.js/compare/v5.1.0...v5.2.0) (2023-06-28)


### Features

* **VideoDetails:** Add is_post_live_dvr property ([#411](https://github.com/LuanRT/YouTube.js/issues/411)) ([a11e596](https://github.com/LuanRT/YouTube.js/commit/a11e5962c6eb73b14623a9de1e6c8c2534146b1e))
* **ytmusic:** Add support for YouTube Music mood filters ([#404](https://github.com/LuanRT/YouTube.js/issues/404)) ([77b39c7](https://github.com/LuanRT/YouTube.js/commit/77b39c79ee0768eb203b7d47ea81286d470c21f2))


### Bug Fixes

* **OAuth:** client identity matching ([#421](https://github.com/LuanRT/YouTube.js/issues/421)) ([07c1b3e](https://github.com/LuanRT/YouTube.js/commit/07c1b3e0e57cb1fa42e4772775bfd1437bbc731f))
* **PlayerEndpoint:** Use different player params ([#419](https://github.com/LuanRT/YouTube.js/issues/419)) ([519be72](https://github.com/LuanRT/YouTube.js/commit/519be72445b7ff392b396e16bcb1dc05c7df8976))
* **Playlist:** Add thumbnail_renderer on Playlist when response includes it ([#424](https://github.com/LuanRT/YouTube.js/issues/424)) ([4f9427d](https://github.com/LuanRT/YouTube.js/commit/4f9427d752e89faec8dd1c4fd7a9607dca998c7a))
* **VideoInfo.ts:** reimplement `get music_tracks` ([#409](https://github.com/LuanRT/YouTube.js/issues/409)) ([e434bb2](https://github.com/LuanRT/YouTube.js/commit/e434bb2632fe2b20aab6f1e707a93ca76f9d5c91))


### Performance Improvements

* **Search:** Speed up results parsing ([#408](https://github.com/LuanRT/YouTube.js/issues/408)) ([1e07a18](https://github.com/LuanRT/YouTube.js/commit/1e07a184ffaff508ad5ba869cb5e7dc9f095f744))
* **toDash:** Speed up format filtering ([#405](https://github.com/LuanRT/YouTube.js/issues/405)) ([5de7b24](https://github.com/LuanRT/YouTube.js/commit/5de7b24dc55fca3eb8fccc6fa30d3c2cd60b8184))

## [5.1.0](https://github.com/LuanRT/YouTube.js/compare/v5.0.4...v5.1.0) (2023-05-14)


### Features

* **ReelItem:** Add accessibility label ([#401](https://github.com/LuanRT/YouTube.js/issues/401)) ([046103a](https://github.com/LuanRT/YouTube.js/commit/046103a4d8af09fafefab6e9f971184eeca75c2e))
* **toDash:** Add audio track labels to the manifest when available ([#402](https://github.com/LuanRT/YouTube.js/issues/402)) ([84b4f1e](https://github.com/LuanRT/YouTube.js/commit/84b4f1efd111321e4f3e5a87844790c4ec9b0b52))

## [5.0.4](https://github.com/LuanRT/YouTube.js/compare/v5.0.3...v5.0.4) (2023-05-10)


### Bug Fixes

* **bundles:** Use ESM tslib build for the browser bundles ([#397](https://github.com/LuanRT/YouTube.js/issues/397)) ([2673419](https://github.com/LuanRT/YouTube.js/commit/26734194ab0bc5a9f57e1c509d7646ce8903d0c6))
* **Utils:** Circular dependency introduced in 38a83c3c2aa814150d1d9b8ed99fca915c1d67fe ([#400](https://github.com/LuanRT/YouTube.js/issues/400)) ([66b026b](https://github.com/LuanRT/YouTube.js/commit/66b026bf493d71a39e12825938fe54dc63aefd16))
* **Utils:** Use instanceof in deepCompare instead of the constructor name ([#398](https://github.com/LuanRT/YouTube.js/issues/398)) ([38a83c3](https://github.com/LuanRT/YouTube.js/commit/38a83c3c2aa814150d1d9b8ed99fca915c1d67fe))

## [5.0.3](https://github.com/LuanRT/YouTube.js/compare/v5.0.2...v5.0.3) (2023-05-03)


### Bug Fixes

* **Video:** typo causing node parsing to fail ([3b0498b](https://github.com/LuanRT/YouTube.js/commit/3b0498b68b5378e63283e792bd45571c0b919e0b))

## [5.0.2](https://github.com/LuanRT/YouTube.js/compare/v5.0.1...v5.0.2) (2023-04-30)


### Bug Fixes

* **VideoInfo:** Use microformat view_count when videoDetails view_count is NaN ([#393](https://github.com/LuanRT/YouTube.js/issues/393)) ([7c0abfc](https://github.com/LuanRT/YouTube.js/commit/7c0abfccd78a6c291d898f898d73a4f16170e2a9))

## [5.0.1](https://github.com/LuanRT/YouTube.js/compare/v5.0.0...v5.0.1) (2023-04-30)


### Bug Fixes

* **web:** slow downloads due to visitor data ([#391](https://github.com/LuanRT/YouTube.js/issues/391)) ([4f7ec07](https://github.com/LuanRT/YouTube.js/commit/4f7ec07c3f689219b07e8291877c23b6fbf45fb1))

## [5.0.0](https://github.com/LuanRT/YouTube.js/compare/v4.3.0...v5.0.0) (2023-04-29)


### ⚠ BREAKING CHANGES

* overhaul core classes and remove redundant code ([#388](https://github.com/LuanRT/YouTube.js/issues/388))

### Features

* **NavigationEndpoint:** parse `content` prop ([dd21f8c](https://github.com/LuanRT/YouTube.js/commit/dd21f8c75ae1d76180faab4f0ef9ee40920966e3))


### Bug Fixes

* **android:** workaround streaming URLs returning 403 ([#390](https://github.com/LuanRT/YouTube.js/issues/390)) ([75ea09d](https://github.com/LuanRT/YouTube.js/commit/75ea09dde86b1bdf13b197d6e02701899300a371))


### Code Refactoring

* overhaul core classes and remove redundant code ([#388](https://github.com/LuanRT/YouTube.js/issues/388)) ([95e0294](https://github.com/LuanRT/YouTube.js/commit/95e0294eabfdb20bbee2a4bfb751fd101402c5d6))

## [4.3.0](https://github.com/LuanRT/YouTube.js/compare/v4.2.0...v4.3.0) (2023-04-13)


### Features

* **GridVideo:** add `upcoming`, `upcoming_text`, `is_reminder_set` and `buttons` ([05de3ec](https://github.com/LuanRT/YouTube.js/commit/05de3ec97a1fea92543b5e5f84933b86a07ab830)), closes [#380](https://github.com/LuanRT/YouTube.js/issues/380)
* **MusicResponsiveListItem:** make flex/fixed cols public ([#382](https://github.com/LuanRT/YouTube.js/issues/382)) ([096bf36](https://github.com/LuanRT/YouTube.js/commit/096bf362c9bd46a510ecb0d01623c70841e26e26))
* **ToggleMenuServiceItem:** parse default nav endpoint ([a056696](https://github.com/LuanRT/YouTube.js/commit/a0566969ba436f31ca3722d09442a0c6302235d7))
* **ytmusic:** add taste builder nodes ([#383](https://github.com/LuanRT/YouTube.js/issues/383)) ([a9cad49](https://github.com/LuanRT/YouTube.js/commit/a9cad49333aa85c98bbb96e5f2d5b57d9beeb0c7))

## [4.2.0](https://github.com/LuanRT/YouTube.js/compare/v4.1.1...v4.2.0) (2023-04-09)


### Features

* Enable importHelpers in tsconfig to reduce output size ([#378](https://github.com/LuanRT/YouTube.js/issues/378)) ([0b301de](https://github.com/LuanRT/YouTube.js/commit/0b301de6a1e1352a64881c1751a84360922a77cd))
* **parser:** ignore PrimetimePromo node ([ce9d9c5](https://github.com/LuanRT/YouTube.js/commit/ce9d9c56b4f45c0139d74edc95c295ecfd1ee4b1))
* **PlaylistVideo:** Extract video_info and accessibility_label texts ([#376](https://github.com/LuanRT/YouTube.js/issues/376)) ([c9135e6](https://github.com/LuanRT/YouTube.js/commit/c9135e66d3c9c72b8d063eedcf3cc2123800946d))

## [4.1.1](https://github.com/LuanRT/YouTube.js/compare/v4.1.0...v4.1.1) (2023-03-29)


### Bug Fixes

* **PlayerCaptionsTracklist:** parse props only if they exist in the node ([470d8d9](https://github.com/LuanRT/YouTube.js/commit/470d8d94063f0159cd005c9eb15fd1a4a175bea0)), closes [#372](https://github.com/LuanRT/YouTube.js/issues/372)
* **Search:** Return search results even if there are ads ([#373](https://github.com/LuanRT/YouTube.js/issues/373)) ([2c5907f](https://github.com/LuanRT/YouTube.js/commit/2c5907f80fd76452afe87d1722fe35a4f45a22e0))

## [4.1.0](https://github.com/LuanRT/YouTube.js/compare/v4.0.1...v4.1.0) (2023-03-24)


### Features

* **Session:** allow setting a custom visitor data token ([#371](https://github.com/LuanRT/YouTube.js/issues/371)) ([13ebf0a](https://github.com/LuanRT/YouTube.js/commit/13ebf0a03973e7ba7b65e9f72c4333927e4254f6))
* **ShowingResultsFor:** parse all props ([1d9587e](https://github.com/LuanRT/YouTube.js/commit/1d9587e8c1ee0b11bb0e444c3d1e98162e9e1059))


### Bug Fixes

* **http:** android tv http client missing `clientName` ([#370](https://github.com/LuanRT/YouTube.js/issues/370)) ([cb8fafe](https://github.com/LuanRT/YouTube.js/commit/cb8fafe94b8ab330ae58211a892923321d65d890))
* **node:** Electron apps crashing ([#367](https://github.com/LuanRT/YouTube.js/issues/367)) ([e7eacd9](https://github.com/LuanRT/YouTube.js/commit/e7eacd974211c90e7fbddfbf8019388cda3dfa5a))
* **parser:** Make Video.is_live work on channel pages ([#368](https://github.com/LuanRT/YouTube.js/issues/368)) ([bd35faa](https://github.com/LuanRT/YouTube.js/commit/bd35faa5978f0b822e98d019523be1303374ddc0))
* **toDash:** Generate unique Representation ids ([#366](https://github.com/LuanRT/YouTube.js/issues/366)) ([a8b507e](https://github.com/LuanRT/YouTube.js/commit/a8b507ee65ccd8edc9aea2aef8a908fa272bb23c))
* **Utils:** Properly parse timestamps with thousands separators ([#363](https://github.com/LuanRT/YouTube.js/issues/363)) ([1c72a41](https://github.com/LuanRT/YouTube.js/commit/1c72a41675e47f711bd61ebb898bca5527406a79))

## [4.0.1](https://github.com/LuanRT/YouTube.js/compare/v4.0.0...v4.0.1) (2023-03-16)


### Bug Fixes

* **Channel:** type mismatch in `subscribe_button` prop ([573c864](https://github.com/LuanRT/YouTube.js/commit/573c8643aae16ec7b6be5b333619a5d8c91ca5c1))

## [4.0.0](https://github.com/LuanRT/YouTube.js/compare/v3.3.0...v4.0.0) (2023-03-15)


### ⚠ BREAKING CHANGES

* **Parser:** general refactoring of parsers ([#344](https://github.com/LuanRT/YouTube.js/issues/344))
* The `toDash` functions are now asynchronous, they now return a `Promise<string>` instead of a `string`, as we need to fetch the first sequence of the OTF format streams while building the manifest.

### Features

* Add support for OTF format streams ([3e4d41b](https://github.com/LuanRT/YouTube.js/commit/3e4d41bf06ba16232979977c705444f2032bcde6))
* **parser:** add `GridMix` ([#356](https://github.com/LuanRT/YouTube.js/issues/356)) ([a8e7e64](https://github.com/LuanRT/YouTube.js/commit/a8e7e644ec6df3b3c98a313f0321da27b4ca456e))
* **parser:** add `GridShow` and `ShowCustomThumbnail` ([8ef4b42](https://github.com/LuanRT/YouTube.js/commit/8ef4b42d444c4fbe5cd65a55c0e0e7aa31738755)), closes [#459](https://github.com/LuanRT/YouTube.js/issues/459)
* **parser:** add `MusicCardShelf` ([#358](https://github.com/LuanRT/YouTube.js/issues/358)) ([9b005d6](https://github.com/LuanRT/YouTube.js/commit/9b005d62d6590a2ddf6848dabfa33fce36e8df9c))
* **parser:** Add `play_all_button` to `Shelf` ([#345](https://github.com/LuanRT/YouTube.js/issues/345)) ([427db5b](https://github.com/LuanRT/YouTube.js/commit/427db5bbc2bf3e8ec60371d504c2ab1cdae6e918))
* **parser:** add `view_playlist` to `Playlist` ([#348](https://github.com/LuanRT/YouTube.js/issues/348)) ([9cb4530](https://github.com/LuanRT/YouTube.js/commit/9cb45302997771d909487b1ecba6f38655abef48))
* **parser:** add InfoPanelContent and InfoPanelContainer nodes ([4784dfa](https://github.com/LuanRT/YouTube.js/commit/4784dfa563a4dbeaee31811824d5aa37a67f5557)), closes [#326](https://github.com/LuanRT/YouTube.js/issues/326)
* **Parser:** just-in-time YTNode generation ([#310](https://github.com/LuanRT/YouTube.js/issues/310)) ([2cee590](https://github.com/LuanRT/YouTube.js/commit/2cee59024c730c34aa06052849ed6fb3f862ef33))
* **yt:** add support for movie items and trailers ([#349](https://github.com/LuanRT/YouTube.js/issues/349)) ([9f1c31d](https://github.com/LuanRT/YouTube.js/commit/9f1c31d7a09532e80a187b14acceff31c22579bf))


### Code Refactoring

* **Parser:** general refactoring of parsers ([#344](https://github.com/LuanRT/YouTube.js/issues/344)) ([b13bf6e](https://github.com/LuanRT/YouTube.js/commit/b13bf6e9926c19a1939e0f4b69cbd53d1af0f7c8))

## [3.3.0](https://github.com/LuanRT/YouTube.js/compare/v3.2.0...v3.3.0) (2023-03-09)


### Features

* **parser:** add `ConversationBar` node ([b2253df](https://github.com/LuanRT/YouTube.js/commit/b2253df8022217dc486155d8cacbf22db04dd9c2))
* **VideoInfo:** support get by endpoint + more info ([#342](https://github.com/LuanRT/YouTube.js/issues/342)) ([0d35fe0](https://github.com/LuanRT/YouTube.js/commit/0d35fe0ca5e87a877b76cbb6cf3c92843eac5a99))


### Bug Fixes

* **MultiMarkersPlayerBar:** avoid observing undefined objects ([f351770](https://github.com/LuanRT/YouTube.js/commit/f3517708ff34093a544c09d6f5f1ec806130d5cc))
* **SharedPost:** import `Menu` node directly (oops) ([3e3dc35](https://github.com/LuanRT/YouTube.js/commit/3e3dc351bb44faec87616d9b922924d14a95f29f))
* **ytmusic:** use static visitor id to avoid empty API responses ([f9754f5](https://github.com/LuanRT/YouTube.js/commit/f9754f5ac61d0f11b025f37f93783f971560268b)), closes [#279](https://github.com/LuanRT/YouTube.js/issues/279)

## [3.2.0](https://github.com/LuanRT/YouTube.js/compare/v3.1.1...v3.2.0) (2023-03-08)


### Features

* Add support for descriptive audio tracks ([#338](https://github.com/LuanRT/YouTube.js/issues/338)) ([574b67a](https://github.com/LuanRT/YouTube.js/commit/574b67a1f707a32378586dd2fe7b2f36f4ab6ddb))
* export `FormatUtils`' types ([2d774e2](https://github.com/LuanRT/YouTube.js/commit/2d774e26aae79f3d1b115e0e85c148ae80985529))
* **parser:** add `banner` to `PlaylistHeader` ([#337](https://github.com/LuanRT/YouTube.js/issues/337)) ([95033e7](https://github.com/LuanRT/YouTube.js/commit/95033e723ef912706e4d176de6b2760f017184e1))
* **parser:** SharedPost ([#332](https://github.com/LuanRT/YouTube.js/issues/332)) ([ce53ac1](https://github.com/LuanRT/YouTube.js/commit/ce53ac18435cbcb20d6d4c4ab52fd156091e7592))
* **VideoInfo:** add `game_info` and `category` ([#333](https://github.com/LuanRT/YouTube.js/issues/333)) ([214aa14](https://github.com/LuanRT/YouTube.js/commit/214aa147ce6306e37a6bf860a7bed5635db4797e))
* **YouTube/Search:** add `SearchSubMenu` node ([#340](https://github.com/LuanRT/YouTube.js/issues/340)) ([a511608](https://github.com/LuanRT/YouTube.js/commit/a511608f18b37b0d9f2c7958ed5128330fabcfa0))
* **yt:** add `getGuide()` ([#335](https://github.com/LuanRT/YouTube.js/issues/335)) ([2cc7b8b](https://github.com/LuanRT/YouTube.js/commit/2cc7b8bcd6938c7fb3af4f854a1d78b86d153873))


### Bug Fixes

* **SegmentedLikeDislikeButton:** like/dislike buttons can also be a simple `Button` ([9b2738f](https://github.com/LuanRT/YouTube.js/commit/9b2738f1285b278c3e83541857651be9a6248288))
* **YouTube:** fix warnings when retrieving members-only content ([#341](https://github.com/LuanRT/YouTube.js/issues/341)) ([95f1d40](https://github.com/LuanRT/YouTube.js/commit/95f1d4077ff3775f36967dca786139a09e2830a2))
* **ytmusic:** export search filters type ([cf8a33c](https://github.com/LuanRT/YouTube.js/commit/cf8a33c79f5432136b865d535fd0ecedc2393382))

## [3.1.1](https://github.com/LuanRT/YouTube.js/compare/v3.1.0...v3.1.1) (2023-03-01)


### Bug Fixes

* **Channel:** getting community continuations ([#329](https://github.com/LuanRT/YouTube.js/issues/329)) ([4c7b8a3](https://github.com/LuanRT/YouTube.js/commit/4c7b8a34030effa26c4ea186d3e9509128aec31c))

## [3.1.0](https://github.com/LuanRT/YouTube.js/compare/v3.0.0...v3.1.0) (2023-02-26)


### Features

* Add upcoming and live info to playlist videos ([#317](https://github.com/LuanRT/YouTube.js/issues/317)) ([a0bfe16](https://github.com/LuanRT/YouTube.js/commit/a0bfe164279ec27b0c49c6b0c32222c1a92df5c3))
* **VideoSecondaryInfo:** add support for attributed descriptions ([#325](https://github.com/LuanRT/YouTube.js/issues/325)) ([f933cb4](https://github.com/LuanRT/YouTube.js/commit/f933cb45bcb92c07b3bc063d63869a51cbff4eb0))


### Bug Fixes

* **parser:** export YTNodes individually so they can be used as types ([200632f](https://github.com/LuanRT/YouTube.js/commit/200632f374d5e0e105b600d579a2665a6fb36e38)), closes [#321](https://github.com/LuanRT/YouTube.js/issues/321)
* **PlayerMicroformat:** Make the embed field optional ([#320](https://github.com/LuanRT/YouTube.js/issues/320)) ([a0e6cef](https://github.com/LuanRT/YouTube.js/commit/a0e6cef00fb9e3f52593cec22704f7ddc1f7553e))
* send correct UA for Android requests ([f4e0f30](https://github.com/LuanRT/YouTube.js/commit/f4e0f30e6e94b347b28d67d9a86284ea2d23ee15)), closes [#322](https://github.com/LuanRT/YouTube.js/issues/322)

## [3.0.0](https://github.com/LuanRT/YouTube.js/compare/v2.9.0...v3.0.0) (2023-02-17)


### ⚠ BREAKING CHANGES

* cleanup platform support ([#306](https://github.com/LuanRT/YouTube.js/issues/306))

### Features

* add parser support for MultiImage community posts ([#298](https://github.com/LuanRT/YouTube.js/issues/298)) ([de61782](https://github.com/LuanRT/YouTube.js/commit/de61782f1a673cbe66ae9b410341e39b7501ba84))
* add support for hashtag feeds ([#312](https://github.com/LuanRT/YouTube.js/issues/312)) ([bf12740](https://github.com/LuanRT/YouTube.js/commit/bf12740333a82c26fe84e7c702c2fbb8859814fc))
* add support for YouTube Kids ([#291](https://github.com/LuanRT/YouTube.js/issues/291)) ([2bbefef](https://github.com/LuanRT/YouTube.js/commit/2bbefefbb7cb061f3e7b686158b7568c32f0da5d))
* allow checking whether a channel has optional tabs ([#296](https://github.com/LuanRT/YouTube.js/issues/296)) ([ceefbed](https://github.com/LuanRT/YouTube.js/commit/ceefbed98c70bb936e2d2df58c02834842acfdfc))
* **Channel:** Add getters for all optional tabs ([#303](https://github.com/LuanRT/YouTube.js/issues/303)) ([b2900f4](https://github.com/LuanRT/YouTube.js/commit/b2900f48a7aa4c22635e1819ba9f636e81964f2c))
* **Channel:** add support for sorting the playlist tab ([#295](https://github.com/LuanRT/YouTube.js/issues/295)) ([50ef712](https://github.com/LuanRT/YouTube.js/commit/50ef71284db41e5f94bb511892651d22a1d363a0))
* extract channel error alert ([0b99180](https://github.com/LuanRT/YouTube.js/commit/0b991800a5c67f0e702251982b52eb8531f36f19))
* **FormatUtils:** support multiple audio tracks in the DASH manifest ([#308](https://github.com/LuanRT/YouTube.js/issues/308)) ([a69e43b](https://github.com/LuanRT/YouTube.js/commit/a69e43bf3ae02f2428c4aa86f647e3e5e0db5ba6))
* improve support for dubbed content ([#293](https://github.com/LuanRT/YouTube.js/issues/293)) ([d6c5a9b](https://github.com/LuanRT/YouTube.js/commit/d6c5a9b971444d0cd746aaf5310d3389793680ea))
* parse isLive in CompactVideo ([#294](https://github.com/LuanRT/YouTube.js/issues/294)) ([2acb7da](https://github.com/LuanRT/YouTube.js/commit/2acb7da0198bfeca6ff911cf95cf06a220fccaa5))
* **parser:** add `ChannelAgeGate` node ([1cdf701](https://github.com/LuanRT/YouTube.js/commit/1cdf701c8403db6b681a26ecb1df2daa51add454))
* **parser:** Text#toHTML ([#300](https://github.com/LuanRT/YouTube.js/issues/300)) ([e82e23d](https://github.com/LuanRT/YouTube.js/commit/e82e23dfbb24dff3ddf45754c7319d783990e254))
* **ytkids:** add `getChannel()` ([#292](https://github.com/LuanRT/YouTube.js/issues/292)) ([0fc29f0](https://github.com/LuanRT/YouTube.js/commit/0fc29f0bbf965215146a6ae192494c74e6cefcbb))


### Bug Fixes

* assign MetadataBadge's label ([#311](https://github.com/LuanRT/YouTube.js/issues/311)) ([e37cf62](https://github.com/LuanRT/YouTube.js/commit/e37cf627322f688fcef18d41345f77cbccd58829))
* **ChannelAboutFullMetadata:** fix error when there are no primary links ([#299](https://github.com/LuanRT/YouTube.js/issues/299)) ([f62c66d](https://github.com/LuanRT/YouTube.js/commit/f62c66db396ba7d2f93007414101112b49d8375f))
* **TopicChannelDetails:** avatar and subtitle parsing ([#302](https://github.com/LuanRT/YouTube.js/issues/302)) ([d612590](https://github.com/LuanRT/YouTube.js/commit/d612590530f5fe590fee969810b1dd44c37f0457))
* **VideoInfo:** Gracefully handle missing watch next continuation ([#288](https://github.com/LuanRT/YouTube.js/issues/288)) ([13ad377](https://github.com/LuanRT/YouTube.js/commit/13ad3774c9783ed2a9f286aeee88110bd43b3a73))


### Code Refactoring

* cleanup platform support ([#306](https://github.com/LuanRT/YouTube.js/issues/306)) ([2ccbe2c](https://github.com/LuanRT/YouTube.js/commit/2ccbe2ce6260ace3bfac8b4b391e583fbcc4e286))
