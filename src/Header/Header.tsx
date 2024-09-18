import { PropsWithChildren, ReactElement, ReactNode } from "react";
import "./Header.sass";
import { classes } from "../helpers";

export interface HeaderProps {
  logo: ReactNode;
  navItems: ReactElement[];
  activeItemIndex?: number;
  linkButtonIndex?: number;
}

// TODO: add suport for react-router
export const Header = ({
  logo,
  navItems,
  activeItemIndex,
  linkButtonIndex,
}: HeaderProps) => (
  <header className="header">
    <Logo>{logo}</Logo>
    <nav className="header__nav">
      {/* TODO: move to separate component and highlight active */}
      {navItems.map((navItem, i) => (
        <span
          key={i}
          className={classes(
            "header__nav__link",
            i === activeItemIndex && "active",
            i === linkButtonIndex ? "link-button" : "link",
          )}
        >
          {navItem}
        </span>
      ))}
    </nav>
  </header>
);

const Logo = ({ children }: PropsWithChildren) => {
  if (typeof children === "string") {
    return (
      <a href="/" className="header__logo">
        {children}
      </a>
    );
  }
  return children;
};
