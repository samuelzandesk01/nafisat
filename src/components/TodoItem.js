import React, {Component} from "react";
import PropTypes from "prop-types";

class TodoItem extends Component {
 

    getStyle = () => {
        return{
            textDecoration: this.props.todo.completed ? 'line-through' : 'none',
            background: 'light-gray',
            height: '50vh'
        }
    }

  render() {
      const {id, title} = this.props.todo
    return (
      <div style={this.getStyle()}>
        <p>
          <input 
          type="checkbox" 
          onChange={this.props.markCompleted.bind(this, id)} /> {' '}
          {title}
          <button style={delStyle} onClick={this.props.delTodos.bind(this, id)}>X</button>
        </p>
      </div>
    );
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
};


const delStyle = {
    color: '#87c6fd'
}

export default TodoItem;
