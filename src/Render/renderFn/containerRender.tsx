import { getComponent } from '@dxsixpc/components';
import { styledToString } from '@dxsixpc/utils';
import { omit } from 'lodash';
import type { ComponentItemType, OnEventChangeType, StructureItemType } from 'src/type';
import loopRender from './loopRender';
import type { BaseRenderType } from './type';

export interface ContainerRenderProps extends BaseRenderType {
  componentItem?: ComponentItemType;
  structureItem?: StructureItemType;
  componentItems: ComponentItemType[];
  onEventChange?: OnEventChangeType;
}

// 渲染包含children的布局组件
const containerRender = (props: ContainerRenderProps) => {
  const {
    componentItem,
    componentItems,
    structureItem,
    componentMap,
    defaultValue,
    onEventChange,
  } = props;
  const { id = '', children } = structureItem || {};
  const { type, hidden } = componentItem || {};
  if (!children || hidden) return;
  const Component = getComponent(type);
  return (
    <Component
      key={id}
      {...omit(componentItem?.props, ['styled'])}
      styled={styledToString(componentItem?.props?.styled)}
    >
      {loopRender({
        componentItems,
        structureItems: children,
        defaultValue,
        componentMap,
        type: props.type,
        onEventChange,
      })}
    </Component>
  );
};

export default containerRender;
