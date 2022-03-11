import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <App saludo = "Hola mundo">
    <h1>Esto es un titulo</h1> {/*Mala practica*/}
  </App>,
  document.getElementById('root')
);
