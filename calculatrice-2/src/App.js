import { useState, useEffect } from 'react';
import * as Operator from './operators';

function App() {

useEffect(() => {
		let error = memory.toString();
		if(error === "Infinity" || error === "-Infinity") {
			setMemory("Error");
		}
	})

const [number, setNumber] = useState(0);
const [memory, setMemory] = useState(0);
const [operator, setOperator] = useState(null);

const calculate = () =>{
  // eslint-disable-next-line default-case
    switch(operator){
      case Operator.PLUS:
        setMemory(memory + number);
        break;
      case Operator.MINUS:
        setMemory(memory - number);
        break;
      case Operator.MULTIPLY:
        setMemory(memory * number);
        break;
      case Operator.DIVIDE:
        setMemory(memory / number);
        break;
    }
}

const addNumber = (input) => {
  setNumber(parseFloat(number + input));

  if(operator === null){ //New input after pressing equal sign
    setMemory(0);
  }
}

const addOperator = (input) => {
  setOperator(input);
  
  if(memory === 0){
    setMemory(number);
  }
  else{
    calculate();
  }

  setNumber(0);
}

const showResult = () => {
  if(operator === null){ //Keeps number shown after pressing equal without any operator
    return;
  }

  calculate();
  setNumber(0);
  setOperator(null);
}

const addComma = () => {
  const stringifyNumber = number.toString();

  if (stringifyNumber.includes(".")) return; //Checks if a stringified version of the number already had 1 comma

  setNumber(number + ".");
  }

const reset = () => {
  setNumber(0);
  setMemory(0);
  setOperator(null);
}

  return (
    <div className="App" style={{padding: '100px'}}>
      <span>Memory: {memory}</span> <br />
      <span>Number: {number}</span> <br />
      <span>Operator: {operator}</span> 

      <div>
        <button onClick={() => addNumber("1")}>1</button>
        <button onClick={() => addNumber("2")}>2</button>
        <button onClick={() => addNumber("3")}>3</button>
        <button onClick={() => addNumber("4")}>4</button>
        <button onClick={() => addNumber("5")}>5</button>
        <button onClick={() => addNumber("6")}>6</button>
        <button onClick={() => addNumber("7")}>7</button>
        <button onClick={() => addNumber("8")}>8</button>
        <button onClick={() => addNumber("9")}>9</button>
        <button onClick={() => addNumber("0")}>0</button>
        <button onClick={() => addComma(".")}>.</button>

        <button onClick={() => addOperator(Operator.DIVIDE)}>/</button>
        <button onClick={() => addOperator(Operator.MULTIPLY)}>*</button>
        <button onClick={() => addOperator(Operator.PLUS)}>+</button>
        <button onClick={() => addOperator(Operator.MINUS)}>-</button>

        <button onClick={showResult}>=</button>
        <button onClick={reset}>AC</button>


      </div>
    </div>
  );
}

export default App;
