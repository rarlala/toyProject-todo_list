import React, { useState } from "react";
import axios from "axios";
import "./index.scss";

export default function TodoInput(props){
  const { todoList, setTodoList } = props;
  const [ data, setData ] = useState('');
  
  const onChangeInput = (e) => {
    setData(e.target.value);
  }
  
  const onSubmit = async (e) => {
    if (e.key === 'Enter'){
      const res = await axios.post('http://localhost:3000/list', { description: data });
      setTodoList([...todoList, res.data]);
      setData('');
    }
  }
  
  return (
    <input
      type="text" 
      className="todo-input" 
      value={data}
      placeholder="할 일 입력 후 Enter"
      onChange={onChangeInput}
      onKeyUp={onSubmit}
    />
  )
}