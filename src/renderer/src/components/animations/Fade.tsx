import React from "react";

interface FadeProps {
    children: React.ReactNode;
}

export const Fade = ({ children }: FadeProps) => {
    return (
        <div className="opacity-0 animate-fade-in" style={{ animationFillMode: "forwards" }}>
            {children}
        </div>
    );
};