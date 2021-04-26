import React from 'react';

export default function Button({ disabled, children }) {
  return <button disabled={disabled}>{children}</button>;
}
