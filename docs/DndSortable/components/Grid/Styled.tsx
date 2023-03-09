import styled from '@emotion/styled';

export const GridWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: repeating-linear-gradient(
      0deg,
      transparent,
      transparent calc(var(--grid-size) - 1px),
      #ddd calc(var(--grid-size) - 1px),
      #ddd var(--grid-size)
    ),
    repeating-linear-gradient(
      -90deg,
      transparent,
      transparent calc(var(--grid-size) - 1px),
      #ddd calc(var(--grid-size) - 1px),
      #ddd var(--grid-size)
    );
  background-size: var(--grid-size) var(--grid-size);
  z-index: -1;
  pointer-events: none;
`;
