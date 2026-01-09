import React, { createContext, useContext, useState, type ReactNode } from 'react';
import { Button } from '../components/Button';

interface ConfirmModalContextType {
    openConfirm: (message: string, onConfirm: () => void) => void;
}

const ConfirmModalContext = createContext<ConfirmModalContextType | undefined>(undefined);

export const ConfirmModalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [show, setShow] = useState(false);
    const [message, setMessage] = useState('');
    const [onConfirm, setOnConfirm] = useState<() => void>(() => {});

    const openConfirm = (msg: string, confirmFn: () => void) => {
        setMessage(msg);
        setOnConfirm(() => confirmFn);
        setShow(true);
    };

    const handleConfirm = () => {
        onConfirm();
        setShow(false);
    };

    const handleCancel = () => setShow(false);

    return (
        <ConfirmModalContext.Provider value={{ openConfirm }}>
            {children}

            {show && (
                <div className="fixed inset-0 bg-[rgba(0,0,0,0.9)] bg-opacity-40 flex items-center justify-center z-50">
                    <div className="bg-white px-10 py-6 rounded-lg w-100 max-w-[300px] text-center shadow-lg flex flex-col gap-4">
                        <p className="text-md font-semibold leading-5">{message}</p>

                        <div className="flex gap-4 w-full">
                            <div className="w-1/2">
                                <Button.Red onClick={handleConfirm}>Sí</Button.Red>
                            </div>

                            <div className="w-1/2">
                                <Button.Gray onClick={handleCancel}>Cancelar</Button.Gray>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </ConfirmModalContext.Provider>
    );
};

export const useConfirmModal = () => {
    const ctx = useContext(ConfirmModalContext);

    if (!ctx) throw new Error('useConfirmModal debe usarse dentro de ConfirmModalProvider');

    return ctx;
};
