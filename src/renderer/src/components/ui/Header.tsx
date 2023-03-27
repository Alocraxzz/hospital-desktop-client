import { FC } from "react";

interface HeaderProps {
    children: React.ReactNode;
}

export const Header: FC<HeaderProps> = ({ children }) => {
    return (
        <h1 className="text-2xl mb-5">
            {children}
        </h1>
    );
};