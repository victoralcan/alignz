import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import initStore from './config/store';
import ErrorBoundary from './shared/error/error-boundary';
import { loadIcons } from './config/icon-loader';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'styles/global.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'swiper/swiper.scss';

loadIcons();

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
