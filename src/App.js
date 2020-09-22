import React, { Component } from "react";

import AddNewItem from "./Components/AddNewItem";
import ToDoItem from "./Components/ToDoItem";
import Filter from "./Components/Filter";
import { FilterState } from "./Components/FilterState";

import "./App.css";

let idCounter = 15;

export default class App extends Component {
  state = {
    todoitems: [],
    filter: FilterState.ALL,
  };

  //adding new items:
  addHandler = (newtext) => {
    idCounter++;
    const newToDo = { id: idCounter, text: newtext, completed: false };
    const newToDoList = [...this.state.todoitems, newToDo];
    this.setState({ todoitems: newToDoList });
  };

  //filter to do items:
  getFiltered = () => {
    switch (this.state.filter) {
      case FilterState.ACTIVE:
        return this.state.todoitems.filter((todo) => todo.completed === false);
      case FilterState.COMPLETED:
        return this.state.todoitems.filter((todo) => todo.completed === true);
      case FilterState.NONE:
        return [];
      default:
        return this.state.todoitems;
    }
  };

  filter = (fs) => {
    this.setState({ filter: fs });
  };

  //delete to do items:
  deleteHandler = (id) => {
    const updatedList = this.state.todoitems.filter((todo) => todo.id !== id);
    this.setState({ todoitems: updatedList });
  };

  //check completed tasks:
  completedHandler = (id) => {
    const completedList = [...this.state.todoitems];
    const todo = completedList.find((todo) => todo.id === id);
    if (todo) {
      todo.completed = !todo.completed;
      this.setState({ todoitems: completedList });
    }
  };

  //clear completed tasks:
  clearCompletedHandler = () => {
    const clearedList = this.state.todoitems.filter(
      (todo) => todo.completed === false
    );
    this.setState({ todoitems: clearedList });
  };

  render() {
    return (
      <div className="App">
        <h1>To Do App</h1>
        <AddNewItem onAdd={this.addHandler} />
        <Filter currentFilter={this.state.filter} onFilter={this.filter} />
        <br />
        {this.getFiltered().map((todo) => {
          return (
            <ToDoItem
              key={todo.id}
              todo={todo}
              onDelete={this.deleteHandler}
              onCompleted={this.completedHandler}
            />
          );
        })}
        <button onClick={this.clearCompletedHandler}>Clear Completed</button>
      </div>
    );
  }
}
