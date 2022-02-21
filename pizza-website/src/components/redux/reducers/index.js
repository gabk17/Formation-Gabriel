import pizzaReducer from "./pizzaReducer";
import orderReducer from "./orderReducer";
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  pizza: pizzaReducer,
  order : orderReducer
})

export default rootReducer;
