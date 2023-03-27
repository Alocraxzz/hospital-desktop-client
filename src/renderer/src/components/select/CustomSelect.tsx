import { useState, useEffect, useRef, FC } from "react";

type Option = {
    value: string;
    label: string;
};

type SelectProps = {
    options: Option[];
    placeholder?: string;
    onSelect: (value: string) => void;
};

export const CustomSelect: FC<SelectProps> = ({ options, placeholder, onSelect }) => {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    const selectRef = useRef<HTMLDivElement>(null);

    const filteredOptions = options.filter((option) =>
        option.label.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleSelect = (value: string) => {
        setSearchTerm('');
        setMenuOpen(false);
        onSelect(value);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
                setMenuOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [selectRef]);

    return (
        <div ref={selectRef} className="relative">
            <input
                type="text"
                placeholder={placeholder || 'Select an option'}
                className="bg-slate-700 border border-gray-700 p-2 w-full rounded-lg"
                value={searchTerm}
                onFocus={() => setMenuOpen(true)}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            {menuOpen && (
                <ul className="absolute top-full z-10 w-full max-h-60 overflow-y-auto border rounded-lg bg-slate-700 shadow-md">
                    {filteredOptions.length > 0 ? (
                        filteredOptions.map((option) => (
                            <li
                                key={option.value}
                                className="px-1 py-1 cursor-pointer hover:bg-blue-500 hover:text-white"
                                onClick={() => handleSelect(option.value)}
                            >
                                {option.label}
                            </li>
                        ))
                    ) : (
                        <li className="px-1 py-2 text-sm text-gray-500">No options found</li>
                    )}
                </ul>
            )}
        </div>
    );
};