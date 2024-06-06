import { getUuid } from '@zpcscc/utils';
import { atom } from 'recoil';
import * as fieldMap from 'src/fieldConfig';

/**
 * @name 左侧组件列表排序数据
 */
const leftSortableItemsState = atom<string[]>({
  key: 'leftSortableItems',
  default: Object.keys(fieldMap).map((item) => getUuid(4, `${item}-`))
});

export default leftSortableItemsState;
