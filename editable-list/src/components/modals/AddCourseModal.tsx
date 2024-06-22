"use client";

import { useState } from 'react';
import useListStore from '../../../hooks/useListStore';
import { useForm } from 'react-hook-form';

interface AddCourseModalProps {
    onAddItem: (item: string) => void;
    isModalOpen: boolean;
    onClose: () => void;
}

const AddCourseModal: React.FC<AddCourseModalProps> = ({ onAddItem }) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const handleOnSave = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // Prevent default form submission
        onAddItem(inputValue); // Use inputValue directly from state
    };

    return (
        <div className='flex flex-col gap-2 items-center justify-center flex-1 text-red-700'>
            <form onSubmit={handleOnSave}>
                <label htmlFor="input">Add item</label>
                <input type="text" value={inputValue} onChange={handleInputChange} />
                <button type="submit">Add</button>
            </form>
        </div>
    );
};

export default AddCourseModal;
