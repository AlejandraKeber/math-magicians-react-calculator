import React from 'react';
import './Calculator.css';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      output: 0,
    };
  }

  render() {
    const { output } = this.state;
    return (
      <div className="container">
        <div className="display-container">
          <p className="output">{output}</p>
        </div>
        <div className="buttons-container">
          <div className="buttons-row">
            <button type="button" className="btn gray">AC</button>
            <button type="button" className="btn gray">+/-</button>
            <button type="button" className="btn gray">%</button>
            <button type="button" className="btn orange">/</button>
          </div>
          <div className="buttons-row">
            <button type="button" className="btn gray">7</button>
            <button type="button" className="btn gray">8</button>
            <button type="button" className="btn gray">9</button>
            <button type="button" className="btn orange">x</button>
          </div>
          <div className="buttons-row">
            <button type="button" className="btn gray">4</button>
            <button type="button" className="btn gray">5</button>
            <button type="button" className="btn gray">6</button>
            <button type="button" className="btn orange">-</button>
          </div>
          <div className="buttons-row">
            <button type="button" className="btn gray">1</button>
            <button type="button" className="btn gray">2</button>
            <button type="button" className="btn gray">3</button>
            <button type="button" className="btn orange">+</button>
          </div>
          <div className="buttons-row">
            <button type="button" className="btn gray double">0</button>
            <button type="button" className="btn gray">.</button>
            <button type="button" className="btn orange">=</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
