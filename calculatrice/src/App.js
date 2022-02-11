import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "./utils/Button"
import * as Operator from './constants/operators';

function App() {
	const [total, setTotal] = useState("0");
	const [operator, setOperator] = useState(null);
  const [number, setNumber] = useState("0");
	const [result, setResult] = useState("0")

	const addOperator = (operatorSign) => {
			switch (operator) {		
				case Operator.PLUS:
					setTotal(total + parseFloat(number));
					break;

				case Operator.MINUS:
					setTotal(total - parseFloat(number));
					break;

				case Operator.MULTIPLY:
					setTotal(total * parseFloat(number));
					break;

				case Operator.DIVIDE:
					setTotal(total / parseFloat(number));
					break;

				default:
					setTotal(parseFloat(number));
			}

      setNumber("0");
			setOperator(operatorSign);
	}

  const doCalculation = (input) => () => {
    const num = parseFloat(number);
		
    if (input === "AC") {
      setNumber("0");
      setResult("0");
      setTotal("0");
      setOperator(null);
      return;
    }

    if (input === ".") { 
      if (number.includes(".")) return; //Checks for multiple inputs of commas

      setNumber(number + ".");
      return;
    }

    if (input === Operator.PLUS) {
      addOperator(Operator.PLUS) //Makes sure we have a previous operation
      return;
    }
    if (input === Operator.MINUS) {
      addOperator(Operator.MINUS)
      return;
    }
    if (input === Operator.MULTIPLY) {
      addOperator(Operator.MULTIPLY)
      return;
    }
    if (input === Operator.DIVIDE) {
      addOperator(Operator.DIVIDE)
      return;
    }

    if (input === "=") {
      if (!operator) return;

      if (operator === Operator.PLUS) {
        setNumber((total + parseFloat(number)).toString());
      } else if (operator === Operator.MINUS) {
        setNumber((total - parseFloat(number)).toString());
      } else if (operator === Operator.MULTIPLY) {
        setNumber((total * parseFloat(number)).toString());
      } else if (operator === Operator.DIVIDE) {
        setNumber((total / parseFloat(number)).toString());
      }
      setTotal("0");
      setOperator(null);
      return;
    }

    if (number[number.length - 1] === ".") {
      setNumber(number + input);
    } else {
      setNumber(parseFloat(num + input).toString());
    }

  };

  return (
		<div className="App">
      <div className="calculator">
  		
      	<div className="display">
  	  		<span className="display-screen-result">{result}</span>
					<div className="display-screen">{number}</div>	
        </div>
  
        <div className="operators">
  				<Button onClick={doCalculation} input={Operator.DIVIDE }bootstrapOption="info"/>
  				<Button onClick={doCalculation} input={Operator.MULTIPLY }bootstrapOption="info"/>
  				<Button onClick={doCalculation} input={Operator.PLUS} bootstrapOption="info"/>        
  				<Button onClick={doCalculation} input={Operator.MINUS} bootstrapOption="info"/>      
       	 </div>
  		
        <div className="numbers">
  				<Button onClick={doCalculation} input="1" bootstrapOption="primary"/>
          <Button onClick={doCalculation} input="2" bootstrapOption="primary"/>
          <Button onClick={doCalculation} input="3" bootstrapOption="primary"/>
  				<Button onClick={doCalculation} input="4" bootstrapOption="primary"/>
       	  <Button onClick={doCalculation} input="5" bootstrapOption="primary"/>
       	  <Button onClick={doCalculation} input="6" bootstrapOption="primary"/>
  				<Button onClick={doCalculation} input="7" bootstrapOption="primary"/>
       	  <Button onClick={doCalculation} input="8" bootstrapOption="primary"/>
       	  <Button onClick={doCalculation} input="9" bootstrapOption="primary"/>

        </div>
  
  	  	<div className="operators">
  				<Button onClick={doCalculation} input="." bootstrapOption="primary"/>
  				<Button onClick={doCalculation} input="0" bootstrapOption="primary"/> 
					<Button onClick={doCalculation} input="AC" bootstrapOption="danger"/>     
        </div>
  
				<div className="operators">
					<Button onClick={doCalculation} input="=" bootstrapOption="info"/>
				</div>
      </div>
		</div>
  );
}

export default App;
