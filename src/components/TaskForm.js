import React from "react";
import shortid from "shortid";

export default class TaskForm extends React.Component {
  state = {
    text: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    // submit - create new task w/ shortid, pass to task list
    this.props.onSubmit({
      id: shortid.generate(),
      text: this.state.text,
      complete: false
    });
    this.setState({
      text: ""
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name="text"
          value={this.state.text}
          onChange={this.handleChange}
          placeholder="Enter task..."
        />
        <button onClick={this.handleSubmit}>Add task</button>
      </form>
    );
  }
}
