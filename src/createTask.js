import { useState, createRef } from "react";
import uuid from "react-uuid";

function CreateTask(props) {
  var taskName = createRef();
  var [alert, setAlert] = useState("visually-hidden");
  var checked = [];
  var unchecked = [];

  const addTask = () => {
    if (taskName.current.value === "") {
      setAlert("alert alert-danger alert-dismissible");
      return;
    }
    props.addTask({ name: taskName.current.value, checked: false, id: uuid() });
    checked = props.tasks.filter((task) => task.checked === true);
    unchecked = props.tasks.filter((task) => task.checked === false);
    props.check(checked, unchecked);
    taskName.current.value = "";
  };

  const clear = () => {
    props.clr();
  };

  const clrcheck = () => {
    const newTasks = props.tasks.filter((task) => task.checked === false);
    props.clrcheck(newTasks);
    checked = props.tasks.filter((task) => task.checked === true);
    unchecked = props.tasks.filter((task) => task.checked === false);
    props.check(checked, unchecked);
  };

  const clrun = () => {
    const newTasks = props.tasks.filter(task => (task.checked === true))
    props.clrcheck(newTasks)
    checked = props.tasks.filter((task) => task.checked === true);
    unchecked = props.tasks.filter((task) => task.checked === false);
    props.check(checked, unchecked);
  }

  return (
    <div>
      
      <div className={alert} role="alert">
        
        Task is empty.
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>

      <form>
        <h2>Create Task</h2>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Task"
            aria-describedby="button-addon2"
            ref={taskName}
          ></input>
          <button
            className="btn btn-success"
            type="button"
            id="button-addon2"
            onClick={addTask}
          >
            Add
          </button>

          <button
            className="btn btn-danger dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            type="button"
          >
            Clear
          </button>
          <ul className="dropdown-menu dropdown-menu-end">
            <li>
              <button type="button" className="dropdown-item" onClick={clear}>
                Clear all
              </button>
            </li>
            <li>
              <button type="button" className="dropdown-item" onClick={clrcheck}>
                Clear checked tasks
              </button>
            </li>
            <li>
              <button type="button" className="dropdown-item" onClick={clrun}>
                Clear unchecked tasks
              </button>
            </li>
          </ul>
        </div>
        <div id="liveAlertPlaceholder"></div>
      </form>
    </div>
  );
}

export default CreateTask;
