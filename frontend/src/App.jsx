import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ToDoInput from './components/ToDoInput';
import ToDoList from './components/ToDoList';
import './index.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const openTasks = tasks.filter((task) => !task.completed);
  const completedTasks = tasks.filter((task) => task.completed);

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

  const toggleTaskStatus = async (id) => {
    try {
      const task = tasks.find((task) => task.id === id);
      const updatedTask = { ...task, completed: !task.completed };
      await axios.put(`http://localhost:2000/data/${id}`, updatedTask);
      setTasks((prevTasks) =>
        prevTasks.map((t) => (t.id === id ? updatedTask : t))
      );
    } catch (error) {
      console.error('Fehler beim Umschalten des Status:', error);
    }
  };

  return (
    <div className="min-h-screen bg-dark_blue flex items-center justify-center">
        <div className="bg-dark_light_blue shadow-2xl rounded-lg p-8 w-full max-w-4xl">
        <h1 className="text-5xl font-bold text-center text-[#F7B176] mb-12">
          To-Do App
        </h1>
        <ToDoInput addTask={addTask} />
        <div>
          <h2 className="text-xl font-bold mb-4 text-[#F7B176]">Offene Aufgaben</h2>
          <ToDoList
            tasks={openTasks}
            toggleTaskStatus={toggleTaskStatus}
            deleteTask={deleteTask}
            updateTask={updateTask}
          />

          <h2 className="text-xl font-bold mt-8 mb-4 text-[#F7B176]">Erledigte Aufgaben</h2>
          <ToDoList
            tasks={completedTasks}
            toggleTaskStatus={toggleTaskStatus}
            deleteTask={deleteTask}
            updateTask={updateTask}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
