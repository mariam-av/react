import React from "react";

function TodoItem(props) {
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        onChange={() => {
          props.handleChecker(props.todo.id);
        }}
        checked={props.todo.completed}
      />
      <p style={{ fontStyle: props.todo.completed ? "italic" : "normal" }}>
        {props.todo.text}
      </p>
    </div>
  );
}

function handleOnChange() {
  console.log("changed");
}
export default TodoItem;
