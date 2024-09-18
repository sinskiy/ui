import { InputHTMLAttributes } from "react";
import "./Input.sass";
// TODO: test using button class in another component. if class is still applied, move to .module.sass

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  error?: string | null;
  setError?: React.Dispatch<React.SetStateAction<string | null>>;
}

export const Input = ({ id, error, ...props }: InputProps) => (
  <>
    <input
      name={id}
      id={id}
      className={"input surface-container-high"}
      {...props}
    />
    {error && (
      <p className="input__error" role="alert">
        {error}
      </p>
    )}
  </>
);
