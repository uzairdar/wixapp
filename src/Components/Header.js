import React, { useState, useEffect } from "react";
import "./css/header.css";
import { connect } from "react-redux";
import header from "./assets/header.jpg";
import ButtonGroups from "./ButtonGroups";
const showDropdown = () => {
  var x = document.getElementById("myTopnav");
  x.classList.toggle("topnavFull");
};
function Header(props) {
  const { completedTasks, section, height, image } = props;
  useEffect(() => {
    console.log("nte tasks", props.tasks);
  }, [completedTasks]);
  return (
    <div draggable className="main-container" style={{ height: height + "px" }}>
      <img
        src={image ? image : header}
        style={
          section === "main"
            ? { width: "100%", height: "100%" }
            : { width: "100%", height: "100%" }
        }
        onClick={(e) => {
          e.preventDefault();
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
export default connect(mapStateToProps)(Header);
