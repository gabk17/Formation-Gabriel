import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css';

const buttonSpacing = {
			marginRight: "10px"
}

function App() {

	const[calculation, setCalculation] = useState('');

	const numberButtons = () => {
		const numbers = [];

		for(let i = 1; i <= 9; i++){
			numbers.push(<button class="btn btn-primary" key={i}>{i}</button>);		
		}

		return numbers;
	}
 
  return (
    <div className="calculator">
    	<div className="display form-control">
	  		<input type='text' readonly value={calculation} disabled/>	
      </div>

      <div className="operators form-control">
				<button class="btn btn-info" style={buttonSpacing}value="/">/</button>
				<button class="btn btn-info" style={buttonSpacing}value="*">x</button>
      	<button class="btn btn-info" style={buttonSpacing}value="+">+</button>        
      	<button class="btn btn-info" style={buttonSpacing}value="-">-</button>        
     	 </div>
		
      <div className="numbers form-control">
				{numberButtons()}
      </div>

	  	<div className="form-control">
				<button class="btn btn-secondary" style={buttonSpacing}value=".">.</button>
				<button class="btn btn-primary" style={buttonSpacing}value="0">0</button>
				<button class="btn btn-danger" style={buttonSpacing}>C</button>
      	<button	button class="btn btn-info">=</button>        
      </div>

    </div>
  );
}

export default App;
