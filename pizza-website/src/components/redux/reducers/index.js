import { combineReducers } from 'redux';

import pizzaReducer from "./pizzaReducer";
import orderReducer from "./orderReducer";
import pizzaReducerSauce from "../reduxsauce/pizzaReducerSauce.js";
import orderReducerSauce from "../reduxsauce/orderReducerSauce.js";

const rootReducer = combineReducers({
  pizza: pizzaReducerSauce,
  order : orderReducerSauce
});

export default rootReducer;
