import React from "react";
import TodoItem from "./ToDoItem";
import toDoData from "./todoData";

class ToDo extends React.Component {
  constructor() {
    super();
    this.state = {
      toDoList: toDoData
    };
  }
  render() {
    const toDoItems = this.state.toDoList.map(todo => (
      <TodoItem key={todo.id} todo={todo} />
    ));
    return <div>{toDoItems}</div>;
  }
}
export default ToDo;
