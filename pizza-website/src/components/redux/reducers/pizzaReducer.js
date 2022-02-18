const pizzas = [];

const pizzaReducer = (state = pizzas, action) => {
  switch(action.type) {
    case "ADDPIZZA": 
      return [...state, action.payload]

    case "DELPIZZA": 
      return state = state.filter((e) =>{
        return e.id !== action.payload.id
      } )

    default: 
      return state
  }
}

export default pizzaReducer;
