import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import TodoInput from "./components/TodoInput";
import TodoBox from "./components/TodoBox";
import "./index.scss";

export default function RarlaTodo(){
  const [todoList, setTodoList] = useState([]);
  
  useEffect(() => {
    getTodoList();
  }, [])
  
  useCallback(() => {
    getTodoList();
  }, [todoList]);
  
  const getTodoList = async () => {
    try { 
      const res = await axios.get("http://localhost:3000/lists");
      setTodoList(res.data);
    } catch(e) {
      console.log(e);
    }
  }
  
  return (
    <div className="rarla-todo">
      <h1>Rarla Todo</h1>
      <TodoInput todoList={todoList} setTodoList={setTodoList} />
      <TodoBox todoList={todoList} setTodoList={setTodoList}/>
    </div>
  )
}