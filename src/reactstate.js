import React from "react";

class Printer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: "HP",
      color: "white",
      year: "2010"
    };
  }
  changeColor = () => {
    this.setState({ color: "red" });
  };
  render() {
    return (
      <div>
        <p>
          This is new {this.state.color} Printer from {this.state.year}!
        </p>
        <button type="button" onClick={this.changeColor}>
          Change Color
        </button>
      </div>
    );
  }
}

export default Printer;
