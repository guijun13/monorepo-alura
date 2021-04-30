import React from 'react';
import { ButtonWrapper, ButtonWrapperProps } from './styles/ButtonWrapper';

// inteface para o componente botao
interface ButtonBaseProps {
  type?: 'button' | 'submit' | 'reset';
  /**
   * Essa prop usa o disabled padrao do HTML
   */
  disabled?: boolean;
  /**
   * Passa o que renderizar dentro do botão
   */
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
// Button.propTypes = {
//   disabled: PropTypes.bool,
//   children: PropTypes.node.isRequired,
// }

// combinando as 2 interfaces em um tipo
type ButtonProps = ButtonBaseProps & ButtonWrapperProps;

export default function Button({
  type,
  disabled,
  children,
  color,
  onClick,
}: ButtonProps): JSX.Element {
  return (
    <ButtonWrapper type={type} disabled={disabled} color={color} onClick={onClick}>
      {children}
    </ButtonWrapper>
  );
}

Button.defaultProps = {
  disabled: false,
  color: 'primary.main',
};
