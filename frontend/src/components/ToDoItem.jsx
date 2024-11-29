import React, { useState } from 'react';

const ToDoItem = ({ task, updateTask, deleteTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTask, setUpdatedTask] = useState(task.name);

  const handleUpdate = () => {
    updateTask(task.id, { ...task, name: updatedTask });
    setIsEditing(false);
  };

  return (
    <div className="flex items-center justify-between border p-2 mb-2">
      {isEditing ? (
        <input
          type="text"
          className="border p-1"
          value={updatedTask}
          onChange={(e) => setUpdatedTask(e.target.value)}
        />
      ) : (
        <span
          style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
        >
          {task.name}
        </span>
      )}
      <div>
        <button
          onClick={() => setIsEditing(!isEditing)}
          className="bg-yellow-500 text-white px-2 py-1 mr-2"
        >
          {isEditing ? 'Speichern' : 'Bearbeiten'}
        </button>
        <button
          onClick={() => deleteTask(task.id)}
          className="bg-red-500 text-white px-2 py-1"
        >
          Löschen
        </button>
      </div>
    </div>
  );
};

export default ToDoItem;
