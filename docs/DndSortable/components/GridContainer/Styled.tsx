import styled from '@emotion/styled';

export const GridContainerWrapper = styled.ul`
  max-width: 800px;
  display: grid;
  grid-template-columns: repeat(var(--col-count), 1fr);
  grid-gap: 10px;
  padding: 20px;

  @media (max-width: 850px) {
    grid-template-columns: repeat(calc(var(--col-count) - 1), 1fr);
  }

  @media (max-width: 650px) {
    grid-template-columns: repeat(calc(var(--col-count) - 2), 1fr);
  }
`;
