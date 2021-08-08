import React from "react";
import TodoList from "../TodoList";
import "./index.scss";

export default function TodoBox(props) {
  const { todoList, setTodoList } = props;
  
  return (
    <div className="todo-box">
      <TodoList todoList={todoList} setTodoList={setTodoList}/>
    </div>
  )
}