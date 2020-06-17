import React, { Component } from 'react'
import Bar from '../Bar/Bar';

export default class ProgressiveBarSalary extends Component {
/*    constructor(){
        super();
        this.state = {
            percINSS: 30,
            percIRPF: 20,
            percNetSalary: 50
        }
    }*/

    render() {
     const { percINSS=0, percIRPF=0, percNetSalary=100 } = this.props;

        console.log(percNetSalary)
        return (    
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <Bar value={percINSS} color="#e67e22" />
              <Bar value={percIRPF} color="#c0392b" />
              <Bar value={percNetSalary} color="#16a085" />
            </div>
        )
    }
}
