import React from "react";

export default props => (
  <div
    style={{
      textDecoration: props.task.complete ? "line-through" : ""
    }}
    onClick={props.toggleComplete}
  >
    {props.task.text}
  </div>
);
