import React from "react";
import ToDoItem from "./ToDoItem";

export default function ToDoList({ todoitems, onDelete, onCompleted }) {
  return todoitems.map((todo) => {
    return (
      <ToDoItem
        key={todo.id}
        todo={todo}
        onDelete={onDelete}
        onCompleted={onCompleted}
      />
    );
  });
}
