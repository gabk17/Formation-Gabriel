import pizzaReducer from "./pizzaReducer";
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  pizza: pizzaReducer
})

export default rootReducer;
