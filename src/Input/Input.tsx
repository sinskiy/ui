import { InputHTMLAttributes } from "react";
import "./Input.sass";
// TODO: test using button class in another component. if class is still applied, move to .module.sass

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input = ({ id, ...props }: InputProps) => {
  return (
    <input
      name={id}
      id={id}
      className={"input surface-container-high"}
      {...props}
    />
  );
};
