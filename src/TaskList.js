import React from "react";
import Task from "./Task.js"

const TaskList = ({tasks, completeTask, deleteTask}) => {
    return (
        <ul className="list-group">
            {tasks.map(task => {
                return <li key={task.id} className="list-group-item">
                <Task task={task} completeTask={completeTask} deleteTask={deleteTask}/>
               </li>
            })}
        </ul>
    )
}

export default TaskList;