import React from 'react';
import { Switch } from 'react-router-dom';
import ErrorBoundaryRoute from './shared/error/error-boundary-route';
import PageNotFound from './shared/error/page-not-found';
import Home from './pages/home';
import ComoFunciona from './pages/comoFunciona';
import Clareamento from './pages/clareamento';
import Preco from './pages/preco';
import Agenda from './pages/agenda';
import Depoimentos from './pages/depoimentos';
import Duvidas from './pages/duvidas';
import OndeEstamos from './pages/ondeEstamos';

function Routes() {
  return (
    <Switch>
      <ErrorBoundaryRoute exact path="/" component={Home} />
      <ErrorBoundaryRoute path="/como-funciona" component={ComoFunciona} />
      <ErrorBoundaryRoute path="/clareamento" component={Clareamento} />
      <ErrorBoundaryRoute path="/preco" component={Preco} />
      <ErrorBoundaryRoute path="/agenda" component={Agenda} />
      <ErrorBoundaryRoute path="/depoimentos" component={Depoimentos} />
      <ErrorBoundaryRoute path="/duvidas" component={Duvidas} />
      <ErrorBoundaryRoute path="/onde-estamos" component={OndeEstamos} />
      <ErrorBoundaryRoute path="/" component={PageNotFound} />
    </Switch>
  );
}

export default Routes;
