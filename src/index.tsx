import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import initStore from './config/store';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import ErrorBoundary from './shared/error/error-boundary';

const store = initStore();

ReactDOM.render(
    <ErrorBoundary>
        <Provider store={store}>
            <React.StrictMode>
                <App />
            </React.StrictMode>
        </Provider>
    </ErrorBoundary>,
    document.getElementById('root'),
);
