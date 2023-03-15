import { isEmpty } from 'lodash';
import type { ComponentItemType, StructureItemType } from 'src/type';
import { getWrapper } from '../helpers';

import renderItem from './renderItem';
import type { BaseRenderType } from './type';

// 渲染组件列表参数
export interface LoopRenderProps extends BaseRenderType {
  componentItems: ComponentItemType[];
  structureItems: StructureItemType[];
}

// 循环渲染页面
const loopRender = (props: LoopRenderProps): React.ReactNode => {
  const { componentItems, structureItems, defaultValue, componentMap, editorProps } = props;
  const isEditor = !isEmpty(editorProps);
  const ComponentWrapper = getWrapper(isEditor ? 'component' : 'play');

  return (
    <>
      {structureItems?.map((structureItem: StructureItemType) => {
        const { id } = structureItem || {};
        const componentWrapperProps = isEditor ? { id, editorProps } : {};
        return (
          <ComponentWrapper key={id} {...componentWrapperProps}>
            {renderItem({
              componentItems,
              structureItem,
              defaultValue,
              componentMap,
              editorProps,
            })}
          </ComponentWrapper>
        );
      })}
    </>
  );
};

export default loopRender;
