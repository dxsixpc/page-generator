import { css } from '@emotion/react';
import { type FC } from 'react';
import { dragging, ItemWrapper } from './Styled';

export type ItemProps = {
  value: any;
  isDragging?: boolean;
};

const Item: FC<ItemProps> = (props) => {
  const { value, isDragging } = props;

  return (
    <ItemWrapper
      css={css`
        ${isDragging && dragging}
      `}
    >
      {value}
    </ItemWrapper>
  );
};

export default Item;
