import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ToDoInput from './components/ToDoInput';
import ToDoList from './components/ToDoList';

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get('http://localhost:2000/data');
      setTasks(response.data);
    } catch (error) {
      console.error('Fehler beim Abrufen der Daten:', error);
    }
  };

  const addTask = async (newTask) => {
    try {
      const response = await axios.post('http://localhost:2000/data', newTask);
      setTasks([...tasks, response.data]);
    } catch (error) {
      console.error('Fehler beim Hinzufügen einer Aufgabe:', error);
    }
  };

  const updateTask = async (id, updatedTask) => {
    try {
      await axios.put(`http://localhost:2000/data/${id}`, updatedTask);
      setTasks(tasks.map((task) => (task.id === id ? updatedTask : task)));
    } catch (error) {
      console.error('Fehler beim Aktualisieren der Aufgabe:', error);
    }
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(`http://localhost:2000/data/${id}`);
      setTasks(tasks.filter((task) => task.id !== id));
    } catch (error) {
      console.error('Fehler beim Löschen der Aufgabe:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-blue-200 flex items-center justify-center">
      <div className="bg-white shadow-2xl rounded-lg p-8 w-full max-w-4xl">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
          To-Do App
        </h1>
        <ToDoInput addTask={addTask} />
        <ToDoList tasks={tasks} updateTask={updateTask} deleteTask={deleteTask} />
      </div>
    </div>
  );
};

export default App;


npm install axios
npm install @mui/icons-material
npm install tailwindcss postcss autoprefixer
npx tailwindcss init
