import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App.jsx';

// Core Stylesheet Injection
// This assumes your index.css handles the imports for variables, typography, and layout.
import './styles/index.css'; 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);