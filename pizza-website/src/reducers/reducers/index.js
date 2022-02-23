import { combineReducers } from 'redux';

import pizzaReducerSauce from "../reduxsauce/pizzaReducerSauce.js";
import orderReducerSauce from "../reduxsauce/orderReducerSauce.js";

const rootReducer = combineReducers({
  pizza: pizzaReducerSauce,
  order: orderReducerSauce
});

export default rootReducer;
