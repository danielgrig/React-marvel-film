import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

function app() {

  return <BrowserRouter>
    <App />
  </BrowserRouter>;
}
ReactDOM.render(app(),document.getElementById('root'));