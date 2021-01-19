import React, { useState } from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

import { connect } from "react-redux";
import { setCompleted, setIndex, setTitle } from "../redux/ActionCreators";

function ButtonGroups({
  index,
  tasks,
  goUp,
  goDown,
  setCompleteData,
  Editable,
  setVisible,
  setTitleData,
  setIndexData,
}) {
  const options = ["Duplicate", "Move to..", "Height", "Delete"];
  const [drop, setDrop] = useState(false);
  const handleClick = (e, count) => {
    console.log("index", count, index);
    if (count === 0) {
    } else if (count === 1) {
    } else if (count === 2) {
    } else if (count === 3) {
      var temparr = tasks;
      var temparr2;
      temparr.splice(index, 1);
      setCompleteData(temparr);
    }
  };
  // useEffect(() => {
  //     if(BackgroundMusic[0]===null){
  //       //setcheck here
  //     }
  // }, [BackgroundMusic])
  return (
    <div className="alignment" onMouseLeave={() => setDrop(false)}>
      <div style={{ display: "flex" }}>
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
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "white",
            cursor: "pointer",
            zIndex: "100",
          }}
        >
          {drop &&
            options.map((single, count) => (
              <p className="drop" onClick={(e) => handleClick(e, count)}>
                {single}
              </p>
            ))}
          <button style={{ height: "100%" }} onMouseOver={() => setDrop(!drop)}>
            ...
          </button>
        </div>
        {/* <Dropdown
          options={options}
          onChange={onSelect}
          value=".."
          placeholder="Select an option"
        /> */}
      </div>
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
    setCompleteData: (data) => dispatch(setCompleted(data)),
    setTitleData: (data) => dispatch(setTitle(data)),
  };
};
export default connect(mapStateToProps, mapDispatchtoProps)(ButtonGroups);
