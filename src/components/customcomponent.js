import React from "react";
// import ReactDOM from "react-dom";

class Piano extends React.Component {
  render() {
    // return <h1>Hi, I am a Piano!</h1>;
    return <h1>Hi, I am a {this.props.color} Piano!</h1>;
  }
}

export default Piano;
