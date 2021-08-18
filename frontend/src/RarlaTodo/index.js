import React, { useState, useEffect } from "react";
import axios from "axios";
import TodoInput from "./components/TodoInput";
import TodoBox from "./components/TodoBox";
import "./index.scss";

export default function RarlaTodo(){
  const [todoList, setTodoList] = useState([]);
  // const [todoList, setTodoList] = useState([
  //   {index: 1, todoTitle: "list UI 만들기", complete: false},
  //   {index: 2, todoTitle: "list 추가 기능 만들기", complete: false},
  //   {index: 3, todoTitle: "list 삭제 기능 만들기", complete: false},
  //   {index: 4, todoTitle: "list 완료 기능 만들기", complete: false}
  // ]);
  
  useEffect(() => {
    const fetchData = async () => {
      try { 
        const res = await axios.get("http://localhost:3000/lists");
        setTodoList(res.data);
      } catch(e) {
        console.log(e);
      }
    }
    fetchData();
  }, [])
  
  return (
    <div className="rarla-todo">
      <h1>Rarla Todo</h1>
      <TodoInput todoList={todoList} setTodoList={setTodoList} />
      <TodoBox todoList={todoList} setTodoList={setTodoList}/>
    </div>
  )
}