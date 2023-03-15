import { isEmpty } from 'lodash';
import type { ComponentItemType, StructureItemType } from 'src/type';
import { getComponentItem } from '../utils';
import componentRender from './componentRender';
import containerRender from './containerRender';
import type { BaseRenderType } from './type';

export interface RenderItemProps extends BaseRenderType {
  componentItems: ComponentItemType[];
  structureItem?: StructureItemType;
}

const renderItem = (props: RenderItemProps) => {
  const { componentItems, structureItem, defaultValue = {}, componentMap, editorProps } = props;
  const { id = '', children } = structureItem || {};
  const componentItem = getComponentItem(componentItems, id);
  return !isEmpty(children)
    ? containerRender({
        componentItem,
        componentItems,
        structureItem,
        componentMap,
        defaultValue,
        editorProps,
      })
    : componentRender({ componentItem, componentMap, defaultValue, editorProps });
};

export default renderItem;
