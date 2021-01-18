import React, { useState, useEffect } from "react";
import "./css/about.css";
import about from "./assets/about.jpg";
import { connect } from "react-redux";
import ButtonGroups from "./ButtonGroups";
function About(props) {
  const {
    subtitle,
    newSub,
    newHead,
    newCont,
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
      {/* {goUp && (
        <ButtonGroups
          setVisible={setVisible}
          index={index}
          tasks={tasks}
          title={"about"}
          goUp={goUp}
          goDown={goDown}
        />
      )} */}
      <div className="main-cont">
        <div className="onLeft">
          <img src={about} style={{ width: "100%", height: "100%" }} />
        </div>
        <div className="onRight">
          <div className="inner-cont">
            {/* <div className="about-btns">
              <button onClick={() => goUp(index, tasks)}>Up</button>
              <button onClick={() => goDown(index, tasks)}>Down</button>
            </div> */}
            {/* {arr.map((single) => single)} */}
            <h3 className="heading">
              {section === "main"
                ? newHead
                  ? newHead
                  : heading
                : "no heading"}
            </h3>
            <p>
              {section === "main"
                ? newSub
                  ? newSub
                  : subtitle
                : "no subtitle"}{" "}
            </p>
            <p>
              {section === "main"
                ? newCont
                  ? newCont
                  : contents
                : "no content"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  // const { user } = state.state;
  // const {tasks}=
  const { User } = state;
  console.log("state", User);

  const tasks = User.completedTasks;
  // const heading = User.data.Heading;
  // const contents = User.data.Content;
  // const subtitle = User.data.Subtitle;
  return { User, tasks };
};
export default connect(mapStateToProps)(About);
