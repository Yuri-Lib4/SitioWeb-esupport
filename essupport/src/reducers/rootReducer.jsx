import { combineReducers } from 'redux';
import cartReducer from './cartReducer'; // Importa tus reducers individuales aquí

const rootReducer = combineReducers({
  // Agrega tus reducers individuales aquí
  cart: cartReducer,
  // ...otros reducers
});

export default rootReducer;
