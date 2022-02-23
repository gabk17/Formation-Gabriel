
import { createReducer, Types as ReduxSauceTypes } from "reduxsauce";

import Types from './orderActionTypes';

const INITIAL_STATE = {
  isOrdered: false,
};

export const placeOrder = (state = INITIAL_STATE, action) => {
  return true;
};

export const resetOrder = (state = INITIAL_STATE, action) => {
  return false;
};

const defaultHandler = (state = INITIAL_STATE, action) => {
  return state;
}

const HANDLERS = {
  [Types.PLACEORDER]: placeOrder,
  [Types.RESETORDER]: resetOrder,
  [ReduxSauceTypes.DEFAULT]: defaultHandler,
};

const orderReducerSauce = createReducer(INITIAL_STATE, HANDLERS);

export default orderReducerSauce;
