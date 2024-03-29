import React from "react";
import TodoItem from "../TodoItem";
import "./index.scss";

export default function TodoList(props) {
  const { todoList, setTodoList } = props;
  
  const onClickComplete = (index) => {
    const newTodoList = todoList.map((todo) => todo.index === index ? {...todo, complete: !todo.complete} : todo);
    setTodoList(newTodoList);
  }
  
  const onClickRemove = (index) => {
    setTodoList(todoList.filter((list) => list.index !== index));
  }
  
  const onClickEdit = (index, title) => {
    const editData = window.prompt("수정하세요", title);
    if (editData && editData !== title) {
      const newTodoList = todoList.map((todo) => todo.index === index ? {...todo, todoTitle: editData} : todo);
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