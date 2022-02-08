import React, { useState } from "react";
import Counters from './Counters';

const App = () => {

	const [counterList, setCounterList] = useState([]);

	const addCounter = (counter) => {
  	const id = Math.floor(Math.random() * 10000) + 1;
  	const newCounter = { id, ...counter };
  	setCounterList([...counterList, newCounter]);
	}

	const deleteCounter = (id) => {
  	setCounterList(counterList.filter((counter) => counter.id !== id));
	}

	return (
		<div>
   	 <button onClick={addCounter}>Add Counter</button>
			<Counters counters = {counterList} onDelete = {deleteCounter}/>
		</div>
	)
}

export default App;
