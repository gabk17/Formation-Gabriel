import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css';

function App() {

	const[calculation, setCalculation] = useState(0);

	const numberButtons = () => {
		const numbers = [];

		for(let i = 1; i <= 9; i++){
			numbers.push(<button class="btn btn-primary"  key={i}>{i}</button>);		
		}

		return numbers;
	}
 
  return (
		<div className="App">
      <div className="calculator">
  		
      	<div className="display">
  	  		<input className="screen" type='text' readonly value={calculation} disabled/>	
        </div>
  
        <div className="operators">
  				<button class="btn btn-info" value="/">/</button>
  				<button class="btn btn-info" value="*">x</button>
  				<button class="btn btn-info" value="+">+</button>        
  				<button class="btn btn-info" value="-">-</button>        
       	 </div>
  		
        <div className="numbers">
  				{numberButtons()}
        </div>
  
  	  	<div className="numbers">
  				<button class="btn btn-primary" value=".">.</button>
  				<button class="btn btn-primary" value="0">0</button>
  				<button class="btn btn-danger">C</button>
        	<button class="btn btn-info">=</button>        
        </div>
  
      </div>
		</div>
  );
}

export default App;
