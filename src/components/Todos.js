import React, { Component } from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

class Todos extends Component {
  render() {
    return this.props.todos.map((todo) => (
      <TodoItem 
        key={todo} 
        todo={todo} 
        markCompleted={this.props.markCompleted}
        delTodos={this.props.delTodos}
        />
    ));
  }
}

Todos.propTypes = {
  todo: PropTypes.array.isRequired,
};

export default Todos;
