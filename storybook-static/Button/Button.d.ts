import { ButtonHTMLAttributes, ReactNode } from '../../node_modules/react';
import { InteractiveProps } from '../interactive';
interface ButtonProps extends InteractiveProps, ButtonHTMLAttributes<HTMLButtonElement> {
    loading?: boolean;
    children: ReactNode;
}
export declare const Button: ({ loading, themeColor, containerModifier, children, disabled, ...props }: ButtonProps) => import("react/jsx-runtime").JSX.Element;
export {};
