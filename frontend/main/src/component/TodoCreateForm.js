import React from "react";

export class TodoCreateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }

	handleChange = (event) => {
		this.setState({ text: event.target.value })
	}

	handleCreate = () => {
		const { onCreate } = this.props;
		onCreate(this.state.text);
	}

  render() {
    return (
      <div>
        <input
          type="text"
          onChange={this.handleChange}
        />
        <button onClick={this.handleCreate}> 추가하기 </button>
      </div>
    );
  }
}