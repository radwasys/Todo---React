import "./App.css";
import React from "react";
import { useState } from "react";
import CreateTask from "./createTask";
import Task from "./Task";

function App(props) {
  const [tasks, setTasks] = useState([]);
  var [checked, setChecked] = useState([]);
  var [unchecked, setUnchecked] = useState([]);

  const addTask = (task) => {
    setTasks((prev) => [...prev, task]);
    setUnchecked((prev) => [...prev, task]);
    console.log(checked, unchecked)
  };

  const check = (checked, unchecked) => {
    setChecked(checked);
    setUnchecked(unchecked);
  };

  const del = (deletedTask) => {
    setTasks(tasks.filter((task) => task.id !== deletedTask));
  };

  const clr = () => {
    setTasks([]);
    setChecked([]);
    setUnchecked([]);
  };

  const clearChecked = (newtasks) => {
    setTasks(newtasks)
  }

  return (
    <div className="App">
      <CreateTask
        tasks={tasks}
        clr={clr}
        addTask={addTask}
        check={check}
        clrcheck={clearChecked}
      ></CreateTask>
      {tasks.map((task) => (
        <Task
          task={task}
          del={del}
          key={task.id}
          tasks={tasks}
          check={check}
        ></Task>
      ))}
    </div>
  );
}

export default App;
