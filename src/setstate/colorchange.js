import React, { Component } from "react";

class TextChange extends Component {
  state = {
    message1: "Text changed",
    isChanged: false,
    message2: "Text not changed",
  };

  handleTextChange = () => {
    this.setState(
      {
        message1: "Text changed",
        isChanged: !this.state.isChanged,
      },
      () => {}
    );
  };

  render() {
    return (
      <>
        <button className="button" onClick={this.handleTextChange}>
          {this.state.isChanged ? this.state.message2 : this.state.message1}
        </button>
        <br />
        <br />
        <h2 style={{ color: this.state.isChanged ? 'green' : 'red' }}>
          {this.state.isChanged ? 'It changed to green color in React' : 'Welcome color change in React'}
        </h2>
      </>
    );
  }
}

export default TextChange;
