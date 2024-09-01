import { LinkHTMLAttributes, ReactNode } from '../../node_modules/react';
interface HeaderProps {
    logo: ReactNode;
    navItems: (LinkHTMLAttributes<HTMLAnchorElement> & {
        itemLabel: string;
    })[];
}
export declare const Header: ({ logo, navItems }: HeaderProps) => import("react/jsx-runtime").JSX.Element;
export {};
