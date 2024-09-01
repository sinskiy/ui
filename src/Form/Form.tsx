import type { FormHTMLAttributes, PropsWithChildren, ReactNode } from "react";
import { Button } from "../Button/Button";
import "./Form.sass";

interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  formTitle?: ReactNode;
  formDescription?: string;
  children: ReactNode;
}

export const Form = ({
  formTitle,
  formDescription,
  children,
  ...props
}: FormProps) => {
  return (
    <form className="form" {...props}>
      <section>
        {formTitle && <FormTitle>{formTitle}</FormTitle>}
        <FormDescription>{formDescription}</FormDescription>
      </section>
      <FormMain>{children}</FormMain>
      <FormNav />
    </form>
  );
};

const FormTitle = ({ children }: PropsWithChildren) => {
  if (typeof children === "string") return <h2>{children}</h2>;
  return <>{children}</>;
};

const FormDescription = ({ children }: PropsWithChildren) => {
  return <p className="text">{children}</p>;
};

const FormMain = ({ children }: PropsWithChildren) => (
  <section className="form__main">{children}</section>
);

const FormNav = () => (
  <section className="form__nav">
    <Button themeColor="primary" type="submit">
      submit
    </Button>
    {/* error-container for better difference between submit and reset if theme is red */}
    <Button themeColor="error-container" type="reset">
      reset
    </Button>
  </section>
);
