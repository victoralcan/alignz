import React from 'react';
import { Switch } from 'react-router-dom';
import ErrorBoundaryRoute from './shared/error/error-boundary-route';
import PageNotFound from './shared/error/page-not-found';
import Home from './pages/home';
import AparelhoInvisivel from './pages/aparelhoInvisivel';
import Clareamento from './pages/clareamento';
import Preco from './pages/preco';
import Agenda from './pages/agenda';
import Depoimentos from './pages/depoimentos';
import Duvidas from './pages/duvidas';
import OndeEstamos from './pages/ondeEstamos';
import Apinhamento from './pages/apinhamento';
import Diastema from './pages/diastema';
import Sobremordida from './pages/sobremordida';
import MordidaCruzada from './pages/mordidaCruzada';
import MordidaAberta from './pages/mordidaAberta';
import Progmatismo from './pages/progmatismo';
import Overjet from './pages/overjet';

function Routes() {
  return (
    <Switch>
      <ErrorBoundaryRoute exact path="/" component={Home} />
      <ErrorBoundaryRoute path="/aparelho-invisivel" component={AparelhoInvisivel} />
      <ErrorBoundaryRoute path="/clareamento" component={Clareamento} />
      <ErrorBoundaryRoute path="/preco" component={Preco} />
      <ErrorBoundaryRoute path="/agenda" component={Agenda} />
      <ErrorBoundaryRoute path="/depoimentos" component={Depoimentos} />
      <ErrorBoundaryRoute path="/duvidas" component={Duvidas} />
      <ErrorBoundaryRoute path="/onde-estamos" component={OndeEstamos} />
      <ErrorBoundaryRoute path="/apinhamento" component={Apinhamento} />
      <ErrorBoundaryRoute path="/diastema" component={Diastema} />
      <ErrorBoundaryRoute path="/sobremordida" component={Sobremordida} />
      <ErrorBoundaryRoute path="/mordida-cruzada" component={MordidaCruzada} />
      <ErrorBoundaryRoute path="/mordida-aberta" component={MordidaAberta} />
      <ErrorBoundaryRoute path="/progmatismo" component={Progmatismo} />
      <ErrorBoundaryRoute path="/overjet" component={Overjet} />
      <ErrorBoundaryRoute path="/" component={PageNotFound} />
    </Switch>
  );
}

export default Routes;
