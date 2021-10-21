import React, { useState } from "react";

function NewTask({createTask}) {
    const [description, setDescription] = useState(undefined)
    const [name, setName] = useState(undefined)
    const handleSubmit = e => {
        e.preventDefault()
        createTask(name, description)
    }
    return (
        <div>
            <form onSubmit={e => handleSubmit(e)}>
                <div className="form-group">
                    <label>New Todo</label>
                    <div className="p-2"></div>
                    <input type="text" 
                        className="form-control" 
                        id="description" 
                        aria-describedby="descriptionHelp" 
                        placeholder="Enter name" 
                        onChange={e => setName(e.target.value)}/>
                    <div className="p-2"></div>
                    <input type="text" 
                        className="form-control" 
                        id="description" 
                        aria-describedby="descriptionHelp" 
                        placeholder="Enter description" 
                        onChange={e => setDescription(e.target.value)}/>
                    <div className="p-2"></div>
                  </div>
                <button type="submit" className="btn btn-primary">Submit</button> 
            </form>
        </div>
    )
}

export default NewTask;