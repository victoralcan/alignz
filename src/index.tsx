import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import initStore from './config/store';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';

const store = initStore();

ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>,
    document.getElementById('root'),
);
