import React, { useState, useEffect } from "react";
import Content from "./Content";
import Header from "./Header";
import ReactDOM from "react-dom";
import { sortable } from "react-sortable";
import "./css/dash.css";
import Todo from "./Todo";
import Main from "./Main";
import SingleItem from "./SingleItem";
import About from "./About";
import Edit from "./Edit";
const data = [
  {
    taskID: 1,
    task: "Header",
  },
  {
    taskID: 2,
    task: "About",
  },
];

function Dash() {
  const [todos, setTodos] = useState(data);
  const [listItems, setListItems] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [draggedTask, setDraggedTask] = useState({});
  const [visible, setVisible] = useState(false);
  const [check, setCheck] = useState(false);
  const [values, setValues] = useState(null);
  const [heading, setHeading] = useState("About");
  const [keys, setKeys] = useState(null);
  const [subtitle, setSubtitle] = useState("Subtitles");
  const [contents, setContents] = useState(
    "  Lorem ipsum, or lipsum as it is sometimes known, is dummy text used inlaying out print, graphic or web designs. The passage is attributed toan unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a  type specimen book."
  );
  var el = document.querySelector(".drag");
  var SortableItem = sortable(SingleItem);

  const onSortItems = (items) => {
    setCompletedTasks(items);
    setCheck(true);
  };
  useEffect(() => {
    setCheck(false);
    fetchArr();
  }, [completedTasks, check, visible]);
  const fetchArr = () => {
    var state = completedTasks.map((item, i) => {
      return (
        <SortableItem
          key={i}
          onSortItems={onSortItems}
          items={completedTasks}
          sortId={i}
        >
          {item}
        </SortableItem>
      );
    });
    setListItems(state);
  };
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
      el.style.backgroundColor = "silver";
    } else if (draggedTask.taskID === 2) {
      setCompletedTasks((arr) => [
        ...arr,
        <About
          subtitle={subtitle}
          heading={heading}
          contents={contents}
          setKeys={setKeys}
          setValues={setValues}
          setVisible={setVisible}
          visible={visible}
        />,
      ]);
      setDraggedTask({});
      el.style.backgroundColor = "silver";
    }
  };
  return (
    <div className="App" style={{ display: "flex" }}>
      {visible && (
        <div className="inputs">
          <Edit values={values} keys={keys} setValues={setValues} />
        </div>
      )}
      <div className="done">
        <Main
          setContents={setContents}
          completedTasks={completedTasks}
          listItems={listItems}
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
