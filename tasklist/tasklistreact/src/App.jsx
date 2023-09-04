import React, { useState } from 'react';

import TaskList from './TaskList.jsx';
import TaskForm from './TaskForm.jsx';

function TaskApp() {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  }
  
  const deleteTask = (index) =>{

    const updateTask = [...tasks];
    updateTask.splice(index, 1);
    setTasks(updateTask);
  }

  return (
    <div className="App">
      <h1>Lista de Tareas</h1>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask}/> {/* Pasar las tareas como una prop a TaskList */}
    </div>
  )
}

export default TaskApp;
