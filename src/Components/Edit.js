import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { setCompleted, setData, setHeading } from "../redux/ActionCreators";
import About from "./About";
import About2Edit from "./EditComponents/About2Edit";
import AboutEdit from "./EditComponents/AboutEdit";

function Edit(props) {
  const {
    values,
    setValues,
    completedTasks,
    setCompletedTasks,
    heading,
    contents,
    subtitle,
    Index,
    title,
    tasks,
    setHeadData,
    setAboutData,
    setHeading,
    setContents,
    setCompleteData,
    setSubtitle,
    data,
  } = props;
  const [arr, setArr] = useState([]);
  // const [check, setCheck] = useState("false");
  const [current, setCurrent] = useState(tasks[Index]);
  const [editComp, setEditComp] = useState(null);
  const [head, setHead] = useState();
  const [sub, setSub] = useState();
  const [cont, setCont] = useState();
  useEffect(() => {
    console.log("editsss", title, Index);
    setCurrent(tasks[Index]);
    console.log("ello", tasks[Index]);
    collectData();
  }, [props]);
  const collectData = () => {
    if (
      tasks[Index] &&
      tasks[Index].props &&
      tasks[Index].props.title === "About"
    ) {
      console.log("crntsss", current.props);
      setEditComp(<AboutEdit />);
    }
    if (
      tasks[Index] &&
      tasks[Index].props &&
      tasks[Index].props.title === "About2"
    ) {
      setEditComp(<About2Edit />);
    }
  };
  return (
    <div>
      <label>
        {" "}
        <h3>Write here to edit </h3>
      </label>
      {editComp}
    </div>
  );
}
const mapStateToProps = (state) => {
  // const { user } = state.state;
  // const {tasks}=
  const { User } = state;
  console.log("state", User);

  const tasks = User.completedTasks;
  const heading = User.data.Heading;
  const data = User.data;
  const contents = User.data.Content;
  const subtitle = User.data.Subtitle;
  const Index = User.index;
  const title = User.title;

  return { data, title, Index, User, tasks, heading, contents, subtitle };
};
const mapDispatchtoProps = (dispatch) => {
  return {
    setAboutData: (data) => dispatch(setData(data)),
    setCompleteData: (data) => dispatch(setCompleted(data)),
    setHeadData: (data) => dispatch(setHeading(data)),
  };
};
export default connect(mapStateToProps, mapDispatchtoProps)(Edit);
