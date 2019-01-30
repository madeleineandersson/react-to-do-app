import React, { Component } from "react";
import ToDoForm from "./components/toDoForm";
import TodoItems from "./components/toDoItems";
import CompletedItems from "./components/completedItems";
import FilterTodoItems from "./components/filterToDoItems";
import "./App.css";

class App extends Component {
  state = {
    items: [],
    completedItems: [],
    toDoItemsVisible: true,
    completedVisible: true
  };

  addTask = input => {
    let newTask = {
      key: Date.now(),
      text: input
    };

    this.setState(prevState => {
      return {
        items: prevState.items.concat(newTask)
      };
    });
  };

  deleteTask = key => {
    let filteredItems = this.getOtherTasks(key);

    this.setState({
      items: filteredItems
    });
  };

  completeTask = key => {
    let completedItem = this.getTask(key);
    let filteredItems = this.getOtherTasks(key);

    this.setState(prevState => {
      return {
        completedItems: prevState.completedItems.concat(completedItem),
        items: filteredItems
      };
    });
  };

  undoCompletedTask = key => {
    let notCompletedItem = this.state.completedItems.filter(function(item) {
      return item.key === key;
    });
    let filteredItems = this.state.completedItems.filter(function(item) {
      return item.key !== key;
    });

    this.setState(prevState => {
      return {
        items: prevState.items.concat(notCompletedItem),
        completedItems: filteredItems
      };
    });
  };

  getTask(key) {
    return this.state.items.filter(function(item) {
      return item.key === key;
    });
  }

  getOtherTasks(key) {
    return this.state.items.filter(function(item) {
      return item.key !== key;
    });
  }

  deleteCompletedTasks = () => {
    this.setState({
      completedItems: []
    });
  };

  deleteActiveTasks = () => {
    this.setState({
      items: []
    });
  };

  showAllTasks = () => {
    this.setState(prevState => ({
      toDoItemsVisible: (prevState.toDoItemsVisible = true),
      completedVisible: (prevState.completedVisible = true)
    }));
  };

  showActiveTasks = () => {
    this.setState(prevState => ({
      toDoItemsVisible: (prevState.toDoItemsVisible = true),
      completedVisible: (prevState.completedVisible = false)
    }));
  };

  showCompletedTasks = () => {
    this.setState(prevState => ({
      completedVisible: (prevState.completedVisible = true),
      toDoItemsVisible: (prevState.toDoItemsVisible = false)
    }));
  };

  render() {
    return (
      <main className="to-do-list border border-primary">
        <ToDoForm add={this.addTask} numberOfTasks={this.state.items.length} />
        <FilterTodoItems
          all={this.showAllTasks}
          active={this.showActiveTasks}
          completed={this.showCompletedTasks}
          showToDo={this.state.toDoItemsVisible}
          showCompleted={this.state.completedVisible}
        />
        {this.state.toDoItemsVisible ? (
          <TodoItems
            tasks={this.state.items}
            status={this.state.items.finished}
            delete={this.deleteTask}
            complete={this.completeTask}
            deleteAll={this.deleteActiveTasks}
          />
        ) : null}
        {this.state.completedVisible ? (
          <CompletedItems
            completed={this.state.completedItems}
            undoCompleted={this.undoCompletedTask}
            deleteCompleted={this.deleteCompletedTasks}
          />
        ) : null}
      </main>
    );
  }
}

export default App;
