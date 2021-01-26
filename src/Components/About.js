import React, { useState, useEffect } from "react";
import "./css/about.css";
import about from "./assets/about.jpg";
import { connect } from "react-redux";
import ButtonGroups from "./ButtonGroups";
function About(props) {
  const { subtitle, contents, image, heading, section, height } = props;
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
            <h3 className="heading">
              {section === "main" ? heading : "no heading"}
            </h3>
            <p>{section === "main" ? subtitle : "no subtitle"} </p>
            <p>{section === "main" ? contents : "no content"}</p>
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
export default connect(mapStateToProps)(About);
