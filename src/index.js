import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStroopwafel, faPlay, faPause, faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

library.add(faStroopwafel, faPlay, faPause, faEdit, faTrashAlt);

ReactDOM.render(<App />, document.getElementById('root'));
