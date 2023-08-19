import { createStore } from '@reduxjs/toolkit';
import rootReducer from './reducers/rootReducer'; // Importa tu rootReducer aquí

const store = createStore(rootReducer); // Crea el store utilizando tu rootReducer

export default store;
