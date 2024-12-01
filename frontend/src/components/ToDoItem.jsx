import React, { useState } from 'react';
import { CheckCircle, RadioButtonUnchecked, Edit, DeleteForever, Save} from '@mui/icons-material';

const ToDoItem = ({ task, toggleTaskStatus, deleteTask, updateTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTaskName, setUpdatedTaskName] = useState(task.name);

  const handleUpdate = () => {
    if (!updatedTaskName.trim()) {
      alert('Der Aufgabenname darf nicht leer sein!');
      return;
    }
    updateTask(task.id, { ...task, name: updatedTaskName });
    setIsEditing(false);
  };

  return (
    <div className="flex items-center justify-between bg-[#404668] text-[#ffffff] p-4 rounded-md shadow-sm mb-2">
      <div className="flex items-center">
        {/* Status-Icon für Aufgabenstatus */}
        <button
          onClick={() => toggleTaskStatus(task.id)}
          className="mr-4 text-white hover:text-[#F7B176]"
        >
          {task.completed ? (
            <CheckCircle fontSize="large" />
          ) : (
            <RadioButtonUnchecked fontSize="large" />
          )}
        </button>

        {/* Aufgabenname oder Bearbeitungsfeld */}
        {isEditing ? (
          <input
            type="text"
            className="flex-grow focus:ring focus:ring-[#F7B176] border border-[#F7B176] text-lg bg-[#404668] text-[#ffffff] rounded-md p-2 mr-4"
            value={updatedTaskName}
            onChange={(e) => setUpdatedTaskName(e.target.value)}
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
      </div>

      {/* Aktionen: Bearbeiten, Speichern oder Löschen */}
      <div className="flex space-x-2">
        {isEditing ? (
          <button
            onClick={handleUpdate}
            className="bg-[#404668] hover:bg-[#F7B176] text-white hover:text-[#121F2F] px-2 py-1 rounded-md"
          >
            <Save></Save>
          </button>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="bg-[#404668] hover:bg-[#F7B176] text-white hover:text-[#121F2F] px-2 py-1 rounded-md"
          >
            <Edit></Edit>
          </button>
        )}
        <button
          onClick={() => deleteTask(task.id)}
          className="bg-[#404668] hover:bg-[#F7B176] text-white hover:text-[#121F2F] px-2 py-1 rounded-md"
        >
          <DeleteForever></DeleteForever>
        </button>
      </div>
    </div>
  );
};

export default ToDoItem;
