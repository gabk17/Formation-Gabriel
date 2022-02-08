import { useState } from 'react';

const Counter = ({a_counter, onDelete}) => {
  
  const [counter, setCounter] = useState(0);

  const increment = () => {
	  setCounter(counter + 1);
  }

  const decrement = () => {
  	setCounter(counter - 1);
  }

  const reset = () => {
    setCounter(0);
  }

  return(
    <div>
	     Here's A Counter: {counter}
	    <div>
		    <button onClick={increment}>Increment</button>
		    <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
        <button onClick={() => onDelete(a_counter.id)}>Delete Counter</button>
	   </div>
  	</div>
  )
}

export default Counter;