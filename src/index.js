import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { HashRouter as BrowserRouter } from 'react-router-dom';
import App from './App';
import ScrollToTop from './components/Scroll';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <ScrollToTop/>
    <App />
    </BrowserRouter>
    
  </React.StrictMode>
);


