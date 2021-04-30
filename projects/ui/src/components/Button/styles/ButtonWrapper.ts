import { get } from "lodash";
import styled from "styled-components";

// interface para estilos/wrapper do botao
export interface ButtonWrapperProps {
  color: 'primary.main' | 'secondary.main' | 'tertiary.main';
}

export const ButtonWrapper = styled.button<ButtonWrapperProps>`
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