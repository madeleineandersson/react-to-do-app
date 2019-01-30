import React, { Component } from "react";

class ToDoItems extends Component {
  delete(key) {
    this.props.delete(key);
  }

  complete(key) {
    this.props.complete(key);
  }

  deleteAll() {
    this.props.deleteAll();
  }

  render() {
    return (
      <React.Fragment>
        <h2>Active</h2>
        <button
          onClick={() => this.deleteAll()}
          type="button"
          className={
            "btn " +
            (this.props.tasks.length > 0
              ? "btn-primary"
              : "btn-outline-primary")
          }
        >
          Remove all active tasks
        </button>
        <ul>
          {this.props.tasks.map(item => (
            <li
              key={item.key}
              className={
                "list-group-item " +
                (this.status ? "text-capitalize" : "text-underline")
              }
            >
              <button
                onClick={() => this.complete(item.key)}
                type="button"
                className="btn btn-outline-success"
              >
                Complete
              </button>
              <button
                onClick={() => this.delete(item.key)}
                type="button"
                className="btn btn-outline-danger"
              >
                Remove
              </button>
              {item.text}
            </li>
          ))}
        </ul>
      </React.Fragment>
    );
  }
}

export default ToDoItems;
