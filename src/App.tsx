import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './shared/components/header/header';
import Routes from './routes';
import Footer from './shared/components/footer';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
