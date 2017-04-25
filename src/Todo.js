import React, { Component } from 'react';
import TaskInput from './TaskInput';
import TaskList from './TaskList';
import './todo.css';

class Todo extends Component {
  constructor(props) {
    super(props)

    this.state = {
      todos: [
      {
        title: 'Test 1',
        completed: false,
        createdAt: "1493148631270"
      },
      {
        title: 'Test 2',
        completed: false,
        createdAt: "1493148641057"
      }
      ]
    }

    this.addTask = this.addTask.bind(this);
    this.removeTask = this.removeTask.bind(this);
  }

  addTask(task) {
    this.setState({
      todos: this.state.todos.concat(task)
    });
  }

  removeTask(event) {
    this.setState({
      todos: this.state.todos.filter(todo => {
        return todo.title !== event.target.textContent
      })
    })
  }

  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          <TaskInput task={this.state.task}
                     addTask={this.addTask} />
        </div>
        <div className="list">
          <TaskList list={this.state.todos}
                    removeTask={this.removeTask} />
        </div>
      </div>
    );
  }
}

export default Todo;
