import { InputHTMLAttributes } from "react";
import { Input } from "../Input/Input";
import "./InputField.sass";
import { Label } from "../Label/Label";
// TODO: test using button class in another component. if class is still applied, move to .module.sass

export interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  id?: string;
}

export const InputField = ({
  label,
  error,
  id = label,
  required = false,
  ...props
}: InputFieldProps) => (
  <div className="input-field">
    <Label id={id}>
      {label}
      {required ? <Required /> : ""}
    </Label>
    <Input
      error={error}
      id={id}
      className="input surface-container-high"
      {...props}
    />
  </div>
);

const Required = () => (
  <span aria-label="required" style={{ color: "var(--error)" }}>
    *
  </span>
);
