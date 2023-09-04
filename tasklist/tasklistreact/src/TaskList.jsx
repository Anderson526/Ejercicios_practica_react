

import React from "react";

function TaskList({tasks,deleteTask}) {

  return (
    <>
     <div>
      <h2>Task list</h2>
          <ul>
            {tasks.map((task, index) =>(
              <li key={index}>{task}{' '}     <button onClick={()=> deleteTask(index)}>Remove</button></li>
            ))}
              
          </ul>  
    
     </div>
    </>
  )
}

export default TaskList;
