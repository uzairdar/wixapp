import React, { useState, useEffect, useContext } from "react";
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
import {
  aboutHeading1,
  aboutSubtitle1,
  aboutContent1,
  aboutHeading2,
  aboutSubtitle2,
  aboutContent2,
  aboutSubCont,
} from "./data/aboutData";
import { loadCompleted, setAbout, setCompleted } from "../redux/ActionCreators";
import Header2 from "./Header2";
import AboutTwo from "./AboutTwo";
import Design from "./Design";
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
  const [completedTasks, setCompletedTasks] = useState([]);
  const [draggedTask, setDraggedTask] = useState({});
  const [visible, setVisible] = useState(false);
  const [designVisible, setDesignVisible] = useState(false);
  const [check, setCheck] = useState(false);
  const [values, setValues] = useState({});
  const [edit, setEdit] = useState(true);
  const [heading, setHeading] = useState("About");
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
    props.setCompleteData(completedTasks);
  }, [completedTasks]);

  const goUp = (count, tasks2) => {
    var arr2 = tasks2;
    if (count !== 0) {
      [arr2[count], arr2[count - 1]] = [arr2[count - 1], arr2[count]];
    } else {
      [arr2[count], arr2[tasks.length - 1]] = [
        arr2[tasks.length - 1],
        arr2[count],
      ];
    }

    // setCompletedTasks(arr2);
    props.setCompleteData(arr2);
  };
  const goDown = (count, tasks2) => {
    var arr2 = tasks2;

    var arr2 = tasks2;

    if (count !== tasks.length - 1) {
      [arr2[count], arr2[count + 1]] = [arr2[count + 1], arr2[count]];
    } else {
      [arr2[count], arr2[0]] = [arr2[0], arr2[count]];
    }
    console.log("check", arr2);
    // setCompletedTasks(arr2);
    props.setCompleteData(arr2);
  };
  const onDragOver = (event) => {
    event.preventDefault();
    el.style.backgroundColor = "#9999ff";
  };
  const onDrag = (event, taskId) => {
    event.preventDefault();
    console.log("object", event.target.style.opacity);
    event.target.style.opacity = "1";

    setDraggedTask(taskId);
  };
  const onDragLeave = (event) => {
    event.preventDefault();
    el.style.backgroundColor = "silver";
  };
  const onDrop = (event, location) => {
    var index;
    setEdit(false);
    event.preventDefault();
    var comp;
    var temparr3 = completedTasks;
    if (draggedTask === 1) {
      comp = (
        <Header title="Header" height="350" Editable="false" section="main" />
      );
      setDraggedTask({});
    } else if (draggedTask === 2) {
      comp = (
        <About
          section="main"
          title="About"
          height="350"
          heading={aboutHeading1}
          subtitle={aboutSubtitle1}
          contents={aboutContent1}
          Editable="true"
        />
      );
      setDraggedTask({});
    } else if (draggedTask === 11) {
      comp = (
        <Header2 title="Header2" height="350" section="main" Editable="false" />
      );
      setDraggedTask({});
    } else if (draggedTask === 22) {
      comp = (
        <AboutTwo
          section="main"
          title="About2"
          height="350"
          heading={aboutHeading2}
          subtitle={aboutSubtitle2}
          subCont={aboutSubCont}
          contents={aboutContent2}
          Editable="true"
        />
      );

      setDraggedTask({});
    }
    temparr3.splice(location + 1, 0, comp);
    setCompletedTasks(temparr3);
    el.style.backgroundColor = "silver";
  };
  return (
    <div
      style={{
        display: "flex",
        height: "100%",
      }}
    >
      {designVisible && (
        <div className="inputs">
          <Design setVisible={setVisible} setDesignVisible={setDesignVisible} />
        </div>
      )}
      {visible && (
        <div className="inputs">
          <Edit
            values={values}
            setValues={setValues}
            setHeading={setHeading}
            setContents={setContents}
            contents={contents}
            setVisible={setVisible}
            heading={heading}
            subtitle={subtitle}
            setSubtitle={setSubtitle}
          />
        </div>
      )}
      <div className="done">
        <Main
          setContents={setContents}
          contents={contents}
          setEdit={setEdit}
          goDown={goDown}
          section="main"
          setVisible={setVisible}
          setDesignVisible={setDesignVisible}
          goUp={goUp}
          onDrop={onDrop}
          onDragLeave={onDragLeave}
          onDragOver={onDragOver}
        />
      </div>
      {edit && (
        <div className="todos">
          <Todo
            setDraggedTask={setDraggedTask}
            setEdit={setEdit}
            todos={todos}
            onDrag={onDrag}
          />
        </div>
      )}
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
