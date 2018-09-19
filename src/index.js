import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStroopwafel, faPlay, faPause, faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import App from './containers/App';
import reducer from './reducers';
import './index.css';

library.add(faStroopwafel, faPlay, faPause, faEdit, faTrashAlt);

const store = createStore(reducer);

render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root')
);
