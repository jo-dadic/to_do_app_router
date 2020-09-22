import React, { useState } from "react";

export default function AddNewItem({ onAdd }) {
  //useState
  const [newToDoTxt, setNewToDoTxt] = useState("");

  //setting state to user's text from input:
  const ToDoInputHandler = (event) => {
    const todotext = event.target.value;
    setNewToDoTxt(todotext);
  };

  //handling adding new text:
  const addHandler = () => {
    const newtext = newToDoTxt.trim();
    if (newtext.length === 0) {
      return;
    }

    onAdd(newtext);
    //reset input:
    setNewToDoTxt("");
  };

  //setting up enter key
  // const onKeyUp = (event) => {
  //   if (event.charCode === 13) {
  //     setNewEnterKey();
  //   }
  // };

  // const onEnter = (e) => {
  //   if (e.keyCode === 13) {
  //     console.log("enter");
  //   }
  // };

  return (
    <div>
      <input type="text" value={newToDoTxt} onChange={ToDoInputHandler} />
      <button type="submit" onClick={addHandler}>
        Add New Item
      </button>
    </div>
  );
}
