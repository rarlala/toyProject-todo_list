import React, { useState } from "react";
import "./index.scss";

export default function TodoInput(props){
  const { todoList, setTodoList } = props;
  const [ data, setData ] = useState();
  
  const onChangeInput = (data) => {
    setData(data);
  }
  
  return (
    <input
      type="text" 
      className="todo-input" 
      value={data}
      placeholder="할 일 입력 후 Enter"
      onChange={(e) => onChangeInput(e.target.value)}
      onKeyUp={(e) => {
        e.key === "Enter" && 
          setTodoList(
            [{ index: todoList.length + 1, todoTitle: data, complete: false}, ...todoList],
            setData('')
          )
      }}
    />
  )
}