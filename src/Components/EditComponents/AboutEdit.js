import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { setCompleted } from "../../redux/ActionCreators";
import About from "../About";
import { Input } from "reactstrap";

function AboutEdit(props) {
  const {
    heads,
    subs,
    conts,
    tasks,
    Index,
    setCompleteData,
    current,
    // setCheck,
    // check,
  } = props;
  const [head, setHead] = useState(tasks[Index].props.heading);
  const [sub, setSub] = useState(tasks[Index].props.subtitle);
  const [cont, setCont] = useState(tasks[Index].props.contents);

  useEffect(() => {
    if (props) {
      setHead(tasks[Index].props.heading);
      setSub(tasks[Index].props.subtitle);
      setCont(tasks[Index].props.contents);
    }
  }, [props]);
  useEffect(() => {}, []);
  const changeVal = (title, value) => {
    var arr2 = tasks;
    var tempProps = tasks[Index].props;

    if (title === "heading") {
      arr2[Index] = <About {...tempProps} heading={value} />;
    } else if (title === "subtitle") {
      arr2[Index] = <About {...tempProps} subtitle={value} />;
    } else if (title === "content") {
      arr2[Index] = <About {...tempProps} contents={value} />;
    }
    setCompleteData(arr2);
  };
  return (
    <div>
      <label>Heading</label>
      {console.log("inside prpos", props)}
      <Input
        type="textarea"
        value={head}
        onChange={(e) => {
          setHead(e.target.value);
          changeVal("heading", e.target.value);
        }}
        style={{
          width: "100%",
          minHeight: "100px",
          maxHeight: "60px",
          //   minHeight: "60px",
        }}
      />
      <label>Subtitle</label>
      <Input
        type="textarea"
        value={sub}
        onChange={(e) => {
          setSub(e.target.value);
          changeVal("subtitle", e.target.value);
        }}
        style={{
          width: "100%",
          minHeight: "100px",
          maxHeight: "60px",
          //   minHeight: "60px",
        }}
      />
      <label>Content</label>
      <Input
        type="textarea"
        value={cont}
        onChange={(e) => {
          setCont(e.target.value);
          changeVal("content", e.target.value);
        }}
        style={{
          width: "100%",
          minHeight: "100px",
          maxHeight: "60px",
          //   minHeight: "60px",
        }}
      />
    </div>
  );
}
const mapStateToProps = (state) => {
  // const { user } = state.state;
  // const {tasks}=
  const { User } = state;
  console.log("state", User);
  const tasks = User.completedTasks;
  const Index = User.index;

  return { Index, tasks };
};
const mapDispatchtoProps = (dispatch) => {
  return {
    setCompleteData: (data) => dispatch(setCompleted(data)),
  };
};
export default connect(mapStateToProps, mapDispatchtoProps)(AboutEdit);
