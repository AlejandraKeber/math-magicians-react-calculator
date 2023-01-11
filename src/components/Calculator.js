import React from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: '0',
      next: null,
      operation: null,
    };
  }

  handleClick = (event) => {
    this.setState((state) => calculate(state, event.target.name));
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="container">
        <div className="output">
          <p>{next || operation || total}</p>
        </div>
        <div className="buttons-container">
          <div className="buttons-row">
            <button type="button" className="btn gray" name="AC" onClick={this.handleClick}>AC</button>
            <button type="button" className="btn gray" name="+/-" onClick={this.handleClick}>+/-</button>
            <button type="button" className="btn gray" name="%" onClick={this.handleClick}>%</button>
            <button type="button" className="btn orange" name="÷" onClick={this.handleClick}>÷</button>
          </div>
          <div className="buttons-row">
            <button type="button" className="btn gray" name="7" onClick={this.handleClick}>7</button>
            <button type="button" className="btn gray" name="8" onClick={this.handleClick}>8</button>
            <button type="button" className="btn gray" name="9" onClick={this.handleClick}>9</button>
            <button type="button" className="btn orange" name="x" onClick={this.handleClick}>x</button>
          </div>
          <div className="buttons-row">
            <button type="button" className="btn gray" name="4" onClick={this.handleClick}>4</button>
            <button type="button" className="btn gray" name="5" onClick={this.handleClick}>5</button>
            <button type="button" className="btn gray" name="6" onClick={this.handleClick}>6</button>
            <button type="button" className="btn orange" name="-" onClick={this.handleClick}>-</button>
          </div>
          <div className="buttons-row">
            <button type="button" className="btn gray" name="1" onClick={this.handleClick}>1</button>
            <button type="button" className="btn gray" name="2" onClick={this.handleClick}>2</button>
            <button type="button" className="btn gray" name="3" onClick={this.handleClick}>3</button>
            <button type="button" className="btn orange" name="+" onClick={this.handleClick}>+</button>
          </div>
          <div className="buttons-row">
            <button type="button" className="btn gray double" name="0" onClick={this.handleClick}>0</button>
            <button type="button" className="btn gray" name="." onClick={this.handleClick}>.</button>
            <button type="button" className="btn orange" name="=" onClick={this.handleClick}>=</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
