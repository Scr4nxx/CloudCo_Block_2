import React from 'react';
import ToDoItem from './ToDoItem';

const ToDoList = ({ tasks, toggleTaskStatus, deleteTask, updateTask }) => {
  return (
    <div>
      {tasks.map((task) => (
        <ToDoItem
          key={task.id}
          task={task}
          toggleTaskStatus={toggleTaskStatus}
          deleteTask={deleteTask}
          updateTask={updateTask}
        />
      ))}
    </div>
  );
};

export default ToDoList;
