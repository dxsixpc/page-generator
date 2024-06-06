/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { isEmpty, isNil, omit } from 'lodash';
import { type ComponentItemType } from 'src/types';
import { FormItemWrapper, editorStyled } from '../Styled';
import { getComponent } from '../components';
import { type BaseRenderType } from './type';

export type ComponentRenderProps = {
  componentItem?: ComponentItemType;
} & BaseRenderType;

// 渲染组件
const componentRender = (props: ComponentRenderProps) => {
  const { componentItem, componentMap = {}, defaultValue = {}, editorProps } = props;
  const { id = '', type, styled, showLabel, label } = componentItem || {};
  const Component = getComponent(type, componentMap);

  return (
    <FormItemWrapper
      key={id}
      name={id}
      initialValue={defaultValue?.[id]}
      {...omit(componentItem, ['styled', 'id', 'props', 'hidden', 'children', 'showLabel'])}
      label={isNil(showLabel) ? label : showLabel ? label : undefined}
      css={css`
        ${styled}
      `}
      className={isEmpty(editorProps) ? '' : editorStyled}
    >
      <Component {...componentItem?.props} />
    </FormItemWrapper>
  );
};

export default componentRender;
