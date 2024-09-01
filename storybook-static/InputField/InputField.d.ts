import { InputHTMLAttributes } from '../../node_modules/react';
interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    error?: string;
    id?: string;
}
export declare const InputField: ({ label, error, id, required, ...props }: InputFieldProps) => import("react/jsx-runtime").JSX.Element;
export {};
