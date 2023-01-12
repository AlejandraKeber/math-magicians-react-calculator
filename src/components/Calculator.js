import React, { useState } from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setState] = useState({ total: '0', next: null, operation: null });

  const handleClick = (event) => {
    setState(calculate(state, event.target.name));
  };

  const { total, next, operation } = state;
  return (
    <div className="container">
      <div className="output">
        <p>{next || operation || total}</p>
      </div>
      <div className="buttons-container">
        <div className="buttons-row">
          <button type="button" className="btn gray" name="AC" onClick={handleClick}>AC</button>
          <button type="button" className="btn gray" name="+/-" onClick={handleClick}>+/-</button>
          <button type="button" className="btn gray" name="%" onClick={handleClick}>%</button>
          <button type="button" className="btn orange" name="÷" onClick={handleClick}>÷</button>
        </div>
        <div className="buttons-row">
          <button type="button" className="btn gray" name="7" onClick={handleClick}>7</button>
          <button type="button" className="btn gray" name="8" onClick={handleClick}>8</button>
          <button type="button" className="btn gray" name="9" onClick={handleClick}>9</button>
          <button type="button" className="btn orange" name="x" onClick={handleClick}>x</button>
        </div>
        <div className="buttons-row">
          <button type="button" className="btn gray" name="4" onClick={handleClick}>4</button>
          <button type="button" className="btn gray" name="5" onClick={handleClick}>5</button>
          <button type="button" className="btn gray" name="6" onClick={handleClick}>6</button>
          <button type="button" className="btn orange" name="-" onClick={handleClick}>-</button>
        </div>
        <div className="buttons-row">
          <button type="button" className="btn gray" name="1" onClick={handleClick}>1</button>
          <button type="button" className="btn gray" name="2" onClick={handleClick}>2</button>
          <button type="button" className="btn gray" name="3" onClick={handleClick}>3</button>
          <button type="button" className="btn orange" name="+" onClick={handleClick}>+</button>
        </div>
        <div className="buttons-row">
          <button type="button" className="btn gray double" name="0" onClick={handleClick}>0</button>
          <button type="button" className="btn gray" name="." onClick={handleClick}>.</button>
          <button type="button" className="btn orange" name="=" onClick={handleClick}>=</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
