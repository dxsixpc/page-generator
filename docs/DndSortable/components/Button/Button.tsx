import { type FC, type HTMLAttributes, type ReactNode } from 'react';
import { ButtonWrapper } from './Styled';

export type ButtonProps = {
  children: ReactNode;
} & HTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({ children, ...props }) => {
  return <ButtonWrapper {...props}>{children}</ButtonWrapper>;
};

export default Button;
