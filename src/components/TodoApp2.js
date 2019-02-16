import React from "react";
import TodoItem from "./ToDoItem";
import toDoData from "./todoData";

class TodoApp2 extends React.Component {
  constructor() {
    super();
    this.state = {
      toDoList: toDoData
    };
    this.handleChecker = this.handleChecker.bind(this);
  }

  handleChecker(index) {
    this.setState(prevState => {
      let updates = prevState.toDoList.map(item => {
        if (item.id === index) {
          item.completed = !item.completed;
        }
      });
      return updates;
    });
  }

  render() {
    const toDoItems = this.state.toDoList.map((todo, index) => (
      <TodoItem key={todo.id} todo={todo} handleChecker={this.handleChecker} />
    ));
    return <div>{toDoItems}</div>;
  }
}
export default TodoApp2;
