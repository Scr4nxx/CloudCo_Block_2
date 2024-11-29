import ToDoItem from './ToDoItem';

const ToDoList = ({ tasks, toggleTaskStatus, deleteTask }) => {
  return (
    <div>
      {tasks.map((task) => (
        <ToDoItem
          key={task.id}
          task={task}
          toggleTaskStatus={toggleTaskStatus}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
};

export default ToDoList;
