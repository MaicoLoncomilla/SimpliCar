import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './redux/reducer';
import { positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'

import './index.css';
import App from './App';

const store = createStore(reducer, applyMiddleware(thunk))
const options = {
  position: positions.TOP_RIGHT,
  timeout: 5000,
  offset: '30px',
}

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
        <AlertProvider template={AlertTemplate} {...options}>
          <Router>
            <App />
          </Router>
        </AlertProvider>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);