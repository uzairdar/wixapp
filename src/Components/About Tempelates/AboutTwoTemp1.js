import React, { useState, useEffect } from "react";
import "../css/about.css";
import profile from "../assets/profile.jpg";
import { connect } from "react-redux";
function AboutTwoTemp1(props) {
  const {
    subtitle,
    subCont,
    contents,
    headHeight,
    subHeight,
    heading,
    image,
    section,
    height,
  } = props;
  const [count, setCount] = useState(0);

  const { tasks } = props;
  return (
    <div style={{ height: height + "px" }} draggable>
      <div className="main-cont">
        <div className="onRight">
          <div className="inner-cont">
            <p style={{ fontSize: subHeight && subHeight }}>
              {section === "main" ? subCont : "no subCont"}
            </p>
            <h3
              className="heading"
              style={{ fontSize: headHeight && headHeight }}
            >
              {section === "main" ? heading : "no heading"}
            </h3>

            <p style={{ fontSize: subHeight && subHeight }}>
              {section === "main" ? subtitle : "no subtitle"}{" "}
            </p>
            <p style={{ fontSize: subHeight && subHeight }}>
              {section === "main" ? contents : "no content"}
            </p>
          </div>
        </div>
        <div className="onLeft">
          <img
            src={image ? image : profile}
            style={
              section === "main"
                ? { width: "100%", height: "100%" }
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
export default connect(mapStateToProps)(AboutTwoTemp1);
