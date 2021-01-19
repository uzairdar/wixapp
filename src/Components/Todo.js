import React, { useState } from "react";
import ReactDOM from "react-dom";

import About from "./About";
import AboutTwo from "./AboutTwo";
import "./css/todo.css";
import Header from "./Header";
import Header2 from "./Header2";

function Todo(props) {
  const { todos, onDrag, setDraggedTask } = props;

  const [item, setItem] = useState([]);
  const [single, setSingle] = useState();
  const mouseOver = (e, taskID) => {
    console.log("here it is");
    var a = document.querySelector(".hidden");
    a.style.display = "block";
    if (taskID === 1) {
      setItem([
        <div
          onDrag={(event) => {
            onDrag(event, 1);
          }}
        >
          <Header />
        </div>,
        <div
          onDrag={(event) => {
            onDrag(event, 11);
          }}
        >
          <Header2 />
        </div>,
      ]);
    } else if (taskID === 2) {
      setItem([
        <div
          onDrag={(event) => {
            onDrag(event, 2);
          }}
        >
          <About />
        </div>,
        <div
          onDrag={(event) => {
            onDrag(event, 22);
          }}
        >
          <AboutTwo />
        </div>,
      ]);
    }
  };
  return (
    <div style={{ display: "flex", justifyContent: "flex-end" }}>
      <div className="hidden">
        {console.log("items", item)}
        {item && item.map((singleComp) => singleComp)}
      </div>
      <div
        style={{
          width: "30%",
          display: "flex",
          // border: "1px solid black",
          flexDirection: "column",
          alignItems: "flex-end",
        }}
      >
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
            style={{
              marginBottom: "20px",
              height: "50px",
            }}
          >
            {todo.task}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Todo;
