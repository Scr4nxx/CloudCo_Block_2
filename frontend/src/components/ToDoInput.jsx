import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';

const ToDoInput = ({ addTask }) => {
    const [task, setTask] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (task.trim()) {
            addTask({ name: task, completed: false });
            setTask('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="mb-8 flex items-center space-x-4 mb-16">
            <input
                type="text"
                className="flex-grow rounded-md p-3 focus:outline-none focus:ring focus:ring-[#F7B176] text-lg bg-[#404668] text-[#ffffff]"
                placeholder="Neue Aufgabe hinzufügen..."
                value={task}
                onChange={(e) => setTask(e.target.value)}
            />
            <button
                type="submit"
                className="bg-[#404668] hover:bg-[#F7B176] text-white hover:text-[#121F2F] px-6 py-3 rounded-md text-lg"
            >
                <AddIcon></AddIcon>
            </button>
        </form>
    );
};

export default ToDoInput;