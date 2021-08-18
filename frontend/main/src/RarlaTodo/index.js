import React, {useState} from "react";
import TodoInput from "./components/TodoInput";
import TodoBox from "./components/TodoBox";
import "./index.scss";

export default function RarlaTodo(){
  const [todoList, setTodoList] = useState([
    {index: 1, todoTitle: "list UI 만들기", complete: false},
    {index: 2, todoTitle: "list 추가 기능 만들기", complete: false},
    {index: 3, todoTitle: "list 삭제 기능 만들기", complete: false},
    {index: 4, todoTitle: "list 완료 기능 만들기", complete: false}
  ]);
  
  return (
    <div className="rarla-todo">
      <h1>Rarla Todo</h1>
      <TodoInput todoList={todoList} setTodoList={setTodoList} />
      <TodoBox todoList={todoList} setTodoList={setTodoList}/>
    </div>
  )
}