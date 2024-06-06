import { isEmpty } from 'lodash';
import { type ComponentItemType, type StructureItemType } from 'src/types';
import { getComponentItem } from '../utils';
import componentRender from './componentRender';
import containerRender from './containerRender';
import { type BaseRenderType } from './type';

export type RenderItemProps = {
  componentItems: ComponentItemType[];
  structureItem?: StructureItemType;
} & BaseRenderType;

const renderItem = (props: RenderItemProps) => {
  const { componentItems, structureItem, defaultValue = {}, componentMap, editorProps } = props;
  const { id = '', children } = structureItem || {};
  const componentItem = getComponentItem(componentItems, id);
  return isEmpty(children)
    ? componentRender({ componentItem, componentMap, defaultValue, editorProps })
    : containerRender({
        componentItem,
        componentItems,
        structureItem,
        componentMap,
        defaultValue,
        editorProps
      });
};

export default renderItem;
