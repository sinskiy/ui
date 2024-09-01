import { InputHTMLAttributes } from "react";
import { Input } from "../Input/Input";
import "./InputField.sass";
import { Label } from "../Label/Label";
// TODO: test using button class in another component. if class is still applied, move to .module.sass

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id?: string;
}

export const InputField = ({
  label,
  id = label,
  ...props
}: InputFieldProps) => {
  return (
    <div className="input-field">
      <Label id={id}>{label}</Label>
      <Input className={"input surface-container-high"} id={id} {...props} />
    </div>
  );
};
