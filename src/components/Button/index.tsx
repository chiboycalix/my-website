import React from 'react';
import './button.scss'

type ButtonProps = {
  children: React.ReactNode | JSX.Element
};
const Button: React.FC<ButtonProps> = (props) => {
  return <button>{props.children}</button>;
};

export default Button;
