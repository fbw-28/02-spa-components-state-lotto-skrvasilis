import React, { Component } from "react";
import "./RandomNum.css";

export default class RandomNum extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numbers: [2, 8, 10, 12, 4, 5],
      number7: 9,
      visibility: "none",
    };
  }

  numbers49 = () => {
    let numbersArray = []
    for (let i = 0; i < this.state.numbers.length; i++) {
    
      let number = Math.ceil(Math.random() * 49);
      while (numbersArray.includes(number)){
        number = Math.ceil(Math.random() * 49);
      }
      numbersArray.push(number)
    }

    this.setState({
      numbers : numbersArray,
      number7 : Math.floor(Math.random()*10+1),
      visibility: 'flex'
    })

  };
  changeDisplay = () => {
    this.setState({
      visibility: "none",
    });
  };
  render() {
    return (
      <div>
        <div
          className="numbers"
          style={{ display: `${this.state.visibility}` }}
        >
         {this.state.numbers.map(item=>{
           return (
             <p>{item}</p>
           )
         })}
         <p>{this.state.number7}</p>
        </div>
        <div className="buttons">
          <button onClick={this.changeDisplay}>reset</button>
          <button onClick={this.numbers49}>Show me lucky numbers</button>
        </div>
      </div>
    );
  }
}
