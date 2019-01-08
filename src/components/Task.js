import React from "react";

export default props => (
  <div style={{ display: "flex", justifyContent: "center" }}>
    <div
      style={{
        textDecoration: props.task.complete ? "line-through" : ""
      }}
      onClick={props.toggleComplete}
    >
      {props.task.text}
    </div>
    <button onClick={props.deleteTask}>x</button>
  </div>
);
