import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import logo from "./logo.svg";
// import App from "./App";
// import * as serviceWorker from "./serviceWorker";

// this first app is all about how to render an element into DOM using JSX

function formatName(user) {
  return user.firstname + " " + user.lastname;
}

function getGreeting(username) {
  if (username) {
    return <h1>Hello, {username}!</h1>;
  }
  return <h1>Hello, Stranger!</h1>;
}

/*function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById("root"));
}*/
//setInterval(tick, 1000);

function randomVal() {
  return Math.floor(Math.random() * 100);
}

// Generally React elements are immutable. Once you create you can't change,
// there is only one way to update UI is to create a new elemnt and pass it to ReactDOM.Render() like this setInterval() function.
// It calls ReactDOM.render() every second from a setInterval() callback.

// if you want to load App.js content
// ReactDOM.render(<App />, document.getElementById("root"));

// if you want to load index.html content
const myfirstelement = <h1>Hello React!</h1>;

const name = "Ankita Sheth";
const mysecondelement = <h2>Hello, {name}!</h2>;

const user = {
  firstname: "Ankita",
  lastname: "Sheth"
};

const mythirdelement = (
  <h1>
    Hello,
    {formatName(user)}!
  </h1>
);

const username = ""; // "Ankita Sheth"
const myfourthelement = <h1>{getGreeting(username)}</h1>;

const myfifthelement = (
  <div className="App">
    <h1>Welcome to React World!</h1>
    <h2>Good to see you!</h2>
    <img src={logo} alt="Logo" className="App-logo"></img>
  </div>
);

const mysixthelement = (
  <div>
    <h1>Random number is: {randomVal()}</h1>
  </div>
);

ReactDOM.render(myfirstelement, document.getElementById("root"));
ReactDOM.render(mysecondelement, document.getElementById("root"));
ReactDOM.render(mythirdelement, document.getElementById("root"));
ReactDOM.render(myfourthelement, document.getElementById("root"));
ReactDOM.render(myfifthelement, document.getElementById("root"));
ReactDOM.render(mysixthelement, document.getElementById("root"));

const myelement = (
  <table>
    <tr>
      <th>Name</th>
    </tr>
    <tr>
      <td>Ankita</td>
    </tr>
    <tr>
      <td>John</td>
    </tr>
    <ul>
      <li>Apples</li>
      <li>Bananas</li>
    </ul>
  </table>
);
ReactDOM.render(myelement, document.getElementById("root"));

// ReactDOM.render(<h1>Hello React!</h1>, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

// Class component
class Baloon extends React.Component {
  render() {
    return <h2>Hi, Baloon!</h2>;
  }
}

ReactDOM.render(<Baloon />, document.getElementById("root"));

// Function component
function Car() {
  return <h2>Hi, Car!</h2>;
}

ReactDOM.render(<Car />, document.getElementById("root"));

// Component Constructor
class Bike extends React.Component {
  constructor() {
    super();
    this.state = { color: "black" };
  }
  render() {
    return <h2>Hi, I am a {this.state.color} Bike!</h2>;
  }
}

ReactDOM.render(<Bike />, document.getElementById("root"));

// React properties (props)
class Cycle extends React.Component {
  render() {
    return <h2>Hi, I am a {this.props.color} Cycle!</h2>;
  }
}

ReactDOM.render(<Cycle color="black" />, document.getElementById("root"));
