import React, { useState, useEffect } from "react";
import "./css/header.css";
import { connect } from "react-redux";
import profile from "./assets/profile.jpg";
import ButtonGroups from "./ButtonGroups";
const showDropdown = () => {
  var x = document.getElementById("myTopnav");
  x.classList.toggle("topnavFull");
};
function Header2(props) {
  const { index, goUp, goDown, moveUp, completedTasks, tasks } = props;
  const imageUrl =
    "http://demos.telerik.com/kendo-ui/content/shared/icons/16/star.png";
  useEffect(() => {
    console.log("nte tasks", props.tasks);
  }, [completedTasks]);
  return (
    <div style={{ height: "200px" }}>
      {goUp && (
        <ButtonGroups index={index} tasks={tasks} goUp={goUp} goDown={goDown} />
      )}
      {/* <div className="about-btns">
        <button onClick={() => goUp(index, props.tasks)}>Up</button>
        <button onClick={() => goDown(index, props.tasks)}>Down</button>
      </div> */}
      <img
        src={profile}
        width="100%"
        height="180px"
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
