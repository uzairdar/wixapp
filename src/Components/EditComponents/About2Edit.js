import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { setCompleted } from "../../redux/ActionCreators";
import About from "../About";
import { Input } from "reactstrap";

import AboutTwo from "../AboutTwo";
import AboutTwoTemp1 from "../About Tempelates/AboutTwoTemp1";
import AboutTwoTemp2 from "../About Tempelates/AboutTwoTemp2";

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
    var tempProps = tasks[Index].props;
    if (!tempProps.template) {
      if (title === "heading") {
        arr2[Index] = <AboutTwo {...tempProps} heading={value} />;
      } else if (title === "subtitle") {
        arr2[Index] = <AboutTwo {...tempProps} subtitle={value} />;
      } else if (title === "subCont") {
        arr2[Index] = <AboutTwo {...tempProps} subCont={value} />;
      } else if (title === "content") {
        arr2[Index] = <AboutTwo {...tempProps} contents={value} />;
      }
    } else if (tempProps.template === "temp1") {
      if (title === "heading") {
        arr2[Index] = <AboutTwoTemp1 {...tempProps} heading={value} />;
      } else if (title === "subtitle") {
        arr2[Index] = <AboutTwoTemp1 {...tempProps} subtitle={value} />;
      } else if (title === "subCont") {
        arr2[Index] = <AboutTwoTemp1 {...tempProps} subCont={value} />;
      } else if (title === "content") {
        arr2[Index] = <AboutTwoTemp1 {...tempProps} contents={value} />;
      }
    } else if (tempProps.template === "temp2") {
      if (title === "heading") {
        arr2[Index] = <AboutTwoTemp2 {...tempProps} heading={value} />;
      } else if (title === "subtitle") {
        arr2[Index] = <AboutTwoTemp2 {...tempProps} subtitle={value} />;
      } else if (title === "subCont") {
        arr2[Index] = <AboutTwoTemp2 {...tempProps} subCont={value} />;
      } else if (title === "content") {
        arr2[Index] = <AboutTwoTemp2 {...tempProps} contents={value} />;
      }
    }
    setCompleteData(arr2);
  };
  return (
    <div>
      <label>Heading</label>
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
      <label>Sub-Cont</label>
      <Input
        type="textarea"
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
export default connect(mapStateToProps, mapDispatchtoProps)(About2Edit);
