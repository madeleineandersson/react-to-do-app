import React, { Component } from "react";
class completedItems extends Component {
  state = {};

  undoCompleted(key) {
    this.props.undoCompleted(key);
  }

  deleteCompleted() {
    this.props.deleteCompleted();
  }

  render() {
    return (
      <React.Fragment>
        <h2>Completed</h2>
        <button
          onClick={() => this.deleteCompleted()}
          type="button"
          className={
            "btn " +
            (this.props.completed.length > 0
              ? "btn-primary"
              : "btn-outline-primary")
          }
        >
          Remove all completed tasks
        </button>
        <ul>
          {this.props.completed.map(item => (
            <li key={item.key} className="list-group-item">
              <button
                onClick={() => this.undoCompleted(item.key)}
                type="button"
                className="btn btn-outline-dark"
              >
                Undo
              </button>
              {item.text}
            </li>
          ))}
        </ul>
      </React.Fragment>
    );
  }
}

export default completedItems;
