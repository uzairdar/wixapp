import React from "react";

function Todo(props) {
  const { todos, onDrag } = props;
  return (
    <div>
      {todos.map((todo) => (
        <div
          draggable
          onDrag={(event) => onDrag(event, todo)}
          key={todo.taskID}
          style={{ marginTop: "30px" }}
        >
          {todo.task}
        </div>
      ))}
    </div>
  );
}

export default Todo;
