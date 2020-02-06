import React from "react";

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { checked: false };
  }

  toggle = () => {
    this.setState({ checked: !this.state.checked });
  };

  render() {
    var msg;
    if (this.state.checked) {
      msg = "checked";
    } else {
      msg = "unchecked";
    }
    return (
      <div>
        <input
          type="checkbox"
          defaultChecked={this.state.checked}
          onChange={this.toggle}
        />
        <h3>Checkbox is {msg}</h3>
      </div>
    );
  }
}

export default Toggle;
