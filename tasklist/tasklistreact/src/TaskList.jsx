

import React from "react";

function TaskList({tasks}) {

  return (
    <>
     <div>
      <h2>Task list</h2>
          <ul>
            {tasks.map((task, index) =>(
              <li key={index}>{task}</li>
            ))}
          </ul>
     </div>
    </>
  )
}

export default TaskList;