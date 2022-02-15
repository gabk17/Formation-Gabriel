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

  const addInput = (input, type) => {

    const num = parseFloat(number);
    console.log(input,  type)
    // eslint-disable-next-line default-case
    switch (input) {		
      case Operator.PLUS:
        addOperator(Operator.PLUS) 
        return;

      case Operator.MINUS:
        addOperator(Operator.MINUS)
        return;

      case Operator.MULTIPLY:
        addOperator(Operator.MULTIPLY)
        return;

      case Operator.DIVIDE:
        addOperator(Operator.DIVIDE)
        return;
    }

    if (number[number.length - 1] === ".") {
      setNumber(number + input);
    } else {
      setNumber(parseFloat(num + input).toString());
    }

  };

	const addOperator = (input) => {
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
			setOperator(input);
	}

  const doCalculation = () => {
    if (!operator) return;

    switch (operator) {		
      case Operator.PLUS:
        setNumber((total + parseFloat(number)).toString());
        break;

      case Operator.MINUS:
        setNumber((total - parseFloat(number)).toString());
        break;

      case Operator.MULTIPLY:
        setNumber((total * parseFloat(number)).toString());
        break;

      case Operator.DIVIDE:
        setNumber((total / parseFloat(number)).toString());
        break;

      default:
        break
    }

    setTotal("0");
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
  				<Button onClick={addInput} input={Operator.DIVIDE} type="anOperator" bootstrapOption="info"/>
  				<Button onClick={addInput} input={Operator.MULTIPLY} type="anOperator" bootstrapOption="info"/>
  				<Button onClick={addInput} input={Operator.PLUS} type="anOperator" bootstrapOption="info"/>        
  				<Button onClick={addInput} input={Operator.MINUS} type="anOperator" bootstrapOption="info"/>      
       	 </div>
  		
        <div className="numbers">
  				<Button onClick={addInput} input="1" type="Number" bootstrapOption="primary"/>
          <Button onClick={addInput} input="2" type="Number" bootstrapOption="primary"/>
          <Button onClick={addInput} input="3" type="Number"  bootstrapOption="primary"/>
  				<Button onClick={addInput} input="4" type="Number" bootstrapOption="primary"/>
       	  <Button onClick={addInput} input="5" type="Number" bootstrapOption="primary"/>
       	  <Button onClick={addInput} input="6" type="Number" bootstrapOption="primary"/>
  				<Button onClick={addInput} input="7" type="Number" bootstrapOption="primary"/>
       	  <Button onClick={addInput} input="8" type="Number" bootstrapOption="primary"/>
       	  <Button onClick={addInput} input="9" type="Number" bootstrapOption="primary"/>

        </div>
  
  	  	<div className="operators">
  				<button onClick={checkCommas} className="btn btn-primary">.</button>   
  				<Button onClick={addInput} input="0" bootstrapOption="primary"/> 
					<button onClick={doAC} className="btn btn-danger">AC</button>     
        </div>
  
				<div className="operators">
					<button onClick={doCalculation} className="btn btn-info">{Operator.EQUAL}</button> 
				</div>
      </div>
		</div>
  );
}

export default App;
