import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'; // explicit .jsx extension to avoid resolve issues

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
