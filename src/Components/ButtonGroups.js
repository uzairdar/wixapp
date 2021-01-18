import React from "react";

import { connect } from "react-redux";
import { setIndex, setTitle } from "../redux/ActionCreators";

function ButtonGroups({
  index,
  tasks,
  goUp,
  goDown,
  Editable,
  setVisible,
  setTitleData,
  setIndexData,
}) {
  return (
    <div className="alignment">
      {console.log("objectsss", Editable)}
      {tasks[index].props.Editable === "true" && (
        <button
          onClick={() => {
            setIndexData(index);
            setVisible(true);
            // setTitleData(title);
          }}
        >
          Edit
        </button>
      )}
      {tasks[index].props.Editable === "false" && (
        <button onClick={() => setVisible(false)}>Cant edit</button>
      )}
      <div className="about-btns">
        <button
          onClick={() => {
            setVisible(false);
            goUp(index, tasks);
          }}
        >
          Up
        </button>
        <button
          onClick={() => {
            setVisible(false);

            goDown(index, tasks);
          }}
        >
          Down
        </button>
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
    setTitleData: (data) => dispatch(setTitle(data)),
  };
};
export default connect(mapStateToProps, mapDispatchtoProps)(ButtonGroups);
