import React, { useEffect } from "react";
import Content from "./Content";

function Main(props) {
  const {
    contents,
    setContents,
    completedTasks,
    onDragOver,
    onDragLeave,
    onDrop,
    listItems,
  } = props;
  return (
    <div>
      {/* {completedTasks.map((task, index) => (
        <div key={task.taskID ? task.taskID : "100"}>
          {task.task ? task.task : task}
        </div>
      ))} */}
      <div
        onDrop={(event) => onDrop(event)}
        onDragOver={(event) => onDragOver(event)}
        onDragLeave={(event) => onDragLeave(event)}
        className="drag"
      >
        <p>Drag Items here</p>
      </div>
      <ul style={{ listStyleType: "none", padding: " 0" }}>{listItems}</ul>
    </div>
  );
}

export default Main;
