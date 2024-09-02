import { ButtonHTMLAttributes, ReactNode } from "react";
import { InteractiveProps } from "../interactive";
import "./Button.sass";
import { classes } from "../helpers";
// TODO: test using button class in another component. if class is still applied, move to .module.sass

interface ButtonProps
  extends InteractiveProps,
    ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  children: ReactNode;
}

export const Button = ({
  loading = false,
  themeColor = "surface",
  containerModifier,
  children,
  disabled,
  ...props
}: ButtonProps) => (
  <button
    className={classes(themeColor, containerModifier, "button")}
    disabled={loading || disabled}
    {...props}
  >
    {children}
    {loading && <Loading />}
  </button>
);

const Loading = () => (
  <div className="button__loading" aria-label="loading">
    <svg
      className="button__loading__spinner"
      width="24px"
      height="24px"
      viewBox="0 0 66 66"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        className="button__loading__spinner__path"
        fill="none"
        stroke-width="6"
        stroke-linecap="round"
        cx="33"
        cy="33"
        r="30"
      ></circle>
    </svg>
  </div>
);
