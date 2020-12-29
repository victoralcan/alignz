import React from 'react';
import { Switch } from 'react-router-dom';
import ErrorBoundaryRoute from './shared/error/error-boundary-route';
import PageNotFound from './shared/error/page-not-found';
import Home from './pages/home';
import ComoFunciona from './pages/comoFunciona';
import Preco from './pages/valores';
import Preavaliacao from './pages/preavaliacao';
import Depoimentos from './pages/depoimentos';
import Duvidas from './pages/duvidas';
import OndeEstamos from './pages/ondeEstamos';

function Routes() {
  return (
    <Switch>
      <ErrorBoundaryRoute exact path="/" component={Home} />
      <ErrorBoundaryRoute path="/como-funciona" component={ComoFunciona} />
      <ErrorBoundaryRoute path="/valores" component={Preco} />
      <ErrorBoundaryRoute path="/preavaliacao" component={Preavaliacao} />
      <ErrorBoundaryRoute path="/depoimentos" component={Depoimentos} />
      <ErrorBoundaryRoute path="/duvidas" component={Duvidas} />
      <ErrorBoundaryRoute path="/onde-estamos" component={OndeEstamos} />
      <ErrorBoundaryRoute path="/" component={PageNotFound} />
    </Switch>
  );
}

export default Routes;
