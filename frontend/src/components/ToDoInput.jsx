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
                        className="flex-grow border border-gray-300 rounded-md p-3 focus:outline-none focus:ring focus:ring-blue-300 text-lg"
                        placeholder="Neue Aufgabe hinzufügen..."
                        value={task}
                        onChange={(e) => setTask(e.target.value)}
                />
                <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md text-lg"
                >
                    <AddIcon></AddIcon>
                </button>
        </form>
    );
};

export default ToDoInput;