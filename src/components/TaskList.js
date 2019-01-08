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
    tasks: [],
    tasksToDisplay: "all"
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

  updateTaskToDisplay = s => {
    this.setState({
      tasksToDisplay: s
    });
  };

  render() {
    let tasks = [];
    if (this.state.tasksToDisplay === "all") {
      tasks = this.state.tasks;
    } else if (this.state.tasksToDisplay === "active") {
      tasks = this.state.tasks.filter(task => !task.complete);
    } else if (this.state.tasksToDisplay === "complete") {
      tasks = this.state.tasks.filter(task => task.complete);
    }
    return (
      <div>
        <TaskForm onSubmit={this.addTask} />
        {tasks.map(task => (
          <Task
            key={task.id}
            toggleComplete={() => this.toggleComplete(task.id)}
            task={task}
          />
        ))}
        <div>
          Tasks left: {this.state.tasks.filter(task => !task.complete).length}
        </div>
        <div>
          <button onClick={() => this.updateTaskToDisplay("all")}>all</button>
          <button onClick={() => this.updateTaskToDisplay("active")}>
            active
          </button>
          <button onClick={() => this.updateTaskToDisplay("complete")}>
            complete
          </button>
        </div>
      </div>
    );
  }
}
