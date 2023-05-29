import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState('');
  const [currentValue, setCurrentValue] = useState('');
  const [operator, setOperator] = useState('');
  const [result, setResult] = useState('');

  const handleNumberClick = (e) => {
    if (result) {
      setDisplayValue(e.target.name);
      setCurrentValue(e.target.name);
      setResult('');
    } else {
      setDisplayValue((prevValue) => prevValue + e.target.name);
      setCurrentValue((prevValue) => prevValue + e.target.name);
    }
  };

  const handleOperatorClick = (e) => {
    if (result) {
      setOperator(e.target.name);
      setCurrentValue(result);
      setResult('');
    } else if (currentValue && operator) {
      handleCalculate();
      setOperator(e.target.name);
    } else if (currentValue) {
      setOperator(e.target.name);
      setResult(currentValue);
      setCurrentValue('');
    }
  };

  const handleClear = () => {
    setDisplayValue('');
    setCurrentValue('');
    setOperator('');
    setResult('');
  };

  const handleCalculate = () => {
    if (currentValue && operator) {
      try {
        const calculatedResult = eval(`${result}${operator}${currentValue}`);
        setResult(calculatedResult.toString());
        setDisplayValue(calculatedResult.toString());
        setCurrentValue('');
        setOperator('');
      } catch (error) {
        setResult('Error');
        setDisplayValue('Error');
      }
    }
  };

  return (
    <div className="calculator">
      <div className="keypad">
        <div className="screen">{displayValue}</div>
        <button className="highlight" onClick={handleClear}>
          C
        </button>
        <button name="/" onClick={handleOperatorClick} className="operator">
          /
        </button>
        <button name="*" onClick={handleOperatorClick} className="operator">
          *
        </button>
        <button name="-" onClick={handleOperatorClick} className="operator">
          -
        </button>
        <button className="highlight" name="7" onClick={handleNumberClick}>
          7
        </button>
        <button className="highlight" name="8" onClick={handleNumberClick}>
          8
        </button>
        <button className="highlight" name="9" onClick={handleNumberClick}>
          9
        </button>
        <button name="+" onClick={handleOperatorClick} className="operator">
          +
        </button>
        <button className="highlight" name="4" onClick={handleNumberClick}>
          4
        </button>
        <button className="highlight" name="5" onClick={handleNumberClick}>
          5
        </button>
        <button className="highlight" name="6" onClick={handleNumberClick}>
          6
        </button>
        <button className="highlight" name="1" onClick={handleNumberClick}>
          1
        </button>
        <button className="highlight" name="2" onClick={handleNumberClick}>
          2
        </button>
        <button className="highlight" name="3" onClick={handleNumberClick}>
          3
        </button>
        <button className="highlight equals" onClick={handleCalculate}>
          =
        </button>
        <button className="highlight zero" name="0" onClick={handleNumberClick}>
          0
        </button>
        <button className="highlight" name="." onClick={handleNumberClick}>
          .
        </button>
      </div>
    </div>
  );
};

export default Calculator;
