import React, { useState, useEffect } from "react";
import "./css/header.css";
import { connect } from "react-redux";
import header2 from "./assets/header2.jpg";
import ButtonGroups from "./ButtonGroups";
const showDropdown = () => {
  var x = document.getElementById("myTopnav");
  x.classList.toggle("topnavFull");
};
function Header2(props) {
  const {
    index,
    goUp,
    goDown,
    moveUp,
    completedTasks,
    tasks,
    section,
    image,
    height,
  } = props;

  useEffect(() => {
    console.log("nte tasks", props.tasks);
  }, [completedTasks]);
  return (
    <div style={{ height: height + "px" }} draggable>
      <img
        src={image ? image : header2}
        style={
          section === "main"
            ? { width: "100%", height: "100%" }
            : { width: "100%", height: "100%" }
        }
        onClick={(e) => {
          e.preventDefault();
          //history.push('/Home')
        }}
      />
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
export default connect(mapStateToProps)(Header2);
