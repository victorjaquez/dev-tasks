import React from "react";
import TaskForm from "./TaskForm";
import Task from "./Task";
/* 
Tasklist
1. Add task---
2. Display tasks---
3. Cross off tasks---
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
      tasks: [...this.state.tasks, task]
    });
  };

  toggleComplete = id => {
    this.setState({
      tasks: this.state.tasks.map(task => {
        if (task.id === id) {
          return {
            ...task,
            complete: !task.complete
          };
        } else {
          return task;
        }
      })
    });
  };

  render() {
    return (
      <div>
        <TaskForm onSubmit={this.addTask} />
        {this.state.tasks.map(task => (
          <Task
            key={task.id}
            toggleComplete={() => this.toggleComplete(task.id)}
            task={task}
          />
        ))}
        <div>
          Tasks left: {this.state.tasks.filter(task => !task.complete).length}
        </div>
      </div>
    );
  }
}
