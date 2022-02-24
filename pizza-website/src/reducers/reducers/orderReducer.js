
const orderReducer = (state = false, action) => {
  switch (action.type) {
  	case 'PLACEORDER':
  	  return true;

    default:
      return state;
  }
}

export default orderReducer;
