import React from "react";
import "./index.scss";

export default function TodoItem(props) {
  const { todo, onClickComplete, onClickRemove, onClickEdit } = props;
  
  return (
    <li>
      <span className={todo.complete ? "completeTitle" : ""}>{todo.index}. {todo.todoTitle}</span>
      <div>
        <button onClick={() => onClickComplete(todo.index)}>{todo.complete ? "완료" : "미완료"}</button>
        <button onClick={()=> onClickEdit(todo.index, todo.todoTitle)}>수정</button>
        <button onClick={() => onClickRemove(todo.index)}>삭제</button>
      </div>
    </li>
  )
}