'use client'
import React, { useState } from 'react';
import { AlertDelete } from './alertDelete';
export const BottomDelete: React.FC = () => {

    const [isOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    }

    const handleCloseModal = () => {
        setIsModalOpen(false);
    }

    const confirmDelete = () => {
        console.log('Deleted');
        handleCloseModal();
    }
    return (
     <div>
        <button
        onClick={handleOpenModal}
        className="bottom-delete__button bottom-delete__button--delete bg-red-500 p-2 rounded-lg">
            Delete
        </button>

        <AlertDelete
            isOpen={isOpen}
            onClose={handleCloseModal}
            onConfirmDelete={confirmDelete}
            title="Delete Course"
            message="Are you sure you want to delete this course?"
        />
     </div>
    )
}

export default BottomDelete;

