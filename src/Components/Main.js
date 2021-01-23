import React, { useState, useEffect } from "react";
import ButtonGroups from "./ButtonGroups";
import { connect } from "react-redux";
import Draggable from "react-draggable";
import AddButton from "./AddButton";

function Main(props) {
  const {
    contents,
    setContents,
    completedTasks,
    onDragOver,
    onDragLeave,
    onDrop,
    goDown,
    goUp,
    tasks,
    setVisible,
  } = props;
  useEffect(() => {}, [tasks]);
  const [count, setCount] = useState(0);
  const [image, setImage] = useState(null);
  return (
    <div>
      <div
        onDrop={(event) => onDrop(event)}
        onDragOver={(event) => onDragOver(event)}
        onDragLeave={(event) => onDragLeave(event)}
        className="drag"
      >
        <p>Drag Items here</p>
      </div>

      {tasks &&
        tasks.map((task, index) => (
          <div className="borders" style={{ minHeight: "200px" }} key={index}>
            <ButtonGroups
              setVisible={setVisible}
              index={index}
              editable={task.props.Editable}
              goUp={goUp}
              goDown={goDown}
            />
            {task}
            <div className="show">
              <AddButton index={index} />
            </div>
          </div>
        ))}
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
  const Index = User.index;
  return { User, tasks, Index };
};
export default connect(mapStateToProps)(Main);
