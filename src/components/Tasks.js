import React from 'react'
import { useState } from "react";
const Tasks = () => {
    const [tasks, setTasks] = useState([
        { id:1, name:"RT", completed:true},
        {id:2, name:"GS", completed:false},
        {id:3, name:"PD", completed:false},
        {id:4, name:"RB", completed:false}
      ]);
      console.log(tasks)
  return (
    <div>
        <h2> Task List</h2>
       <ul>
        {tasks.map((task)=>{
            return (
                <li key={task.id}> {task.name} - {task.completed? "Completed" : "Pending"}</li>
                
            )
        })}
       </ul>
    </div>
  )
}

export default Tasks