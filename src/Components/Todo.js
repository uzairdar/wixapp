import React, { useState } from "react";
import { Button, Card, CardHeader, CardTitle } from "reactstrap";

import About from "./About";
import AboutTwo from "./AboutTwo";
import "./css/todo.css";
import Header from "./Header";
import Header2 from "./Header2";

function Todo(props) {
  const { todos, onDrag, setDraggedTask, setEdit } = props;

  const [item, setItem] = useState([]);
  const [single, setSingle] = useState();
  const handleClick = (e, taskID) => {
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
    <div>
      {/* <div>
        <Button size="sm " color="primary" onClick={() => setEdit(false)}>
          X
        </Button>
      </div> */}
      <div className="todo-main">
        <div className="hidden">
          {item &&
            item.map((singleComp) => (
              <div className="border-cont">{singleComp}</div>
            ))}
        </div>
        <div className="todo-inner">
          {todos.map((todo) => (
            <div
              onClick={(e) => {
                handleClick(e, todo.taskID);
                setSingle(todo);
              }}
              key={todo.taskID}
              className="todo-items"
            >
              {todo.task}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Todo;
