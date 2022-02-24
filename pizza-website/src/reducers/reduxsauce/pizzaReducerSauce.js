
import { createReducer, createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  addPizza: { payload: 'pizza', qty: 'quantity' },
  delPizza: { payload: 'pizza', qty: 'quantity' },
  reset: null,
})

export default Creators;

const INITIAL_STATE = {
  pizzas: []
};

export const addPizza = (state = INITIAL_STATE, action) => {
  action.payload.quantity = action.qty
  return [...state, action.payload];
};

export const delPizza = (state = INITIAL_STATE, action) => {
  return state = state.filter((e) => {
    return e.id !== action.payload.id
  });
};

const reset = (state = INITIAL_STATE, action) => {
  return [];
}

const HANDLERS = {
  [Types.ADDPIZZA]: addPizza,
  [Types.DELPIZZA]: delPizza,
  [Types.RESET]: reset,
};

export const pizzaReducerSauce = createReducer(INITIAL_STATE, HANDLERS);


