import React, { Component } from 'react';

class TaskInput extends Component {
  constructor(props) {
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    this.props.addTask({
      title: this.textInput.value,
      completed: false,
      key: Date.now()
    });

    this.textInput.value = '';
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text"
               placeholder="Enter Task"
               ref={(input) => { this.textInput = input; }} />
        <button type="submit">Add</button>
      </form>
    );
  }
}

export default TaskInput;
