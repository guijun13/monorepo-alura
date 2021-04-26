import React from 'react';

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
  return <button disabled={disabled}>{children}</button>;
}

Button.defaultProps = {
  disabled: false,
};
