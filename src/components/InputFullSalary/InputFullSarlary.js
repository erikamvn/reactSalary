import React, { Component } from "react";

export default class InputFullSarlary extends Component {
  handleInputChange = (event) => {
    const newSalary = event.target.value;

    this.props.onChangeSalary(newSalary);
  };

  render() {
    const { fullSalary } = this.props;
    return (
      <div className="row">
        <div className="input-field">
          <input
            type="number"
            value={fullSalary}
            onChange={this.handleInputChange}
          />
          <label className="active">Salário Bruto</label>
        </div>
      </div>
    );
  }
}
