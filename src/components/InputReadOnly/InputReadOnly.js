import React, { Component } from "react";

export default class InputReadOnly extends Component {
  render() {
    const { textValue, textLabel, color="black" } = this.props;

    return (
      <div className="row">
        <div className="input-field ">
          <input
            disabled
            value={textValue}
            id="disabled"
            type="text"
            style={{
              fontWeight: "bold",
              color: color
            }}
          />
          <label className="active">{textLabel}</label>
        </div>
      </div>
    );
  }
}
