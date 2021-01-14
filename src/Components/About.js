import React, { useState, useEffect } from "react";
import "./css/about.css";
import about from "./assets/about.jpg";
import { connect } from "react-redux";
function About(props) {
  const {
    subtitle,
    contents,
    index,
    heading,
    // setVisible,
    // visible,
    completedTasks,
    goDown,
    goUp,
    setValues,
    // setKeys,
  } = props;
  const [count, setCount] = useState(0);
  const getData = (title) => {
    return { index, title, subtitle, contents, heading };
  };
  console.log("hello", index);
  const { tasks } = props;
  return (
    <div>
      <div className="main-cont">
        <div className="onLeft">
          <img src={about} style={{ width: "100%", height: "100%" }} />
        </div>
        <div className="onRight">
          <div className="inner-cont">
            <div className="about-btns">
              <button onClick={() => goUp(index, tasks)}>Up</button>
              <button onClick={() => goDown(index, tasks)}>Down</button>
            </div>
            {/* {arr.map((single) => single)} */}
            <h2
              className="heading"
              onClick={(e) => {
                console.log("val", e.target.innerHTML);
                const data = getData("heading");

                setValues(data);
                console.log("location:", index);
              }}
            >
              {heading}
            </h2>
            <p
              onClick={(e) => {
                const data = getData("subtitle");

                setValues(data);

                console.log("vals", e.target.innerHTML);
              }}
            >
              {subtitle}{" "}
            </p>
            <p
              onClick={(e) => {
                const data = getData("contents");
                setValues(data);
                console.log("vals", e.target.innerHTML);
              }}
            >
              {contents}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  console.log("state", state.User);
  // const { user } = state.state;
  // const {tasks}=
  const { User } = state;
  const tasks = User.completedTasks;
  return { User, tasks };
};
export default connect(mapStateToProps)(About);
