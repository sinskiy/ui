import { InputHTMLAttributes } from "react";
import { cn } from "../utils";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  type: string;
  label?: string;
  error: string | undefined;
}

export function InputField({
  id,
  name = id,
  label = id,
  className,
  required,
  error,
  ...props
}: Props) {
  return (
    <>
      <label htmlFor={id} className="label">
        {label}
        {required && (
          <span aria-label="required" className="text-error">
            *
          </span>
        )}
      </label>
      <input
        name={name}
        id={id}
        className={cn(className, "input", error && "input-with-error")}
        {...props}
      />
      <p className="text-error error">{error}</p>
    </>
  );
}
