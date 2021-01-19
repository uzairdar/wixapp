import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { setCompleted } from "../../redux/ActionCreators";
import About from "../About";
import AboutTwo from "../AboutTwo";

function About2Edit(props) {
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
  const [subCont, setSubCont] = useState(tasks[Index].props.subCont);
  const [cont, setCont] = useState(tasks[Index].props.contents);

  useEffect(() => {
    console.log("hello ther", head);
    if (props) {
      setHead(tasks[Index].props.heading);
      setSub(tasks[Index].props.subtitle);
      setSubCont(tasks[Index].props.subCont);
      setCont(tasks[Index].props.contents);
    }
  }, [props]);
  useEffect(() => {}, []);
  const changeVal = (title, value) => {
    var arr2 = tasks;
    if (title === "heading") {
      arr2[Index] = (
        <AboutTwo
          section="main"
          Editable="true"
          title="About2"
          heading={value}
          subtitle={sub}
          subCont={subCont}
          contents={cont}
        />
      );
    } else if (title === "subtitle") {
      arr2[Index] = (
        <AboutTwo
          section="main"
          Editable="true"
          title="About2"
          heading={head}
          subtitle={value}
          subCont={subCont}
          contents={cont}
        />
      );
    } else if (title === "subCont") {
      arr2[Index] = (
        <AboutTwo
          section="main"
          Editable="true"
          title="About2"
          heading={head}
          subtitle={sub}
          subCont={value}
          contents={cont}
        />
      );
    } else if (title === "content") {
      arr2[Index] = (
        <AboutTwo
          section="main"
          Editable="true"
          title="About2"
          heading={head}
          subtitle={sub}
          subCont={subCont}
          contents={value}
        />
      );
    }
    setCompleteData(arr2);
  };
  return (
    <div>
      <label>Heading</label>
      <textarea
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
      <textarea
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
      <label>Sub-Cont</label>
      <textarea
        value={subCont}
        onChange={(e) => {
          setSubCont(e.target.value);
          changeVal("subCont", e.target.value);
        }}
        style={{
          width: "100%",
          minHeight: "100px",
          maxHeight: "60px",
          //   minHeight: "60px",
        }}
      />
      <label>Content</label>
      <textarea
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
export default connect(mapStateToProps, mapDispatchtoProps)(About2Edit);
