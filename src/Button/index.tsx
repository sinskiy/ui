import { InteractiveProps } from "../interactive";
import "./index.sass";
// TODO: test using button class in another component. if class is still applied, move to .module.sass

interface ButtonProps extends InteractiveProps {}

export const Button = ({ themeColor = "primary" }: ButtonProps) => {
  return (
    <button className={classes(themeColor, "button")}>hello, world!</button>
  );
};

const classes = (...passedClasses: string[]): string => passedClasses.join(" ");
