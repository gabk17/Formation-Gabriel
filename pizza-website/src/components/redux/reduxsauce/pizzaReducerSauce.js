
import { createReducer, Types as ReduxSauceTypes } from "reduxsauce";
import Types from './pizzaActionTypes'

const INITIAL_STATE  = {
  pizzas: []
};

export const addPizza = (state = INITIAL_STATE , action) => {
  action.payload.quantity = action.qty
  return [...state, action.payload];
};

export const delPizza = (state = INITIAL_STATE , action) => {
  return state = state.filter((e) => {
    return e.id !== action.payload.id
  });
};

const reset = (state = INITIAL_STATE , action) => {
  return []
}

const defaultHandler = (state = INITIAL_STATE, action) => {
  return state
}

const HANDLERS = {
  [Types.ADDPIZZA]: addPizza,
  [Types.DELPIZZA]: delPizza,
  [Types.RESET]: reset,
  [ReduxSauceTypes.DEFAULT]: defaultHandler,
};

const pizzaReducerSauce = createReducer(INITIAL_STATE , HANDLERS);

export default pizzaReducerSauce;
