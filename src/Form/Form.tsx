import { FormHTMLAttributes, PropsWithChildren, ReactNode } from "react";
import formClasses from "./Form.module.css";
import { cn } from "../utils";

interface Props extends FormHTMLAttributes<HTMLFormElement>, PropsWithChildren {
  loading: boolean;
  error: string | undefined;
  formTitle?: ReactNode;
  formDescription?: string;
  secondButton?: ReactNode | false;
}

export function Form({
  loading,
  error,
  formTitle,
  formDescription,
  secondButton,
  children,
  ...props
}: Props) {
  return (
    <form {...props}>
      <section>
        {formTitle &&
          (typeof formTitle === "string" ? (
            <h2 className={formClasses.title}>{formTitle}</h2>
          ) : (
            formTitle
          ))}
        {formDescription && <p className="text">{formDescription}</p>}
      </section>
      <section className={formClasses.body}>{children}</section>
      <section className={formClasses.nav}>
        <button
          type="submit"
          disabled={loading}
          className={cn("button", formClasses.button)}
        >
          submit
          {loading && (
            <div className={formClasses.loaderWrapper}>
              <Loading />
            </div>
          )}
        </button>
        {secondButton ?? (
          <button type="reset" className="button error-container">
            reset
          </button>
        )}
        <p className="text-error error">{error}</p>
      </section>
    </form>
  );
}

export function Loading() {
  return <span className={formClasses.loader} aria-label="loading"></span>;
}
