import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; // Asegúrate de importar el Provider de react-redux
import store from './store'; // Importa tu store de Redux
import App from './App.jsx';
import './index.css';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Provider store={store}> {/* Envuelve tu App con el Provider y proporciona el store */}
      <App />
    </Provider>
  </React.StrictMode>
);
