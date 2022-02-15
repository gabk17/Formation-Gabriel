import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "./utils/Button"
import * as Operator from './constants/operators';

function App() {
	const [total, setTotal] = useState("0");
	const [operator, setOperator] = useState(null);
  const [number, setNumber] = useState("0");
	// const [result, setResult] = useState("0")

  const doAC = () => {
    setNumber("0");
      // setResult("0");
      setTotal("0");
      setOperator(null);
      return;
  }

  const checkCommas = () => {

    if (number.includes(".")) return;

      setNumber(number + ".");
  }

	const addOperator = (input, type) => {
    console.log(input, type);

    const num = parseFloat(number);
    const hookType = (type === "Equal") ? setNumber : setTotal

    switch (operator) {		
      case Operator.PLUS:
        hookType(total + parseFloat(number));
        break;

      case Operator.MINUS:
        hookType(total - parseFloat(number));
        break;

      case Operator.MULTIPLY:
        hookType(total * parseFloat(number));
        break;

      case Operator.DIVIDE:
        hookType(total / parseFloat(number));
        break;

      default:
        hookType(parseFloat(number));
    }

    if (number[number.length - 1] === ".") {
      setNumber(number + input);
    } else {
      setNumber(parseFloat(num + input).toString());
    }

    
			setOperator(input);
	}

  const doCalculation = () => {
    if (!operator) return;

    switch (operator) {		
      case Operator.PLUS:
        setNumber((total + parseFloat(number)));
        break;

      case Operator.MINUS:
        setNumber((total - parseFloat(number)));
        break;

      case Operator.MULTIPLY:
        setNumber((total * parseFloat(number)));
        break;

      case Operator.DIVIDE:
        setNumber((total / parseFloat(number)));
        break;

      default:
        break
    }

    setOperator(null);
    return;
  }

  return (
		<div className="App">
      <div className="calculator">
  		
      	<div className="display">
  	  		{/* <span className="display-screen-result">{result}</span> */}
					<div className="display-screen">{number}</div>	
        </div>
  
        <div className="operators">
  				<Button onClick={addOperator} input={Operator.DIVIDE} type="anOperator" bootstrapOption="info"/>
  				<Button onClick={addOperator} input={Operator.MULTIPLY} type="anOperator" bootstrapOption="info"/>
  				<Button onClick={addOperator} input={Operator.PLUS} type="anOperator" bootstrapOption="info"/>        
  				<Button onClick={addOperator} input={Operator.MINUS} type="anOperator" bootstrapOption="info"/>      
       	 </div>
  		
        <div className="numbers">
  				<Button onClick={addOperator} input="1" type="Number" bootstrapOption="primary"/>
          <Button onClick={addOperator} input="2" type="Number" bootstrapOption="primary"/>
          <Button onClick={addOperator} input="3" type="Number"  bootstrapOption="primary"/>
  				<Button onClick={addOperator} input="4" type="Number" bootstrapOption="primary"/>
       	  <Button onClick={addOperator} input="5" type="Number" bootstrapOption="primary"/>
       	  <Button onClick={addOperator} input="6" type="Number" bootstrapOption="primary"/>
  				<Button onClick={addOperator} input="7" type="Number" bootstrapOption="primary"/>
       	  <Button onClick={addOperator} input="8" type="Number" bootstrapOption="primary"/>
       	  <Button onClick={addOperator} input="9" type="Number" bootstrapOption="primary"/>

        </div>
  
  	  	<div className="operators">
  				<button onClick={checkCommas} className="btn btn-primary">.</button>   
  				<Button onClick={addOperator} input="0" type="Number" bootstrapOption="primary"/> 
					<button onClick={doAC} className="btn btn-danger">AC</button>     
        </div>
  
        <div className="operators">
          <Button onClick={addOperator} input={Operator.EQUAL} type="Equal" bootstrapOption="info"/>
        </div>
      </div>
		</div>
  );
}

export default App;

