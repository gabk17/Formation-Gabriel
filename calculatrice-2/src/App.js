import { useState } from 'react'
function App() {

const [number, setNumber] = useState(0);
const [memory, setMemory] = useState(0);
const [operator, setOperator] = useState(null);

const addNumber = (input) => {
  setNumber(parseFloat(number + input))
}

const addOperator = (input) => {
  setOperator(input)
  
  if(memory === 0){
    setMemory(number)
  }
  else{
    setMemory(memory + number)
  }

  setNumber(0)

}

const doCalculate = () => {
  setMemory(memory + number)
  setNumber(0)
  setOperator(null)

}

const reset = () => {
  setNumber(0)
  setMemory(0)
  setOperator(null)
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

        <button onClick={() => addOperator("+")}>+</button>
        <button onClick={doCalculate}>=</button>
        <button onClick={reset}>AC</button>


      </div>
    </div>
  );
}

export default App;
