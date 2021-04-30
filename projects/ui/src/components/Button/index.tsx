import React from 'react';
import styled from 'styled-components';
import get from 'lodash/get';

const ButtonWrapper = styled.button`
  border: 0;
  cursor: pointer;
  padding: 12px 26px;
  font-weight: bold;
  opacity: 1;
  border-radius: 8px;

  color: ${({ theme, color }) => get(theme, `colors.${color}.contrastText`)};
  background: ${({ theme, color }) => get(theme, `colors.${color}.color`)};

  &:disabled {
    cursor: pointer;
    opacity: 0.2;
  }
`;
interface ButtonProps {
  type?: 'button' | 'submit' | 'reset';
  color: 'primary.main' | 'secondary.main' | 'tertiary.main';
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
