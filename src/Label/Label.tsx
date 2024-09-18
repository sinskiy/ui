import { LabelHTMLAttributes, ReactNode } from "react";
import "./Label.sass";
// TODO: test using button class in another component. if class is still applied, move to .module.sass

export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  children: ReactNode;
  id?: string;
}

export const Label = ({ children, id, ...props }: LabelProps) => (
  <label className="label" htmlFor={id} {...props}>
    {children}
  </label>
);
