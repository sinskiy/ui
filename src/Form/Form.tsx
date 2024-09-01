import { FormHTMLAttributes, PropsWithChildren, ReactNode } from "react";
import { Button } from "../Button/Button";
import "./Form.sass";

interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  children: ReactNode;
}

export const Form = ({ children, ...props }: FormProps) => {
  return (
    <form className="form" {...props}>
      <FormMain>{children}</FormMain>
      <FormNav />
    </form>
  );
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
