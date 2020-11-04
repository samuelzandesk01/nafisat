import React, { Component } from "react";

class AddTodoList extends Component {

    state = {
        title: ''
    }

    displayTask = (e) =>{
        e.preventDefault();
        this.props.addTodo(this.state.title)
        this.setState({ title: '' })
        
    }

    submitTask = (e) => this.setState({ 
        [e.target.name]: e.target.value 
    })


  render() {
    return (
      <form onSubmit={this.displayTask}>
        <input 
            type="text" 
            name="title" 
            className="addTodo"
            placeholder="Add new task..."
            value={this.state.title} 
            onChange={this.submitTask}
        />
        <input 
            type="submit" 
            value="Add Task" 
        />
      </form>
    );
  }
}

export default AddTodoList;
