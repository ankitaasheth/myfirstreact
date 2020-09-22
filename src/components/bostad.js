import React from "react";
import bostadpic from "../images/bostad-landing-page.png";

class Bostad extends React.Component {
  render() {
    return (
      <div className="col-lg-8 p-0">
        <div className="owl-item active">
          <img src={bostadpic} alt="bostad" className="img-fluid" />
        </div>
        <div className="container">
          <h2>{this.props.title}</h2>
          <h5>{this.props.desc}</h5>
          <p>{this.props.detail}</p>
        </div>
      </div>
    );
  }
}

export default Bostad;
