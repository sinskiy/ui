import type { FormHTMLAttributes, PropsWithChildren, ReactNode } from "react";
import { Button } from "../Button/Button";
import "./Form.sass";

interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  formTitle?: ReactNode;
  formDescription?: string;
  children: ReactNode;
  loading?: boolean;
}

export const Form = ({
  formTitle,
  formDescription,
  children,
  loading = false,
  ...props
}: FormProps) => (
  <form className="form" {...props}>
    <section>
      {formTitle && <FormTitle>{formTitle}</FormTitle>}
      <FormDescription>{formDescription}</FormDescription>
    </section>
    <FormMain>{children}</FormMain>
    <FormNav loading={loading} />
  </form>
);

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

interface FormNavProps {
  loading: boolean;
}
const FormNav = ({ loading }: FormNavProps) => (
  <section className="form__nav">
    <Button type="submit" loading={loading} themeColor="primary">
      submit
    </Button>
    {/* error-container for better difference between submit and reset if theme is red */}
    <Button type="reset" loading={loading} themeColor="error-container">
      reset
    </Button>
  </section>
);
