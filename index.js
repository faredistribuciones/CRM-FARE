import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Puedes eliminar esta línea si no tienes un archivo index.css
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals(); // Puedes eliminar esta línea si no tienes reportWebVitals.js
