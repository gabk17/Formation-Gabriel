const pizzas = [];

const pizzaReducer = (state = pizzas, action) => {
  switch(action.type) {
    case "ADDPIZZA": 
      action.payload.quantity = action.qty
      return [...state, action.payload];

    case "DELPIZZA": 
      return state = state.filter((e) =>{
        return e.id !== action.payload.id
      } );

    case "RESET": 
      return [];

    default: 
      return state
  }
}

export default pizzaReducer;

