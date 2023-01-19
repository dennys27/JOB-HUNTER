import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter ,HashRouter} from "react-router-dom";
import {Provider} from 'react-redux'
import { store } from './Store/Store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App className="wrapper" />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);


