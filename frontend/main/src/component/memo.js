import React from "react";

export class Memo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: "",
      toggleChange: false,
      isDeleted: false
    };

      this.handleChange = this.handleChange.bind(this);
      this.handleRemove = this.handleRemove.bind(this);
      this.handleChangeToggle = this.handleChangeToggle.bind(this);
    }

    handleChange = (event) => {
      this.setState({ description: event.target.value })
    }

    handleChangeToggle = () => {
      this.setState({ toggleChange: !this.state.toggleChange })
    }

    handleRemove = () => {}

    componentDidMount(){
      this.setState({ description: this.props.description })
    }

    render() {
    return (
      <div>
        {
          this.state.toggleChange ? 
          <div>
            <input 
              type="text" 
              defaultValue={this.state.description} 
              onChange={this.handleChange}
            />
            <button onClick={this.handleChangeToggle}> 저장 </button>
          </div> : 
          <div>
            <span>{this.state.description}</span>
            <button onClick={this.handleChangeToggle}> 수정하기 </button>
            <button> 지우기 </button>
          </div>
        }
      </div>
    );
    }
}