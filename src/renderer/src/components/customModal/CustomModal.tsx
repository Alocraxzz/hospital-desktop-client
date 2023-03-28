import { FC, useState } from "react";
import Modal from "../../Modal";

export interface CustomModalProps {
    title: string;
    content: string;
    openButtonTitle: string;
    openButtonStyles: string;
    onConfirm: () => void;
}

export const CustomModal: FC<CustomModalProps> = ({ title, content, openButtonTitle, openButtonStyles, onConfirm }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOnConfirm = () => {
        onConfirm();
        setIsOpen(false);
    };

    return (
        <div className="min-w-[33%]">
            <button
                className={
                    openButtonStyles ? openButtonStyles 
                        : "bg-slate-700 hover:bg-slate-600 font-bold py-2 px-4 rounded"
                }
                onClick={() => setIsOpen(true)}
            >
                {openButtonTitle}
            </button>
            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                <h2 className="text-2xl text-white font-bold mb-4">{title}</h2>
                <p className="mb-4 text-white">{content}</p>
                <div className="flex justify-end">
                    <button
                        className="bg-slate-700 hover:bg-slate-600 font-bold text-white py-2 px-4 rounded"
                        onClick={() => setIsOpen(false)}
                        tabIndex={2}
                    >
                        Close Modal
                    </button>
                    <button
                        className="bg-slate-700 hover:bg-slate-600 font-bold text-white py-2 px-4 ml-4 rounded"
                        onClick={handleOnConfirm}
                        tabIndex={1}
                    >
                        Confirm
                    </button>
                </div>
            </Modal>
        </div>
    );
};