import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./styles/main.css";
import "./styles/menu.css";
import "./styles/loader.css";
import "./styles/footer.css";
import "./styles/cart.css";
import "./styles/shop.css";
import "./styles/not-found.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
