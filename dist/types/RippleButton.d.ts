import { MouseEventHandler } from 'react';
declare type Props = {
    children: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
};
export declare const RippleButton: ({ children, onClick }: Props) => JSX.Element;
export {};
