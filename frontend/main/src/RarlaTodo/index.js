import React, {useState} from "react";
import TodoInput from "./components/TodoInput";
import "./index.scss";

export default function RarlaTodo(){
  
  const [todoList, setTodoList] = useState([
    {index: 1, todoTitle: "list UI 만들기", complete: false},
    {index: 2, todoTitle: "list 추가 기능 만들기", complete: false},
    {index: 3, todoTitle: "list 삭제 기능 만들기", complete: false},
    {index: 4, todoTitle: "list 완료 기능 만들기", complete: false}
  ]);
  

  
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
    <div className="rarla-todo">
      <h1>Rarla Todo</h1>
      
     <TodoInput todoList={todoList} setTodoList={setTodoList} />
      
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
    </div>
  )
}