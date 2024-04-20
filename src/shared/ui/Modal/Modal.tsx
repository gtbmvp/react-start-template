import React from 'react';

interface IModalProps {
    visible: boolean;
    children: React.ReactNode;
}

const Modal: React.FC<IModalProps> = ({ visible, children }) => {
    return (
        visible && (
            <div className="h-screen w-screen flex justify-center items-center bg-black bg-opacity-50">
                <div className="relative bg-white p-8 rounded shadow-lg">
                    <button className="close absolute top-0 right-1 text-gray-600 cursor-pointer">
                        <span>&times;</span>
                    </button>
                    {children}
                </div>
            </div>
        )
    );
};

export default Modal;