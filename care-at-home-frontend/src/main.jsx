import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App.jsx';

// 1. Force-Load Design Tokens & Typography
import './styles/variables.css';
import './styles/typography.css';

// 2. Force-Load Structural Systems
import './styles/layout.css';
import './styles/components.css';

// 3. Force-Load Overrides & Resets
import './styles/responsive.css';
import './styles/index.css'; 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);