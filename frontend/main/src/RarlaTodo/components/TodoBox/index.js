import React from "react";
import "./index.scss";

export default function TodoBox(props) {
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
  
  return (
    <div className="todo-box">
      <ul>
        {todoList.reverse().map(( todo, i ) => {
          return (
            <li key={i}>
              <span className={todo.complete && "completeTitle"}>{todo.index}. {todo.todoTitle}</span>
              <div>
                <button onClick={() => onClickComplete(todo.index)}>{todo.complete ? "완료" : "미완료"}</button>
                <button onClick={()=> onClickEdit(todo.index, todo.todoTitle)}>수정</button>
                <button onClick={() => onClickRemove(todo.index)}>삭제</button>
              </div>
            </li>
          )
        }) }
      </ul>
    </div>
  )
}