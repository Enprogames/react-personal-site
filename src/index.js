// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter} from 'react-router-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(
    <HashRouter>
      <App />
    </HashRouter>
);
