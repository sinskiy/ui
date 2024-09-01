import { InteractiveProps } from "../interactive";
import "./Button.sass";
// TODO: test using button class in another component. if class is still applied, move to .module.sass

interface ButtonProps extends InteractiveProps {}

export const Button = ({
  themeColor = "surface",
  containerModifier,
}: ButtonProps) => {
  return (
    <button className={classes(themeColor, containerModifier, "button")}>
      hello, world!
    </button>
  );
};

const classes = (...passedClasses: (string | undefined)[]) =>
  passedClasses.filter((passedClass) => passedClass).join(" ");
