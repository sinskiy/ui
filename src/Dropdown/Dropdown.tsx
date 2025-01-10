import {
  ChangeEvent,
  HTMLAttributes,
  PropsWithChildren,
  ReactNode,
  useRef,
} from "react";
import { cn } from "../utils";
import classes from "./Dropdown.module.css";

interface Props extends PropsWithChildren, HTMLAttributes<HTMLElement> {
  id: string;
  name?: string;
  label?: ReactNode;
  icon?: false | ReactNode;
}

export function Dropdown({
  id,
  name = id,
  label = id,
  icon,
  className,
  children,
  ...props
}: Props) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    function handleClickOutside(eClick: Event) {
      if (
        wrapperRef.current &&
        inputRef.current &&
        !wrapperRef.current.contains(eClick.target as Node)
      ) {
        inputRef.current.checked = false;
        document.removeEventListener("click", handleClickOutside);
      }
    }

    if (e.currentTarget.checked) {
      document.addEventListener("click", handleClickOutside);
    }
  }

  return (
    <div className={classes.wrapper} ref={wrapperRef}>
      <input
        type="checkbox"
        name={name}
        id={id}
        className="invisible-checkbox"
        onChange={handleChange}
        ref={inputRef}
      />
      {typeof label === "string" ? (
        <label
          htmlFor={id}
          className={cn(
            "input",
            classes.label,
            icon !== false && classes.withIcon
          )}
        >
          {icon ?? <DropdownIcon />}
          {label}
        </label>
      ) : (
        label
      )}
      <div className={cn(className, "card", classes.contentWrapper)} {...props}>
        {children}
      </div>
    </div>
  );
}

export function DropdownIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 -960 960 960"
      width="24px"
      fill="currentColor"
      className={classes.rotateIcon}
    >
      <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
    </svg>
  );
}
