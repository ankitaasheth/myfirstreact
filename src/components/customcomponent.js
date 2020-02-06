import React from "react";
// import ReactDOM from "react-dom";

class Movie extends React.Component {
  render() {
    // return <h1>Hi, I am a Piano!</h1>;
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.desc}</h2>
      </div>
    );
  }
}

export default Movie;
