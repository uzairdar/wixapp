import React, { useState, useEffect } from "react";
import Content from "./Content";
import Header from "./Header";
import "./css/dash.css";
import Todo from "./Todo";
import Main from "./Main";
const data = [
  {
    taskID: 1,
    task: "Header",
  },
  {
    taskID: 2,
    task: "Content",
  },
];
function Dash() {
  const [todos, setTodos] = useState(data);

  const [completedTasks, setCompletedTasks] = useState([]);
  const [draggedTask, setDraggedTask] = useState({});
  var el = document.querySelector(".drag");
  const [contents, setContents] = useState(
    "  Lorem ipsum, or lipsum as it is sometimes known, is dummy text used inlaying out print, graphic or web designs. The passage is attributed toan unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a  type specimen book."
  );
  useEffect(() => {}, [contents]);
  const onDragOver = (event) => {
    event.preventDefault();
    el.style.backgroundColor = "#9999ff";
  };
  const onDrag = (event, todo) => {
    event.preventDefault();

    setDraggedTask(todo);
  };
  const onDragLeave = (event) => {
    event.preventDefault();
    el.style.backgroundColor = "silver";
  };
  const onDrop = (event) => {
    event.preventDefault();
    if (draggedTask.taskID === 1) {
      setCompletedTasks((arr) => [...arr, <Header />]);
      setDraggedTask({});
    } else if (draggedTask.taskID === 2) {
      setCompletedTasks((arr) => [...arr, <Content contents={contents} />]);
      setDraggedTask({});
      el.style.backgroundColor = "silver";
    }
  };
  return (
    <div className="App" style={{ display: "flex" }}>
      <div className="done">
        <Main
          setContents={setContents}
          completedTasks={completedTasks}
          contents={contents}
          onDrop={onDrop}
          onDragLeave={onDragLeave}
          onDragOver={onDragOver}
        />
      </div>
      <div className="todos">
        <Todo todos={todos} onDrag={onDrag} />
      </div>
    </div>
  );
}

export default Dash;
