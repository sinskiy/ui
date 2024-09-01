import { ButtonHTMLAttributes, ReactNode } from "react";
import { InteractiveProps } from "../interactive";
import "./Button.sass";
// TODO: test using button class in another component. if class is still applied, move to .module.sass

interface ButtonProps
  extends InteractiveProps,
    ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export const Button = ({
  themeColor = "surface",
  containerModifier,
  children,
}: ButtonProps) => {
  return (
    <button className={classes(themeColor, containerModifier, "button")}>
      {children}
    </button>
  );
};

const classes = (...passedClasses: (string | undefined)[]) =>
  passedClasses.filter((passedClass) => passedClass).join(" ");
