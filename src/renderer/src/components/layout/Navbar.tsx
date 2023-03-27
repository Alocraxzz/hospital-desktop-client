import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

interface NavItem {
    label: string;
    path: string;
}

const navItems: NavItem[] = [
    { label: "Home", path: "/" },
    { label: "Patients", path: "/patients" },
    { label: "Doctors", path: "/doctors" },
    { label: "Appointments", path: "/appointments" },
    { label: "Medical records", path: "/medical-records" },
];

export const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-transparent border border-slate-700 rounded-b-lg">
            <div className="max-w-7xl mx-auto px-2 md:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    <div className="absolute inset-y-0 right-0 flex items-center md:hidden">
                        <button
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                            aria-controls="mobile-menu"
                            aria-expanded={isOpen}
                            onClick={toggleMenu}
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? (
                                <HiX className="block h-6 w-6" />
                            ) : (
                                <HiMenu className="block h-6 w-6" />
                            )}
                        </button>
                    </div>
                    <div className="flex-1 flex items-center justify-center md:items-stretch md:justify-between">
                        <div className="flex-shrink-0 items-center">
                            <Link to="/">
                                <span className="text-2xl text-bold">Hospital</span>
                            </Link>
                        </div>
                        <div className="hidden md:block md:ml-6">
                            <div className="flex space-x-4">
                                {navItems.map((item) => (
                                    <Link
                                        key={item.label}
                                        to={item.path}
                                        className="text-gray-300 hover:bg-slate-800 hover:text-white px-3 py-2 rounded-md text-md font-medium"
                                    >
                                        {item.label}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden" id="mobile-menu">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        {navItems.map((item) => (
                            <Link
                                key={item.label}
                                to={item.path}
                                className="border border-slate-700 text-white block px-3 py-2 rounded-md text-base font-medium"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};
