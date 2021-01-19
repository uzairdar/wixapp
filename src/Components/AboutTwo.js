import React, { useState, useEffect } from "react";
import "./css/about.css";
import profile from "./assets/profile.jpg";
import { connect } from "react-redux";
import ButtonGroups from "./ButtonGroups";
function AboutTwo(props) {
  const {
    subtitle,
    newSub,
    newHead,
    newCont,
    subCont,
    contents,
    index,
    title,
    heading,
    values,
    section,
    // setVisible,
    // visible,
    completedTasks,
    goDown,
    goUp,
    setVisible,
    setValues,
    // setKeys,
  } = props;
  const [count, setCount] = useState(0);

  const { tasks } = props;
  return (
    <div>
      <div className="main-cont">
        <div className="onRight">
          <div className="inner-cont">
            <h3 className="heading">
              {section === "main" ? heading : "no heading"}
            </h3>
            <p>{section === "main" ? subtitle : "no subtitle"} </p>
            <p>{section === "main" ? subCont : "no subCont"}</p>
            <p>{section === "main" ? contents : "no content"}</p>
          </div>
        </div>
        <div className="onLeft">
          <img
            src={profile}
            style={
              section === "main"
                ? { width: "100%", height: "350px" }
                : { width: "100%", height: "100%" }
            }
          />
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  const { User } = state;
  console.log("state", User);
  const tasks = User.completedTasks;
  return { User, tasks };
};
export default connect(mapStateToProps)(AboutTwo);