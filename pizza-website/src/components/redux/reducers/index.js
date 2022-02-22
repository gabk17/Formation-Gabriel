import pizzaReducer from "./pizzaReducer";
import orderReducer from "./orderReducer";
import reducerSauce from "../reduxsauce/pizzaReducerSauce.js"
import orderReducerSauce from "../reduxsauce/orderReducerSauce.js"
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  pizza: reducerSauce,
  order : orderReducerSauce
})

export default rootReducer;
