
import React from 'react';

interface AlertDeleteProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirmDelete: () => void;
    title: string;
    message: string;

}

export const AlertDelete : React.FC<AlertDeleteProps> = ({ isOpen, onClose, onConfirmDelete,title, message}) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80">
            <h2 className="text-lg font-bold mb-4">{title}</h2>
            <p className="text-gray-700 mb-6">{message}</p>
            <div className="flex justify-end space-x-4">
              <button
                onClick={onClose}
                className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
              >
                Cancelar
              </button>
              <button
                onClick={onConfirmDelete}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Confirmar
              </button>
            </div>
          </div>
        </div>
      );
    };
