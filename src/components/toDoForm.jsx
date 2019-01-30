import React, { Component } from "react";

class ToDoForm extends Component {
  state = {
    input: ""
  };

  add = e => {
    this.props.add(this.state.input);

    this.setState({
      input: ""
    });

    e.preventDefault();
  };

  handleChange = e => {
    this.setState({
      input: e.target.value
    });
  };

  render() {
    return (
      <React.Fragment>
        <h1>To do ({this.props.numberOfTasks})</h1>

        <form onSubmit={this.add}>
          <div className="row m-2 ">
            <div className="col-sm-8">
              <input
                onChange={this.handleChange}
                value={this.state.input}
                className="form-control"
                placeholder="What do you have to do?"
                required
              />
            </div>
            <div className="col-sm-4">
              <button className="btn btn-primary btn-md" type="submit">
                Add to list
              </button>
            </div>
          </div>
        </form>
      </React.Fragment>
    );
  }
}

export default ToDoForm;
