import { InputHTMLAttributes } from "react";
import classes from "../components.module.css";
import { cn } from "../utils";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  type: string;
  label?: string;
  error: string | undefined;
}

export default function InputField({
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
      <label htmlFor={id} className={classes.label}>
        {label}
        {required && (
          <span aria-label="required" className={classes.textError}>
            *
          </span>
        )}
      </label>
      <input
        name={name}
        id={id}
        className={cn(
          className,
          classes.input,
          error && classes.inputWithError
        )}
        {...props}
      />
      <p className={classes.error}>{error}</p>
    </>
  );
}
