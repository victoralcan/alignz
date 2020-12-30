import React from 'react';
import { Router } from 'react-router';
import Header from './shared/components/header/header';
import Routes from './routes';
import Footer from './shared/components/footer/Footer';
import history from './config/history';

function App() {
  return (
    <Router history={history}>
      <Header />
      <Routes />
      <Footer />
    </Router>
  );
}

export default App;
