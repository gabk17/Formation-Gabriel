import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

	useEffect(() => {
		let error = calculation;
		if(error === "Infinity" || error === "-Infinity") {
			setCalculation("Error");
		}
	})

	const [calculation, setCalculation] = useState("");
	const operatorSign = ['/', '*', '+', '-', '.'];

	const doCalculation = (e) => {
		if((operatorSign.includes(e) && calculation === "") || 
		//checks if an operator was clicked with no numbers initially
			 (operatorSign.includes(e) && operatorSign.includes(calculation.slice(-1))) ||
		//checks whether two operators are consecutive to each other or not		 
			 (calculation === "0" && e === "0") ||
		//checks if first number is 0 and prevents new 0 to be added
			 (calculation === "Error" || calculation === "Can't Compute")
		//prevents adding numbers after word Error
			 )
 
			 {
				 return;
			 }


		setCalculation(calculation + e);
		
		if(calculation === "0" && !operatorSign.includes(e)){
			setCalculation(e);
		//Does not allow replacing the starting 0 by an operator, but allows replacing it by numbers
		}
	}

	const finalResult = (e) => {
		if(calculation === "" && e === "="){
			setCalculation("0");
		}

		let splitting = calculation.split('+')
		
			for(let i = splitting.length - 1; i >= 0; i--){
				if(splitting[i].split(".").length > 2){
					setCalculation("Can't Compute");
			//Does not allow 2 decimal points in  a number
				}					
			}


		setCalculation(eval(calculation).toString());

		}

	const deleteDigit = () => {
		const value = calculation.slice(0, -1); //index of -1 indicates the index before 0, meaning last input
		setCalculation(value);
	}

	const reset = () => {
		setCalculation("");
	}

	const numberButtons = () => {
		const numbers = [];

		for(let i = 1; i <= 9; i++){
			numbers.push(
			<button 
				className="btn btn-primary" 
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
  	  		<input className="screen" type='text' value={calculation} disabled/>	
        </div>
  
        <div className="operators">
  				<button className="btn btn-info" onClick={() => doCalculation('/')}>/</button>
  				<button className="btn btn-info" onClick={() => doCalculation('*')}>x</button>
  				<button className="btn btn-info" onClick={() => doCalculation('+')}>+</button>        
  				<button className="btn btn-info" onClick={() => doCalculation('-')}>-</button>        
       	 </div>
  		
        <div className="numbers">
  				{numberButtons()}
        </div>
  
  	  	<div className="operators">
  				<button className="btn btn-primary" onClick={() => doCalculation('.')}>.</button>
  				<button className="btn btn-primary" onClick={() => doCalculation('0')}>0</button>
  				<button className="btn btn-danger" onClick={deleteDigit}>DEL</button>
					<button className="btn btn-danger" onClick={reset}>AC</button>       
        </div>
  
				<div className="operators">
					<button className="btn btn-info" onClick={() => finalResult('=')}>=</button> 
				</div>
      </div>
		</div>
  );
}

export default App;
