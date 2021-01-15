import React, { useState, useEffect, useContext } from "react";
import Content from "./Content";
import { connect } from "react-redux";
import Header from "./Header";
import ReactDOM from "react-dom";
import { sortable } from "react-sortable";
import "./css/dash.css";
import Todo from "./Todo";
import Main from "./Main";
import SingleItem from "./SingleItem";
import About from "./About";
import Edit from "./Edit";
import { loadCompleted, setAbout, setCompleted } from "../redux/ActionCreators";
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

function Dash(props) {
  const { tasks } = props;
  const { Index } = props;
  const [todos, setTodos] = useState(data);
  const [listItems, setListItems] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [draggedTask, setDraggedTask] = useState({});
  const [visible, setVisible] = useState(false);
  const [check, setCheck] = useState(false);
  const [values, setValues] = useState({});
  const [heading, setHeading] = useState("About");
  const [tempArr, setTempArr] = useState([]);
  const [keys, setKeys] = useState(null);
  const [subtitle, setSubtitle] = useState("Subtitles");
  // const [index, setIndex] = useState(0);
  const [contents, setContents] = useState(
    "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used inlaying out print, graphic or web designs. The passage is attributed toan unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a  type specimen book."
  );
  var el = document.querySelector(".drag");
  useEffect(() => {
    setCompletedTasks(tasks);
  }, []);
  useEffect(() => {
    setCheck(false);
    // console.log("uoiuiu", props.loadData());
    props.setCompleteData(completedTasks);
    console.log("propss are", props);

    // props.setAboutData({ heading, subtitle, contents });
  }, [completedTasks, check, props.heading]);

  const goUp = (count, tasks2) => {
    console.log("index", Index);
    var arr2 = tasks2;
    [
      arr2[Index % arr2.length],
      arr2[(Index - 1 < 0 ? arr2.length - 1 : Index - 1) % arr2.length],
    ] = [
      arr2[(Index - 1 < 0 ? arr2.length - 1 : Index - 1) % arr2.length],
      arr2[Index % arr2.length],
    ];
    setCompletedTasks(arr2);
    props.setCompleteData(arr2);
  };
  const goDown = (count, tasks2) => {
    var arr2 = tasks2;
    console.log("index", count);

    var arr2 = tasks2;

    var i;
    var temp = arr2[0];
    // if (count + 1 < arr2.length) {
    //   [arr2[count], arr2[count + 1]] = [arr2[count + 1], arr2[count]];
    // }
    // arr2[0] = arr2[arr2.length - 1];
    // arr2[1] = temp;
    // for (i = 2; i < arr2.length; i++) {
    //   arr2[i] = arr2[i + 1];
    // }

    console.log("newar", arr2);
    [arr2[Index % arr2.length], arr2[(Index + 1) % arr2.length]] = [
      arr2[(Index + 1) % arr2.length],
      arr2[Index % arr2.length],
    ];
    console.log("check", arr2);
    setCompletedTasks(arr2);
    props.setCompleteData(arr2);
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
    var index;
    event.preventDefault();
    if (draggedTask.taskID === 1) {
      index = completedTasks.length;
      setCompletedTasks((arr) => [
        ...arr,
        <Header
          goUp={goUp}
          goDown={goDown}
          setVisible={setVisible}
          index={index}
        />,
      ]);
      setDraggedTask({});

      el.style.backgroundColor = "silver";
    } else if (draggedTask.taskID === 2) {
      index = completedTasks.length;
      setCompletedTasks((arr) => [
        ...arr,
        <About
          setVisible={setVisible}
          goUp={goUp}
          setValues={setValues}
          goDown={goDown}
          index={index}
        />,
      ]);
      setDraggedTask({});
      // props.setCompleteData(completedTasks);

      // props.setCompleteData(completedTasks);
      el.style.backgroundColor = "silver";
    }
  };
  return (
    <div className="App" style={{ display: "flex" }}>
      {visible && (
        <div className="inputs">
          <Edit
            values={values}
            setValues={setValues}
            setHeading={setHeading}
            setContents={setContents}
            contents={contents}
            heading={heading}
            subtitle={subtitle}
            setSubtitle={setSubtitle}
          />
        </div>
      )}
      <div className="done">
        <Main
          setContents={setContents}
          completedTasks={tasks}
          // setCompletedTasks={""}
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
const mapStateToProps = (state) => {
  console.log("state", state.User);
  // const { user } = state.state;
  // const {tasks}=
  const { User } = state;
  const heading = User.data.Heading;
  const tasks = User.completedTasks;
  const Index = User.index;
  return { User, tasks, Index };
};
const mapDispatchtoProps = (dispatch) => {
  return {
    setAboutData: (data) => dispatch(setAbout(data)),
    setCompleteData: (data) => dispatch(setCompleted(data)),
    loadData: () => dispatch(loadCompleted),
  };
};
export default connect(mapStateToProps, mapDispatchtoProps)(Dash);
