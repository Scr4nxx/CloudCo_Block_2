import React, { useState } from 'react';

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
    <form onSubmit={handleSubmit} className="mb-4 flex items-center space-x-4">
        <input
            type="text"
            className="flex-grow border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Neue Aufgabe hinzufügen..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
        />
        <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
        >
            Hinzufügen
        </button>
    </form>
  );
};

export default ToDoInput;
