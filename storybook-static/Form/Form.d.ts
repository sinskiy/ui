import { FormHTMLAttributes, ReactNode } from '../../node_modules/react';
interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
    formTitle?: ReactNode;
    formDescription?: string;
    children: ReactNode;
    loading?: boolean;
}
export declare const Form: ({ formTitle, formDescription, children, loading, ...props }: FormProps) => import("react/jsx-runtime").JSX.Element;
export {};
