import React from "react";
import TaskForm from "./TaskForm";
/* 
Tasklist
1. Add task
2. Display tasks
3. Cross off tasks
4. Show # of active tasks
5. Filter all/active/complete
6. Delete task
7. Delete all complete tasks
    7.1 Only show if minimum one is complete
8. Toggle all button on/off
*/

export default class TasksList extends React.Component {
  state = {
    tasks: []
  };

  addTask = task => {
    this.setState({
      tasks: [task, ...this.state.tasks]
    });
  };

  render() {
    return (
      <div>
        <TaskForm onSubmit={this.addTask} />
        {JSON.stringify(this.state.tasks)}
      </div>
    );
  }
}
