import { createPortal } from "react-dom";
import { Form } from "../Form/Form";
import {
  DialogHTMLAttributes,
  PropsWithChildren,
  ReactNode,
  RefObject,
} from "react";
import { cn } from "../utils";
import classes from "./Dialog.module.css";

export interface Props
  extends DialogHTMLAttributes<HTMLDialogElement>,
    PropsWithChildren {
  loading: boolean;
  error: string | undefined;
  ref: RefObject<HTMLDialogElement>;
  dialogTitle: ReactNode;
  dialogDescription: string;
}

export default function Dialog({
  className,
  loading,
  error,
  ref,
  dialogTitle,
  dialogDescription,
  children,
  ...props
}: Props) {
  return (
    <>
      {createPortal(
        <dialog className={cn(className, classes.dialog)} ref={ref} {...props}>
          <Form
            loading={loading}
            error={error}
            formTitle={dialogTitle}
            formDescription={dialogDescription}
            secondButton={
              <button className="button error-container" formMethod="dialog">
                close
              </button>
            }
          >
            {children}
          </Form>
        </dialog>,
        document.body
      )}
    </>
  );
}
