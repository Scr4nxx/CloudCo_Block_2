import React, { useState } from 'react';

const ToDoItem = ({ task, updateTask, deleteTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTask, setUpdatedTask] = useState(task.name);

  const handleUpdate = () => {
    updateTask(task.id, { ...task, name: updatedTask });
    setIsEditing(false);
  };

  return (
    <div className="flex items-center justify-between bg-gray-50 p-4 rounded-md shadow-sm mb-2">
        {isEditing ? (
            <input
            type="text"
            className="flex-grow border border-gray-300 rounded-md p-2 mr-4"
            value={updatedTask}
            onChange={(e) => setUpdatedTask(e.target.value)}
            />
        ) : (
            <span
            className={`flex-grow ${
                task.completed ? 'line-through text-gray-500' : ''
            }`}
            >
            {task.name}
            </span>
        )}
        <div className="flex space-x-2">
            <button
            onClick={isEditing ? handleUpdate : () => setIsEditing(true)}
            className="bg-yellow-400 hover:bg-yellow-500 text-white px-2 py-1 rounded-md"
            >
            {isEditing ? 'Speichern' : 'Bearbeiten'}
            </button>
            <button
            onClick={() => deleteTask(task.id)}
            className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded-md"
            >
            Löschen
            </button>
        </div>
    </div>
  );
};

export default ToDoItem;
