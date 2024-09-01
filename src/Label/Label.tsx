import { LabelHTMLAttributes } from "react";
import "./Label.sass";
// TODO: test using button class in another component. if class is still applied, move to .module.sass

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  children: string;
  id?: string;
}

export const Label = ({ children, id = children, ...props }: LabelProps) => {
  return (
    <label className="label" htmlFor={id} {...props}>
      {children}
    </label>
  );
};
