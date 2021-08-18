import React from "react";
import "./index.scss";

export default function TodoItem(props) {
  const { todo, onClickComplete, onClickRemove, onClickEdit } = props;
  
  return (
    <li>
      <span className={todo.complete ? "completeTitle" : ""}>{todo.id}. {todo.description}</span>
      <div>
        <button onClick={() => onClickComplete(todo.index)}>{todo.complete ? "완료" : "미완료"}</button>
        <button onClick={()=> onClickEdit(todo.id, todo.description)}>수정</button>
        <button onClick={() => onClickRemove(todo.id)}>삭제</button>
      </div>
    </li>
  )
}