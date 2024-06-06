import { isEmpty } from 'lodash';
import { type ReactNode } from 'react';
import { type ComponentItemType, type StructureItemType } from 'src/types';
import { getWrapper } from '../helpers';

import renderItem from './renderItem';
import { type BaseRenderType } from './type';

// 渲染组件列表参数
export type LoopRenderProps = {
  componentItems: ComponentItemType[];
  structureItems: StructureItemType[];
} & BaseRenderType;

// 循环渲染页面
const loopRender = (props: LoopRenderProps): ReactNode => {
  const { componentItems, structureItems, defaultValue, componentMap, editorProps } = props;
  const isEditor = !isEmpty(editorProps);
  const { Wrapper } = getWrapper(isEditor ? 'component' : 'play');

  return (
    <>
      {structureItems?.map((structureItem: StructureItemType) => {
        const { id } = structureItem || {};
        const wrapperProps = isEditor ? { id, editorProps } : {};
        return (
          <Wrapper key={id} {...wrapperProps}>
            {renderItem({
              componentItems,
              structureItem,
              defaultValue,
              componentMap,
              editorProps
            })}
          </Wrapper>
        );
      })}
    </>
  );
};

export default loopRender;
