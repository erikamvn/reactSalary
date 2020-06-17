import React, { Component } from 'react';
import InputFullSarlary from './components/InputFullSalary/InputFullSarlary';
import InputReadOnly from './components/InputReadOnly/InputReadOnly';
import ProgressiveBarSalary from './components/ProgressiveBarSalary/ProgressiveBarSalary';
import {formatCurrency, formatPerc} from './Helpers/helpers';
import {calculateSalaryFrom} from './Helpers/salary';

export default class App extends Component {

  constructor(){
    super();
    this.state = {
      fullSalary: '',
    }
  }

  handleChangeSalary = (newSalary) =>{

    this.setState({
      fullSalary: newSalary,
    });

  }

  render() {

    const { fullSalary } = this.state;

    const calculetedSalary = calculateSalaryFrom(fullSalary);
    const { baseINSS, discountINSS, baseIRPF, discountIRPF, netSalary } = calculetedSalary;

    let formatedInss = '';
    let formatedIRPF = '';
    let formatedNetSlary = '';

    

      const percINSS = discountINSS !== 0 ? (discountINSS / fullSalary * 100) : 0;

      console.log(discountIRPF)
      const percIRPF = discountIRPF !== 0 ? (discountIRPF / fullSalary * 100) : 0;
      const percNetSalary = netSalary !== 0 ? (netSalary / fullSalary * 100) : 100;
      
      formatedInss = `${formatCurrency(discountINSS)}  (${formatPerc(percINSS)})`;
      formatedIRPF = `${formatCurrency(discountIRPF)}  (${formatPerc(percIRPF)})`;
      formatedNetSlary = `${formatCurrency(netSalary)}  (${formatPerc(percNetSalary)})`;

  
      console.log(percINSS)
 
    return (
    <div className="container">
      <h1 style={{textAlign:"center", marginBottom: "50px"}}>React Salary</h1>
      <InputFullSarlary onChangeSalary={this.handleChangeSalary} fullSalary={fullSalary}/>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <InputReadOnly textValue={formatCurrency(baseINSS)} textLabel="Base INSS"/>
        <InputReadOnly textValue={formatedInss} textLabel="Desconto INSS" color="#e67e22"/>
        <InputReadOnly textValue={formatCurrency(baseIRPF)} textLabel="Base IRPF"/>
        <InputReadOnly textValue={formatedIRPF} textLabel="Desconto IRPF" color="#c0392b"/>
        <InputReadOnly textValue={formatedNetSlary} textLabel="Salário Liquido" color="#16a085"/>
      </div>
      
      <ProgressiveBarSalary percINSS={percINSS} percIRPF={percIRPF} percNetSalary={percNetSalary} />
    </div>);
  }
}
