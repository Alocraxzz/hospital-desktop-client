import React, { FC } from "react";

interface TableProps {
    children: React.ReactNode;
    props?: any;
}

export const Thead: FC<TableProps> = ({ children }) => {
    return (
        <thead className="bg-transparent border-b border-slate-700">
            {children}
        </thead>
    );
}

export const Tbody: FC<TableProps> = ({ children }) => {
    return (
        <tbody className="divide-y divide-slate-700">
            {children}
        </tbody>
    );
};

export const Table: FC<TableProps | any> = ({ children, ...props }) => {
    return (
        <div {...props}>
            <div className="overflow-auto border border-slate-700 shadow rounded-md pb-auto w-full">
                <table className="w-full">
                    {children}
                </table>
            </div>
        </div>
    );
};