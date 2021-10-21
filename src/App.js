import './App.css';
import "./TaskList.js"
import TaskList from './TaskList.js';
import NewTask from "./NewTask.js";
import React, { useState } from 'react';

class Task {
  constructor(id, name, description, complete) {
    this.id = id
    this.name = name
    this.description = description
    this.complete = complete
  }
}

function App() {
  const [tasks, setTasks] = useState([])
  const [nextId, setNextId] = useState(0)
  const createTask = (name, description) => {
    setTasks([...tasks, new Task(nextId, name, description, false)])
    setNextId(nextId + 1)
  }

  const completeTask = (id) => {
    const newTaskList = tasks.map(task => {
      if (task.id === id) {
        task.complete = true
      }
      return task
    })
    setTasks(newTaskList)
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }
  if (tasks.length === 0) {
    return (
      <div className="container">
          <div className="row">
            <div className="col">
                <div className="p-4"></div>
                <div className="jumbotron">
                  <h1 className="display-4">Todo App</h1>
                </div>
                <div className="p-4"></div>
                <div class="alert alert-primary" role="alert">
                  No tasks have been created. Create some below :)
                </div>
                <div className="p-4"></div>
                <NewTask createTask={createTask}></NewTask>
            </div>
          </div>
      </div>
    );
  } else {
    return (
      <div className="container">
          <div className="row">
            <div className="col">
                <div className="p-4"></div>
                <div className="jumbotron">
                  <h1 className="display-4">Todo App</h1>
                </div>
              <div className="p-4"></div>
              <TaskList tasks={tasks} completeTask={completeTask} deleteTask={deleteTask}></TaskList>
              <div className="p-4"></div>
              <NewTask createTask={createTask}></NewTask>
            </div>
          </div>
      </div>
    );
  }
}

export default App;
