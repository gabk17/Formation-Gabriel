import { createStore } from 'redux';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';

import Reactotron from '../utils/ReactotronConfig';
import rootReducer from "../reducers/reducers/index";


const persistConfig = {
  key: 'main-root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(persistedReducer, Reactotron.createEnhancer())

const Persistor = persistStore(store)

export { Persistor }
export default store;
