import React from "react";
import { TodoCreateForm } from "./component/TodoCreateForm";
import { TodoList }  from "./component/TodoList";

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      todoList: [
        {id: 1, text: "빨래하기"},
        {id: 2, text: "청소하기"},
        {id: 3, text: "설거지하기"},
        {id: 4, text: "코테 준비하기"},
        {id: 5, text: "돈모으기"}
      ]
    }
  }

  handleCreate = (data) => {
    const { todoList } = this.state;
    this.setState({
      todoList: todoList.concat({
        id: this.id++,
        text: data
      })
    })
  };

  handleRemove = (id) => {
    const { todoList } = this.state;
    this.setState({
      todoList: todoList.filter(todo => todo.id !== id)
    })
  };

  render() {
    const { todoList } = this.state;
    return (
      <div className="App">
        <TodoCreateForm onCreate={this.handleCreate}/>
        <TodoList data={todoList} onRemove={this.handleRemove}/>
      </div>
    );
  }
}

export default App;
