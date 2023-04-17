import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {BrowserRouter as Router} from "react-router-dom";
import { DataContext, DataProvider } from './Contexts/DataProvider';

export {DataContext};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
  <DataProvider>

    <App />
  </DataProvider>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
