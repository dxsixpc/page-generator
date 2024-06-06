import { isEmpty } from 'lodash';
import { type ComponentStructureType, type StructureItemType } from 'src/types';
import formatItems from './formatItems';

/**
 * @name 输入id，删除此项
 * @param id
 * @param items
 * @returns item
 */
const deleteItem = (
  componentStructure: ComponentStructureType,
  id: string
): ComponentStructureType => {
  const { componentItems, structureItems } = componentStructure;
  // 递归循环遍历数据
  const loopItems = (items: StructureItemType[]): StructureItemType[] => {
    return items
      .map((item) => {
        if (item.id !== id) {
          const children =
            item.children === undefined || isEmpty(item.children) ? null : loopItems(item.children);
          return { id: item.id, children };
        }
        return null;
      })
      .filter(Boolean) as StructureItemType[];
  };

  return formatItems(
    componentItems.filter((item) => item.id !== id),
    loopItems(structureItems)
  );
};

export default deleteItem;
