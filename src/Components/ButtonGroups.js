import React from "react";

import { connect } from "react-redux";
import { setIndex } from "../redux/ActionCreators";

function ButtonGroups({
  index,
  tasks,
  goUp,
  goDown,
  title,
  setVisible,
  setIndexData,
}) {
  return (
    <div className="alignment">
      <button
        onClick={() => {
          setIndexData(index);
          setVisible(true);
        }}
      >
        Edit
      </button>
      <div className="about-btns">
        <button onClick={() => goUp(index, tasks)}>Up</button>
        <button onClick={() => goDown(index, tasks)}>Down</button>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  console.log("state", state.User);
  // const { user } = state.state;
  // const {tasks}=
  const { User } = state;
  const heading = User.data.Heading;
  const tasks = User.completedTasks;
  return { User, tasks };
};
const mapDispatchtoProps = (dispatch) => {
  return {
    setIndexData: (data) => dispatch(setIndex(data)),
  };
};
export default connect(mapStateToProps, mapDispatchtoProps)(ButtonGroups);
