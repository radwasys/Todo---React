import { createRef , useState } from "react";

function Task(props) {
  const checked = createRef();
  var check = [];
  var unchecked = [];
  var [disable, setDisabled] = useState(true);
  var [cls, setCls] = useState("btn btn-outline-primary")
  var [text, setText] = useState("Edit")
  var [value, setValue] = useState(props.task.name)

  const change = () => {
    props.task.checked = checked.current.checked;
    check = props.tasks.filter((task) => task.checked === true);
    unchecked = props.tasks.filter((task) => task.checked === false);
    props.check(check, unchecked);
  };

  const remove = () => {
    const id = props.task.id
    props.del(id)
    check = props.tasks.filter((task) => task.checked === true);
    unchecked = props.tasks.filter((task) => task.checked === false);
    props.check(check, unchecked)
  }

  const edit = () => {
    if (text === "Edit"){
      setCls("btn btn-outline-success")
      setText("Update")
      setDisabled(false)
    } else {
      setCls("btn btn-outline-primary")
      setText("Edit")
      setDisabled(true)
    }
  }

  return (
    <div>
      <div class="input-group mb-3">
        <div class="input-group-text">
          <input
            class="form-check-input mt-0"
            type="checkbox"
            ref={checked}
            onChange={change}
            aria-label="Checkbox for following text input"
          ></input>
        </div>
        <input
          type="text"
          className="form-control"
          aria-label="Text input with checkbox"
          disabled={disable}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        ></input>
        <button
          class={cls}
          type="button"
          id="button-addon2"
          onClick={edit}
        >
          {text}
        </button>
        <button
          class="btn btn-outline-danger"
          type="button"
          id="button-addon2"
          onClick={remove}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default Task;
