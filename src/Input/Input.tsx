import { InputHTMLAttributes } from "react";
import "./Input.sass";
// TODO: test using button class in another component. if class is still applied, move to .module.sass

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input = ({ ...props }: InputProps) => {
  return (
    <input className={classes("input surface-container-high")} {...props} />
  );
};

const classes = (...passedClasses: string[]): string => passedClasses.join(" ");
