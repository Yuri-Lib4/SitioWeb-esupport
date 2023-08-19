// reducers/index.js
import { combineReducers } from 'redux';
import cartReducer from './cartReducer'; // Importa tus reducers aquí

const rootReducer = combineReducers({
  cart: cartReducer, // Agrega tus reducers aquí
  // Agrega más reducers si los tienes
});

export default rootReducer;
