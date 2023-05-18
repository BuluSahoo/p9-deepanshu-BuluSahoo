import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import StepCounter from './App';

ReactDOM.render(
  <Provider store={store}>
    <StepCounter />
  </Provider>,
  document.getElementById('root')
);


