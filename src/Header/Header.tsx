import { PropsWithChildren, ReactElement, ReactNode } from "react";
import "./Header.sass";
import { classes } from "../helpers";

export interface HeaderProps {
  logo: ReactNode;
  navItems: ReactElement[];
  activeItemIndex?: number;
}

// TODO: add suport for react-router
export const Header = ({ logo, navItems, activeItemIndex }: HeaderProps) => (
  <header className="header">
    <Logo>{logo}</Logo>
    <nav className="header__nav">
      {/* TODO: move to separate component and highlight active */}
      {navItems.map((navItem, i) => (
        <span
          className={classes(
            "header__nav__link",
            i === activeItemIndex && "header__nav__link--active",
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
