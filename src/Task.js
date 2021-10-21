import React from "react";

const Task = ({task, completeTask, deleteTask}) => {
    const handleSubmit = (e) => {
        e.preventDefault()
        completeTask(task.id)
    }
    const handleDelete = (e) => {
        e.preventDefault()
        deleteTask(task.id)
    }
    if (task.complete) {
        return <div>
            <div className="alert alert-success" role="alert">
                This task ({task.name}) is complete.
            </div>
            <form onSubmit={e => handleDelete(e)}>
                <div>
                    <button type="submit" 
                    className="btn btn-danger btn-sm">
                        Delete
                    </button>    
                </div>
            </form>
        </div>
    } else {
        return <div>
            <form onSubmit={e => handleSubmit(e)}>
                <h6>{task.name}</h6>
                <div className="d-flex justify-content-start pt-3 pb-4">
                    <div>
                        {task.description}   
                    </div>
                </div>
                <div>
                    <button type="submit" 
                    className="btn btn-success btn-sm">
                        Mark Complete
                    </button>    
                </div>
            </form>
        </div>
    }
}

export default Task;