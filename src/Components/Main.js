import React from "react";
import Content from "./Content";

function Main(props) {
  const {
    contents,
    setContents,
    completedTasks,
    onDragOver,
    onDragLeave,
    onDrop,
  } = props;
  return (
    <div>
      {/* <input
        type="text"
        value={contents}
        style={{ width: "99%" }}
        onChange={(e) => {
          setContents(e.target.value);
        }}
      /> */}
      {completedTasks.map((task, index) => (
        <div key={task.taskID ? task.taskID : "100"}>
          {task.task ? task.task : task}
        </div>
      ))}
      <div
        onDrop={(event) => onDrop(event)}
        onDragOver={(event) => onDragOver(event)}
        onDragLeave={(event) => onDragLeave(event)}
        className="drag"
      >
        <p>Drag Items here</p>
      </div>
    </div>
  );
}

export default Main;
