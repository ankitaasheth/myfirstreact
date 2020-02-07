import React from "react";

class Notes extends React.Component {
  constructor(props) {
    super(props);
    this.state = { editing: false };
  }
  edit = () => {
    //alert("Editing comment");
    this.setState({ editing: true });
  };
  remove = () => {
    console.log("Removing comment");
  };
  save = () => {
    var val = this.refs.newText.value;
    alert(val);
    console.log(val);
    this.setState({ editing: false });
  };
  renderNormal = () => {
    return (
      <div className="App-header">
        <div>Comments for {this.props.children}</div>
        <button onClick={this.edit}>Edit</button>
        <button onClick={this.remove}>Remove</button>
      </div>
    );
  };
  renderForm = () => {
    return (
      <div className="App-header">
        <textarea ref="newText" defaultValue={this.props.children}></textarea>
        <button onClick={this.save}>Save</button>
      </div>
    );
  };

  render() {
    if (this.state.editing) {
      return this.renderForm();
    } else {
      return this.renderNormal();
    }
  }
}

export default Notes;
