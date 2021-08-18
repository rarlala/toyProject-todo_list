import React from "react";
import axios from "axios";
import TodoItem from "../TodoItem";
import "./index.scss";

export default function TodoList(props) {
  const { todoList, setTodoList } = props;
  
  const onClickComplete = (index) => {
    const newTodoList = todoList.map((todo) => todo.index === index ? {...todo, complete: !todo.complete} : todo);
    setTodoList(newTodoList);
  }
  
  const onClickRemove = async (id) => {
    await axios.delete(`http://localhost:3000/list/${id}`);
    setTodoList(todoList.filter((list) => list.id !== id));
  }
  
  const onClickEdit = async (id, description) => {
    const editData = window.prompt("수정하세요", description);
    if (editData && editData !== description) {
      await axios.put(`http://localhost:3000/list/${id}`, { description : editData });
      const newTodoList = todoList.map((todo) => todo.id === id ? {...todo, description: editData} : todo);
      setTodoList(newTodoList);
    }
  }

  return(
    <ul>
      {todoList.map(( todo, i ) => {
        return (
          <TodoItem
            key={i}
            todo={todo}
            onClickComplete={onClickComplete}
            onClickRemove={onClickRemove}
            onClickEdit={onClickEdit}
          />
        )
      }) }
    </ul>
  )
}