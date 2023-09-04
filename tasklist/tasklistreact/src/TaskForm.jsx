import React, { useState } from 'react' //se importan los hooks de la libreria 



function TaskForm({addTask}){

    const [task , setTaks] = useState(''); //se crea una constante donde queda el valor task y el cambio a la variable set task usando el estado useState
    const submit = (e) => { //funcion de la lista de tareas

        e.preventDefault(); //previene el evento submit del boton

        if(task.trim === '') return; //retorna si es vacio para que no añada nada
        addTask(task); //añade la funcion al app.jsx par que escriba en el elemento <li>
        setTaks(''); //limpia el campo de entrada
    };

return(

<div>
    <h2>Add task</h2>
    <form  onSubmit={submit}>

        <input type="text" placeholder='write a task' value={task} onChange={(e) => setTaks(e.target.value)} /> {/*input el cual nos permitira crear la tarea y este se vera reflejado por el evento onchange  */}
        <button type='submit'>Add</button>
      
    </form>
</div>

)

}
export default TaskForm;