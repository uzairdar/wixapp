import React, { useState, useEffect } from "react";
import Content from "./Content";

function Main(props) {
  const {
    contents,
    setContents,
    completedTasks,
    onDragOver,
    setCompletedTasks,
    onDragLeave,
    onDrop,
    listItems,
  } = props;
  const [count, setCount] = useState(0);

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
      {console.log("completed", completedTasks)}
      {completedTasks &&
        completedTasks.map((task, index) => (
          <div>
            <div key={task.taskID ? task.taskID : "100"}>
              {task.task ? task.task : task}
            </div>
          </div>
        ))}
    </div>
  );
}

export default Main;
