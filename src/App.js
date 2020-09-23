import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import AddNewItem from "./Components/AddNewItem";
import Filter from "./Components/Filter";
import { FilterState } from "./Components/FilterState";

import "./App.css";
import ToDoList from "./Components/ToDoList";

let idCounter = 15;

export default class App extends Component {
  state = {
    todoitems: [],
  };

  //adding new items:
  addHandler = (newtext) => {
    idCounter++;
    const newToDo = { id: idCounter, text: newtext, completed: false };
    const newToDoList = [...this.state.todoitems, newToDo];
    this.setState({ todoitems: newToDoList });
  };

  //filter to do items:
  getFilteredForRoute = (filter) => {
    switch (filter) {
      case FilterState.ALL:
        return this.state.todoitems;
      case FilterState.ACTIVE:
        return this.state.todoitems.filter((todo) => todo.completed === false);
      case FilterState.COMPLETED:
        return this.state.todoitems.filter((todo) => todo.completed === true);
      case FilterState.NONE:
        return [];
      default:
        return [];
    }
  };

  // filter = (fs) => {
  //   this.setState({ filter: fs });
  // };

  //delete to do items:
  deleteHandler = (id) => {
    const updatedList = this.state.todoitems.filter((todo) => todo.id !== id);
    this.setState({ todoitems: updatedList });
  };

  //check completed tasks:
  completedHandler = (id) => {
    const completedList = [...this.state.todoitems];
    const todo = completedList.find((todo) => todo.id === id);
    if (todo !== undefined && todo !== null) {
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
        <Filter />
        <br />

        <Switch>
          <Route path="/all">
            <ToDoList
              todoitems={this.getFilteredForRoute(FilterState.ALL)}
              onDelete={this.deleteHandler}
              onCompleted={this.completedHandler}
            />
          </Route>

          <Route path="/active">
            <ToDoList
              todoitems={this.getFilteredForRoute(FilterState.ACTIVE)}
              onDelete={this.deleteHandler}
              onCompleted={this.completedHandler}
            />
          </Route>

          <Route path="/completed">
            <ToDoList
              todoitems={this.getFilteredForRoute(FilterState.COMPLETED)}
              onDelete={this.deleteHandler}
              onCompleted={this.completedHandler}
            />
          </Route>

          <Route path="/none">
            <ToDoList
              todoitems={this.getFilteredForRoute(FilterState.NONE)}
              onDelete={this.deleteHandler}
              onCompleted={this.completedHandler}
            />
          </Route>
        </Switch>
        <button onClick={this.clearCompletedHandler}>Clear Completed</button>
      </div>
    );
  }
}
