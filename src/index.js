import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import logo from "./logo.svg";
import Movie from "./components/customcomponent.js"; // use custom component from other file
import Printer from "./components/reactstate.js"; // component contains eg of React State
import Notes from "./components/reactevents.js"; // component explaining react event handling
import Toggle from "./components/toggle.js"; // component for react state

// import App from "./App";
// import * as serviceWorker from "./serviceWorker";

// this first app is all about how to render an element into DOM using JSX

function formatName(user) {
  return user.firstname + " " + user.lastname;
}

function getGreeting(username) {
  if (username) {
    return (
      <div>
        <h1>Hello, {username}!</h1>
      </div>
    );
  }
  return (
    <div>
      <h1>Hello, Stranger!</h1>
    </div>
  );
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
const myfirstelement = (
  <div>
    <h1>Hello React!</h1>
  </div>
);

const name = "Ankita Sheth";
const mysecondelement = (
  <div>
    <h2>Hello, {name}!</h2>
  </div>
);

const user = {
  firstname: "Ankita",
  lastname: "Sheth"
};

const mythirdelement = (
  <div>
    <h3>
      Hello,
      {formatName(user)}!
    </h3>
  </div>
);

const username = ""; // "Ankita Sheth"
const myfourthelement = <div>{getGreeting(username)}</div>;

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
  <div>
    <table>
      <tbody>
        <tr>
          <th>Name</th>
        </tr>
        <tr>
          <td>Ankita</td>
        </tr>
        <tr>
          <td>John</td>
        </tr>
      </tbody>
    </table>
    <ul>
      <li>Apples</li>
      <li>Bananas</li>
    </ul>
  </div>
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

// Components in component
class Parking extends React.Component {
  render() {
    return (
      <div>
        <h1>Which vehicles are parked in this area?</h1>
        <Cycle />
      </div>
    );
  }
}

ReactDOM.render(<Parking />, document.getElementById("root"));

// Components in Files
ReactDOM.render(<Movie />, document.getElementById("root"));

// React Props
ReactDOM.render(
  <Movie title="Rang de Basanti" />,
  document.getElementById("root")
);

// Calling custom components by variable instead of by string as attribute: color={colorname} instead color="White"
class Kittyhouse extends React.Component {
  render() {
    const moviename = "Black"; // variable moviename
    return (
      <div>
        <h1>Who lives in my Kitty house?</h1>
        <Movie title={moviename} />
      </div>
    );
  }
}

ReactDOM.render(<Kittyhouse />, document.getElementById("root"));

// Calling custom component by calling an object
class Audicar extends React.Component {
  render() {
    return <h1>Hi, I am {this.props.brand.model} car!</h1>;
  }
}

class Garage extends React.Component {
  render() {
    const carinfo = { name: "Audi", model: "Audi A6 allroad quattro" }; // object carinfo
    return (
      <div>
        <h1>Whol lives in this Garage?</h1>
        <Audicar brand={carinfo} />
      </div>
    );
  }
}

ReactDOM.render(<Garage />, document.getElementById("root"));

// Passing props to the constructor via super() method
// class Fordcar extends React.Component {
//   constructor(props) {
//     super();
//   }

//   render() {
//     return <h2>I am {this.props.model} Car!</h2>;
//   }
// }

// ReactDOM.render(<Fordcar model="Mustang" />, document.getElementById("root"));

// React state
// ReactDOM.render(<Printer />, document.getElementById("root"));

// Updating react state via getDerivedStateFromProps
// ReactDOM.render(<Printer favcol="yellow" />, document.getElementById("root"));

// To render multiple components in one, need to add one parent element div as below
ReactDOM.render(
  <div>
    <Movie title="Half Girlfriend" desc="romantic" />
    <Movie title="Avatar" desc="action" />
    <Movie title="Badla" desc="bollywood" />
    <Printer />
    <Notes>Ankita</Notes>
    <Notes>Anas</Notes>
    <Notes>Marcus</Notes>
    <Toggle />
  </div>,
  document.getElementById("root")
);
