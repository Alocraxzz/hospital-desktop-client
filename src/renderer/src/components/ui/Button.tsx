import React, { FC } from "react";

interface ButtonProps {
    children: React.ReactNode;
    type?: "button" | "submit" | "reset";
    onClick?: () => void;
}

export const Button: FC<ButtonProps> = ({ children, type, onClick}) => {
    return (
        <button onClick={onClick} type={type ?? "button"} className="self-start bg-transparent border border-slate-700 hover:bg-slate-600 font-bold py-2 px-4 rounded">
            {children}
        </button>
    );
};