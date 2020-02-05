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

  // This method should be called after component is rendered n i.e after constructor()
  componentDidMount() {
    setTimeout(() => {
      this.setState({ color: this.state.color });
    }, 1000);
  }

  shouldComponentUpdate() {
    return true; // if true, continue to rendering and if false, stop rendering. Defaukt value is true!
  }

  getSnapshotBeforeUpdate(prevProps, prevstate) {
    document.getElementById("div1").innerHTML =
      "Before update, the favorite was " + prevstate.color;
  }

  componentDidUpdate() {
    document.getElementById("div2").innerHTML =
      "The updated favorite is: " + this.state.color;
  }

  // During Mounting phase, This method should be called before rendering.
  // During Updating phase, this is the first method should be called when a component gets updated!
  // static getDerivedStateFromProps(props, state) {
  //   return { color: props.favcol };
  // }

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
        <div id="div1"></div>
        <div id="div2"></div>
      </div>
    );
  }
}

export default Printer;
