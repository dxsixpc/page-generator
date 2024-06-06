import styled from '@emotion/styled';

type ContainerWrapperProps = {
  styled: {
    unstyled?: boolean;
    horizontal?: boolean;
    hover?: boolean;
    placeholder?: boolean;
    scrollable?: boolean;
    shadow?: boolean;
  };
};

const containerWrapper = (props: ContainerWrapperProps): string => {
  return `
    display: flex;
    flex-direction: column;
    grid-auto-rows: max-content;
    overflow: hidden;
    box-sizing: border-box;
    appearance: none;
    outline: none;
    min-width: 350px;
    margin: 10px;
    border-radius: 5px;
    min-height: 200px;
    transition: background-color 350ms ease;
    background-color: rgba(246, 246, 246, 1);
    border: 1px solid rgba(0, 0, 0, 0.05);
    font-size: 1em;

    ul {
      display: grid;
      grid-gap: 10px;
      grid-template-columns: repeat(var(--columns, 1), 1fr);
      list-style: none;
      padding: 20px;
      margin: 0;
    }

    &:focus-visible {
      border-color: transparent;
      box-shadow: 0 0 0 2px rgba(255, 255, 255, 0), 0 0px 0px 2px #4c9ffe;
    }

    ${
      props.styled.scrollable
        ? `&.scrollable {
        ul {
          overflow-y: auto;
        }
      }`
        : ''
    }

    ${
      props.styled.placeholder
        ? `&.placeholder {
        justify-content: center;
        align-items: center;
        cursor: pointer;
        color: rgba(0, 0, 0, 0.5);
        background-color: transparent;
        border-style: dashed;
        border-color: rgba(0, 0, 0, 0.08);

        &:hover {
          border-color: rgba(0, 0, 0, 0.15);
        }
      }`
        : ''
    }

    ${
      props.styled.hover
        ? `&.hover {
        background-color: rgb(235, 235, 235, 1);
      }`
        : ''
    }
    
    ${
      props.styled.unstyled
        ? `&.unstyled {
        overflow: visible;
        background-color: transparent !important;
        border: none !important;
      }`
        : ''
    }


    ${
      props.styled.horizontal
        ? `&.horizontal {
        width: 100%;
        ul {
          grid-auto-flow: column;
        }
      }`
        : ''
    }

    ${
      props.styled.shadow
        ? `&.shadow {
        box-shadow: 0 1px 10px 0 rgba(34, 33, 81, 0.1);
      }`
        : ''
    }
  `;
};

export const DivWrapper = styled.div<ContainerWrapperProps>`
  ${(props) => containerWrapper(props)}
`;

export const ButtonWrapper = styled.button<ContainerWrapperProps>`
  ${(props) => containerWrapper(props)}
`;

export const HeaderWrapper = styled.div`
  display: flex;
  padding: 5px 20px;
  padding-right: 8px;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);

  &:hover {
    .Actions > * {
      opacity: 1 !important;
    }
  }
`;

export const ActionsWrapper = styled.div`
  display: flex;

  > *:first-child:not(:last-child) {
    opacity: 0;

    &:focus-visible {
      opacity: 1;
    }
  }
`;
