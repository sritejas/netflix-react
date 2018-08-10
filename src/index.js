import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore ,applyMiddleware} from 'redux';
import ReduxPromise from 'redux-promise';
import reducers from './reducers';
import './index.css';
import MyRouter from './routes';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
  <MyRouter />
  </Provider>
  , document.getElementById('root'));
