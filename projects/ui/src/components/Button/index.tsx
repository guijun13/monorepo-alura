import React from 'react';
import styled from 'styled-components';

const ButtonWrapper = styled.button`
  border: 0;
  cursor: pointer;
  padding: 12px 26px;
  font-weight: bold;
  opacity: 1;
  border-radius: 8px;

  color: ${({ theme }) => theme.colors.primary.main.contrastText};
  background: ${({ theme }) => theme.colors.primary.main.color};

  &:disabled {
    cursor: pointer;
    opacity: 0.2;
  }
`;
interface ButtonProps {
  /**
   * Essa prop usa o disabled padrao do HTML
   */
  disabled?: boolean;
  /**
   * Passa o que renderizar dentro do botão
   */
  children: React.ReactNode;
}
// Button.propTypes = {
//   disabled: PropTypes.bool,
//   children: PropTypes.node.isRequired,
// }

export default function Button({ disabled, children }: ButtonProps) {
  return <ButtonWrapper disabled={disabled}>{children}</ButtonWrapper>;
}

Button.defaultProps = {
  disabled: false,
};
