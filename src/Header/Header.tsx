import { LinkHTMLAttributes, PropsWithChildren, ReactNode } from "react";
import "./Header.sass";

interface HeaderProps {
  logo: ReactNode;
  navItems: (LinkHTMLAttributes<HTMLAnchorElement> & { itemLabel: string })[];
}

// TODO: add suport for react-router
export const Header = ({ logo, navItems }: HeaderProps) => (
  <header className="header">
    <Logo>{logo}</Logo>
    <nav className="header__nav">
      {/* TODO: move to separate component and highlight active */}
      {navItems.map((navItem) => (
        <a className="header__nav__link" {...navItem}>
          {navItem.itemLabel}
        </a>
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
