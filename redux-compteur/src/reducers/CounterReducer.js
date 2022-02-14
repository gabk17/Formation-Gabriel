const increment = (state) => {
  return state + 1;
}

const decrement = (state) => {
  return state - 1;
}

const reset = () => {
  return 0;
}

function counterReducer(state = 0, action) {
  switch (action.type) {
  	case 'INCREMENT':
  	  return increment(state);
  	case 'DECREMENT':
  	  return decrement(state);
    case 'RESET':
      return reset();
    default:
      return state;
  }
}

export default counterReducer;
