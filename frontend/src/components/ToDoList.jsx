import React from 'react';
import ToDoItem from './ToDoItem';

const ToDoList = ({ tasks, updateTask, deleteTask }) => {
  return (
    <div className="bg-gray-100 border border-gray-200 rounded-md p-4 mt-14 shadow-inner">
        {tasks.map((task) => (
            <ToDoItem
            key={task.id}
            task={task}
            updateTask={updateTask}
            deleteTask={deleteTask}
            />
        ))}
        {tasks.length === 0 && (
            <p className="text-center text-gray-500">Keine Aufgaben vorhanden</p>
        )}
    </div>
  );
};

export default ToDoList;
