import React, { Component } from "react";
import { Link } from "react-router-dom";

import { FilterState } from "./FilterState";

export default class Filter extends Component {
  constructor(props) {
    super(props);

    this.basicStyle = { color: "" };
  }

  // onFilterChange = (fs) => {
  //   this.props.onFilter(fs);
  // };

  // style for filters:
  getStyle = (styleAsked) => {
    if (styleAsked === this.props.currentFilter) {
      return { color: "#ff6347" };
    } else {
      return { color: "#00bfff" };
    }
  };

  render() {
    return (
      <p className="filter">
        <Link to="./all">
          <span style={this.getStyle(FilterState.ALL)}>All</span>
        </Link>

        <Link to="./active">
          <span style={this.getStyle(FilterState.ACTIVE)}>Active</span>
        </Link>

        <Link to="./completed">
          <span style={this.getStyle(FilterState.COMPLETED)}>Completed</span>
        </Link>
        <span style={this.getStyle(FilterState.NONE)}>None</span>
      </p>
    );
  }
}
