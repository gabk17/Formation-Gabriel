import React, { useState } from "react";

function Counter () {
  
const [counter, setCounter] = useState(0)
const [counterList, setCounterList] = useState([])

 
const increment = () => {
	setCounter(counter + 1)
}

const decrement = () => {
	setCounter(counter - 1)
}

const reset = () => {
  setCounter(0)
}

const addCounter = () => {
  setCounterList(counterList.concat(<Counter id = {counterList.length  + 1} />))
}

const deleteCounter = (id) => {
  setCounterList((counters) => counters.filter((_, i) => i !== counters.length - 1))
}

return(
  <div>
	  Here's A Counter: {counter}
	  <div>
		  <button onClick={increment}>Increment</button>
		  <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
      <button onClick={addCounter}>Add Counter</button>
      <button onClick={deleteCounter}>Delete Counter</button>

      {counterList}
	  </div>
	</div>
)
}

const App = () => {

return (
	<div>

    <Counter />

	</div>
)
}

export default App
