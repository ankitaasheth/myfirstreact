import React from "react";

class Summary extends React.Component {
  render() {
    return (
      <div className="col-lg-4 py-4 card">
        <div className="container">
          <h5>SUMMARY</h5>
          <table className="table-striped">
            <tbody>
              <tr>
                <td>From</td>
                <td className="mb-0">{this.props.from}</td>
              </tr>
              <tr>
                <td>Type</td>
                <td>{this.props.type}</td>
              </tr>
            </tbody>
          </table>
          <div className="pb-5"></div>
        </div>
      </div>
    );
  }
}

export default Summary;
