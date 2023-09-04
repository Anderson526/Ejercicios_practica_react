import React, { useState } from 'react';

import TaskList from './TaskList.jsx';
import TaskForm from './TaskForm.jsx';

function TaskApp() {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  }
  
  return (
    <div className="App">
      <h1>Lista de Tareas</h1>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} /> {/* Pasar las tareas como una prop a TaskList */}
    </div>
  )
}

export default TaskApp;
