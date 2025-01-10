import { InputHTMLAttributes, RefObject } from "react";
import { cn } from "../utils";

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  type: string;
  label?: string;
  error: string | undefined;
  ref?: RefObject<HTMLInputElement | null>;
}

export function InputField({
  id,
  name = id,
  label = id,
  className,
  required,
  error,
  ref,
  ...props
}: Props) {
  return (
    <div>
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
        ref={ref}
        {...props}
      />
      <p className="text-error error">{error}</p>
    </div>
  );
}
