import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from 'redux/store.js';
import App from './App.jsx';
import 'modern-normalize/modern-normalize.css';
import './index.css';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store.store}>
      <BrowserRouter>
        <PersistGate loading={null} persistor={store.persiststore}>
          <App />
        </PersistGate>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
