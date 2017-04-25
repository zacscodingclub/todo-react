import React, { Component } from 'react';

class TaskItem extends Component {
  constructor(props) {
    super(props)

    this.handleDoubleClick = this.handleDoubleClick.bind(this);
  }

  handleDoubleClick(e) {
    this.props.handleRemove(e);
  }

  render() {
    return (
      <div className="taskItem" onDoubleClick={this.handleDoubleClick}>
        {this.props.title}
      </div>
    );
  }
}

export default TaskItem;
