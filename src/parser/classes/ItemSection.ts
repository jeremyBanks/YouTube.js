import { YTNode, type ObservedArray } from '../helpers.js';
import Parser, { type RawNode } from '../index.js';
import ItemSectionHeader from './ItemSectionHeader.js';
import ItemSectionTabbedHeader from './ItemSectionTabbedHeader.js';
import CommentsHeader from './comments/CommentsHeader.js';

export default class ItemSection extends YTNode {
  static type = 'ItemSection';

  header: CommentsHeader | ItemSectionHeader | ItemSectionTabbedHeader | null;
  contents: ObservedArray<YTNode>;
  target_id?: string;
  continuation?: string;

  constructor(data: RawNode) {
    super();
    this.header = Parser.parseItem(data.header, [ CommentsHeader, ItemSectionHeader, ItemSectionTabbedHeader ]);
    this.contents = Parser.parseArray(data.contents);

    if (data.targetId || data.sectionIdentifier) {
      this.target_id = data.target_id || data.sectionIdentifier;
    }

    if (data.continuations) {
      this.continuation = data.continuations?.at(0)?.nextContinuationData?.continuation;
    }
  }
}