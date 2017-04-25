import React, { Component } from 'react';
import TaskItem from './TaskItem';

class TaskList extends Component {
  constructor(props) {
    super(props)

    this.handleRemove = this.handleRemove.bind(this);
  }

  handleRemove(e) {
    this.props.removeTask(e);
  }

  render() {
    const allTasks = this.props.list.map(t => {
      if(!t.completed) {
        return <TaskItem createdAt={t.key}
                         title={t.title}
                         completed={t.completed}
                         handleRemove={this.handleRemove} />
      }
    });

    return (
      <div className="theList">
        {allTasks}
      </div>
    );
  }
}

export default TaskList;
