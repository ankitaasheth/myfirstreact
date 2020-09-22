import React from "react";
// import ReactDOM from "react-dom";

class Movie extends React.Component {
  render() {
    // return <h1>Hi, I am a Piano!</h1>;
    return (
      <div>
        <h2>{this.props.title}</h2>
        <h3>{this.props.desc}</h3>
      </div>
    );
  }
}

export default Movie;
