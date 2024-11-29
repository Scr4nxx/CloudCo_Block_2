import { CheckCircle, RadioButtonUnchecked } from '@mui/icons-material';

const ToDoItem = ({ task, toggleTaskStatus, deleteTask }) => {
  return (
    <div className="flex items-center justify-between bg-gray-50 p-4 rounded-md shadow-sm mb-2">
      <div className="flex items-center">
        <button
          onClick={() => toggleTaskStatus(task.id)}
          className="mr-4 text-blue-500"
        >
          {task.completed ? (
            <CheckCircle fontSize="large" />
          ) : (
            <RadioButtonUnchecked fontSize="large" />
          )}
        </button>
        <span
          className={`flex-grow ${
            task.completed ? 'line-through text-gray-500' : ''
          }`}
        >
          {task.name}
        </span>
      </div>
      <button
        onClick={() => deleteTask(task.id)}
        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
      >
        Löschen
      </button>
    </div>
  );
};

export default ToDoItem;
