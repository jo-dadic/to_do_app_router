import React from "react";

export default function ToDoItem({ todo, onDelete, onCompleted }) {
  // basic style:
  let basicStyle = { cursor: "pointer", marginRight: 10 };
  if (todo.completed) {
    basicStyle.textDecoration = "line-through";
  }

  // completed:
  const handleCompleted = () => {
    onCompleted(todo.id);
  };

  //deleted:
  const handleDelete = () => {
    onDelete(todo.id);
  };

  return (
    <p className="todoitem">
      <span style={basicStyle} onClick={handleCompleted}>
        {todo.text}
      </span>
      <button onClick={handleDelete}>X</button>
    </p>
  );
}
