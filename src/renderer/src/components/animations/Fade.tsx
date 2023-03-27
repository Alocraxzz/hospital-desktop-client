import React from "react";

interface FadeProps {
    children: React.ReactNode;
}

export const Fade = ({ children, ...props }: FadeProps) => {
    return (
        <div className="opacity-0 animate-fade-in" style={{ animationFillMode: "forwards" }}>
            {children}
        </div>
    );
};