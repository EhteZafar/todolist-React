import React, { useState } from "react";

function TodoItem(props) {
  return (
    <div
      onClick={() => {
        props.onClicked(props.id);
      }}
    >
      <li>{props.item}</li>
    </div>
  );
}

export default TodoItem;
