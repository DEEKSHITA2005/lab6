import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Import the root component

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // Attach the root component to the 'root' HTML element
);