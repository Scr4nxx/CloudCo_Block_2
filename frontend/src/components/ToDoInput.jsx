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
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        className="border p-2 w-full"
        placeholder="Neue Aufgabe..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 mt-2">
        Hinzufügen
      </button>
    </form>
  );
};

export default ToDoInput;
