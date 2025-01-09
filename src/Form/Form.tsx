import { FormHTMLAttributes, PropsWithChildren, ReactNode } from "react";
import classes from "../components.module.css";
import formClasses from "./Form.module.css";
import { cn } from "../utils";

interface Props extends FormHTMLAttributes<HTMLFormElement>, PropsWithChildren {
  loading: boolean;
  error: string | undefined;
  formTitle?: ReactNode;
  formDescription?: string;
  showReset?: boolean;
}

export default function Form({
  loading,
  error,
  formTitle,
  formDescription,
  showReset = true,
  children,
  ...props
}: Props) {
  return (
    <form {...props}>
      <section>
        {formTitle &&
          (typeof formTitle === "string" ? (
            <h2 className={formClasses.formTitle}>{formTitle}</h2>
          ) : (
            formTitle
          ))}
        {formDescription && <p className={classes.text}>{formDescription}</p>}
      </section>
      <section className={formClasses.formBody}>{children}</section>
      <section className={formClasses.formNav}>
        <button
          type="submit"
          disabled={loading}
          className={cn(classes.button, formClasses.formButton)}
        >
          submit
          {loading && <Loading />}
        </button>
        {showReset && (
          <button
            type="reset"
            className={cn(classes.button, classes.errorContainer)}
          >
            reset
          </button>
        )}
        <p className={classes.error}>{error}</p>
      </section>
    </form>
  );
}

export function Loading() {
  return (
    <div className={formClasses.loaderWrapper} aria-label="loading">
      <span className={formClasses.loader}></span>
    </div>
  );
}
