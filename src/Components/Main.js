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
  const [selected, setSelected] = useState(null);

  return (
    <div style={{ minHeight: window.innerHeight - 20 + "px" }}>
      {tasks.length === 0 && (
        <div
          onDrop={(event) => onDrop(event, 0)}
          onDragOver={(event) => onDragOver(event)}
          onDragLeave={(event) => onDragLeave(event)}
          className="drag"
        >
          <p>Drag Items here</p>
        </div>
      )}
      {tasks &&
        tasks.map((task, index) => (
          <div className="borders" style={{ height: "100%" }} key={index}>
            <ButtonGroups
              setVisible={setVisible}
              index={index}
              editable={task.props.Editable}
              goUp={goUp}
              goDown={goDown}
            />
            <div>{task}</div>

            {selected === index && (
              <div
                onDrop={(event) => onDrop(event, index)}
                onDragOver={(event) => onDragOver(event)}
                onDragLeave={(event) => onDragLeave(event)}
                className="drag"
              >
                <p>Drag Items here</p>
              </div>
            )}
            <div className="show">
              <AddButton
                setSelected={setSelected}
                selected={selected}
                index={index}
              />
            </div>
          </div>
        ))}
    </div>
  );
}
const mapStateToProps = (state) => {
  console.log("state", state.User);
  const { User } = state;
  const heading = User.data.Heading;
  const tasks = User.completedTasks;
  const Index = User.index;
  return { User, tasks, Index };
};
export default connect(mapStateToProps)(Main);
