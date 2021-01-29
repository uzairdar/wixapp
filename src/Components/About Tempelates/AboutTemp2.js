import React, { useState, useEffect } from "react";
import "../css/about.css";
import about from "../assets/about.jpg";
import { connect } from "react-redux";
function AboutTemp1(props) {
  const {
    subtitle,
    contents,
    image,
    heading,
    section,
    height,
    headHeight,
    subHeight,
  } = props;
  const [count, setCount] = useState(0);

  const { tasks } = props;
  return (
    <div draggable style={{ height: height + "px" }}>
      <div className="main-cont">
        <div className="onLeft">
          <img
            src={image ? image : about}
            style={
              section === "main"
                ? { width: "100%", height: "100%" }
                : { width: "100%", height: "100%" }
            }
          />
        </div>
        <div className="onRight">
          <div className="inner-cont">
            <p className="para" style={{ fontSize: subHeight && subHeight }}>
              {section === "main" ? contents : "no content"}
            </p>
            <p className="para" style={{ fontSize: subHeight && subHeight }}>
              {section === "main" ? subtitle : "no subtitle"}{" "}
            </p>
            <h3
              className="heading"
              style={{ fontSize: headHeight && headHeight }}
            >
              {section === "main" ? heading : "no heading"}
            </h3>
          </div>
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
export default connect(mapStateToProps)(AboutTemp1);
