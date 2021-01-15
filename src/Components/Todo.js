import React, { useState } from "react";
import ReactDOM from "react-dom";

import About from "./About";
import "./css/todo.css";
import Header from "./Header";

function Todo(props) {
  const { todos, onDrag } = props;

  const [item, setItem] = useState();
  const [single, setSingle] = useState();
  const mouseOver = (e, taskID) => {
    console.log("here it is");
    var a = document.querySelector(".hidden");
    a.style.display = "block";
    if (taskID === 1) {
      setItem(<Header />);
    } else if (taskID === 2) {
      setItem(<About />);
    }
  };
  return (
    <div style={{ display: "flex" }}>
      <div
        className="hidden"
        onDrag={(event) => {
          onDrag(event, single);
        }}
        onMouseOver={(e) => mouseOver(e, single.taskID)}
      >
        {item}
      </div>
      <div style={{ width: "30%" }}>
        {todos.map((todo) => (
          <div
            // draggable
            // onDrag={(event) => {
            //   onDrag(event, todo);
            // }}
            onMouseOver={(e) => {
              mouseOver(e, todo.taskID);
              setSingle(todo);
            }}
            key={todo.taskID}
            style={{ marginTop: "30px", height: "150px" }}
          >
            {todo.task}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Todo;
