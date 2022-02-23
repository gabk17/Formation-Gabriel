
import { createReducer, createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  placeOrder: null,
  resetOrder: null,
})

export default Creators;

const INITIAL_STATE = {
  isOrdered: false,
};

export const placeOrder = (state = INITIAL_STATE, action) => {
  return true;
};

export const resetOrder = (state = INITIAL_STATE, action) => {
  return false;
};

const HANDLERS = {
  [Types.PLACEORDER]: placeOrder,
  [Types.RESETORDER]: resetOrder,
};

export const orderReducerSauce = createReducer(INITIAL_STATE, HANDLERS);
