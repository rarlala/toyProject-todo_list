import React from "react";

export class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      toggleChange: false,
      isDeleted: false
    };
  }

  componentDidMount(){
    this.setState({ text: this.props.text })
  }

  handleUpdate = (event) => {
    this.setState({ 
      text: event.target.value,
      toggleChange: true
    });
  }

  handleConfirm = () => {
    this.setState({ toggleChange: false })
  }

  handleRemove = () => {
    const { id,onRemove } = this.props;
    onRemove(id);
  }

  render() {
    return (
      <div>
        {
          this.state.toggleChange ? 
          <div>
            <input 
              type="text"
              defaultValue={this.state.text} 
              onChange={this.handleUpdate}
            />
            <button onClick={this.handleConfirm}> 저장 </button>
          </div> : 
          <div>
            <span>{this.state.text}</span>
            <button onClick={this.handleUpdate}> 수정하기 </button>
            <button onClick={this.handleRemove}> 지우기 </button>
          </div>
        }
      </div>
    );
  }
}