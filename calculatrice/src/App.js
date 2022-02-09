import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

	const [calculation, setCalculation] = useState("");
	const operatorSign = ['/', '*', '+', '-', '.'];

	const doCalculation = (e) => {
		if((operatorSign.includes(e) && calculation === "") || 
		//checks if an operator was clicked with no numbers initially
			 (operatorSign.includes(e) && operatorSign.includes(calculation.slice(-1))))
		//checks whether two operators are consecutive to each other or not	 
			 {
				 return;
			 }

		setCalculation(calculation + e);
		
	}

	const finalResult = () => {
		setCalculation(eval(calculation).toString());
	}

	const deleteDigit = () => {
		if(calculation === ""){
			return;
		}

		const value = calculation.slice(0, -1); //index of -1 indicates the index before 0, meaning last input
		setCalculation(value);
	}

	const numberButtons = () => {
		const numbers = [];

		for(let i = 1; i <= 9; i++){
			numbers.push(
			<button 
				class="btn btn-primary" 
				onClick={() => doCalculation(i.toString())} //turns the numbers into string to display
				key={i}>
				{i}
			</button>);		
		}

		return numbers;
	}
 
  return (
		<div className="App">
      <div className="calculator">
  		
      	<div className="display">
  	  		<input className="screen" type='text' readonly value={calculation || "0"} disabled/>	
        </div>
  
        <div className="operators">
  				<button class="btn btn-info" onClick={() => doCalculation('/')}>/</button>
  				<button class="btn btn-info" onClick={() => doCalculation('*')}>x</button>
  				<button class="btn btn-info" onClick={() => doCalculation('+')}>+</button>        
  				<button class="btn btn-info" onClick={() => doCalculation('-')}>-</button>        
       	 </div>
  		
        <div className="numbers">
  				{numberButtons()}
        </div>
  
  	  	<div className="numbers">
  				<button class="btn btn-primary" onClick={() => doCalculation('.')}>.</button>
  				<button class="btn btn-primary" onClick={() => doCalculation('0')}>0</button>
  				<button class="btn btn-danger" onClick={deleteDigit}>C</button>

        	<button class="btn btn-info" onClick={finalResult}>=</button>        
        </div>
  
      </div>
		</div>
  );
}

export default App;
