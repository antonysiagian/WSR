import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { createStore } from './store';
import { Provider } from 'react-redux';
import localStorage from 'localStorage';

const APP_ID = 'APP_ID_HANDSOME';
const items = localStorage.getItem(APP_ID);
const store = createStore(items? JSON.parse(items): null);
store.subscribe(() =>  localStorage.setItem(APP_ID, JSON.stringify(store.getState())));

ReactDOM.render(
  <Provider store={store}>
    <App />
   </Provider> ,
  document.getElementById('root')
);