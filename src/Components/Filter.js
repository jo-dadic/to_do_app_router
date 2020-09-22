import React, { Component } from "react";

import { FilterState } from "./FilterState";

export default class Filter extends Component {
  constructor(props) {
    super(props);

    this.basicStyle = { color: "" };
  }

  onFilterChange = (fs) => {
    this.props.onFilter(fs);
  };

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
        <span
          onClick={() => this.onFilterChange(FilterState.ALL)}
          style={this.getStyle(FilterState.ALL)}
        >
          All
        </span>
        <span
          onClick={() => this.onFilterChange(FilterState.ACTIVE)}
          style={this.getStyle(FilterState.ACTIVE)}
        >
          Active
        </span>
        <span
          onClick={() => this.onFilterChange(FilterState.COMPLETED)}
          style={this.getStyle(FilterState.COMPLETED)}
        >
          Completed
        </span>
        <span
          onClick={() => this.onFilterChange(FilterState.NONE)}
          style={this.getStyle(FilterState.NONE)}
        >
          None
        </span>
      </p>
    );
  }
}
