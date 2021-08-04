import React from "react";
import { Todo } from "./Todo";

export class TodoList extends React.Component {
  constructor(props){
  super(props);
  }

  render() {
  const { data, onRemove } = this.props;

  return (
    <div>
      {data.map(info => {
        return (
          <Todo id={info.id} text={info.text} onRemove={onRemove}/>
        )
      })}
    </div>
  )
  }
}