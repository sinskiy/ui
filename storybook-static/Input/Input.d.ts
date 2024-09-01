import { InputHTMLAttributes } from '../../node_modules/react';
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    id: string;
    error?: string | null;
    setError?: React.Dispatch<React.SetStateAction<string | null>>;
}
export declare const Input: ({ id, error, ...props }: InputProps) => import("react/jsx-runtime").JSX.Element;
export {};
