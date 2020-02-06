import React from "react";

class Notes extends React.Component {
  edit = () => {
    alert("Editing comment");
  };
  remove = () => {
    alert("Removing comment");
  };
  render() {
    return (
      <div className="App-header">
        <div>Comments for {this.props.children}</div>
        <button onClick={this.edit}>Edit</button>
        <button onClick={this.remove}>Remove</button>
      </div>
    );
  }
}

export default Notes;
