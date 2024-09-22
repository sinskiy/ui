import { forwardRef, InputHTMLAttributes } from "react";
import "./Input.sass";
// TODO: test using button class in another component. if class is still applied, move to .module.sass

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  error?: string | null;
  setError?: React.Dispatch<React.SetStateAction<string | null>>;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ id, error, ...props }, ref) => (
    <>
      <input
        name={id}
        id={id}
        className={"input surface-container-high"}
        ref={ref}
        {...props}
      />
      {error && (
        <p className="input__error" role="alert">
          {error}
        </p>
      )}
    </>
  ),
);
