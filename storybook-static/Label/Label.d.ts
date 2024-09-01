import { LabelHTMLAttributes, ReactNode } from '../../node_modules/react';
interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
    children: ReactNode;
    id?: string;
}
export declare const Label: ({ children, id, ...props }: LabelProps) => import("react/jsx-runtime").JSX.Element;
export {};
