import React from "react";
import ToDoItem from "./ToDoItem";

export default function ToDoList({
  todoitems,
  deleteHandler,
  completedHandler,
}) {
  return todoitems.map((todo) => {
    return (
      <ToDoItem
        key={todo.id}
        todo={todo}
        onDelete={deleteHandler}
        onCompleted={completedHandler}
      />
    );
  });
}
