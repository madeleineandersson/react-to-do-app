import React, { Component } from "react";

class FilterToDoItems extends Component {
  state = {};

  all() {
    this.props.all();
  }

  active() {
    this.props.active();
  }

  completed() {
    this.props.completed();
  }

  render() {
    return (
      <p className="center-block">
        <button
          onClick={() => this.all()}
          type="button"
          className={
            "btn " +
            (this.props.showToDo && this.props.showCompleted
              ? "btn-primary"
              : "btn-outline-primary")
          }
        >
          Show all
        </button>
        <button
          onClick={() => this.active()}
          type="button"
          className={
            "btn " +
            (this.props.showToDo ? "btn-primary" : "btn-outline-primary")
          }
        >
          Show active
        </button>
        <button
          onClick={() => this.completed()}
          type="button"
          className={
            "btn " +
            (this.props.showCompleted ? "btn-primary" : "btn-outline-primary")
          }
        >
          Show completed
        </button>
      </p>
    );
  }
}

export default FilterToDoItems;
