import React from 'react';
import { Switch } from 'react-router-dom';
import ErrorBoundaryRoute from './shared/error/error-boundary-route';
import PageNotFound from './shared/error/page-not-found';
import Home from './pages/home';
import AparelhoInvisivel from './pages/aparelhoInvisivel';
import Clareamento from './pages/clareamento';
import Preco from './pages/preco';
import Agenda from './pages/agenda';

function Routes() {
    return (
        <Switch>
            <ErrorBoundaryRoute exact path="/" component={Home} />
            <ErrorBoundaryRoute path="/aparelho-invisivel" component={AparelhoInvisivel} />
            <ErrorBoundaryRoute path="/clareamento" component={Clareamento} />
            <ErrorBoundaryRoute path="/preco" component={Preco} />
            <ErrorBoundaryRoute path="/agenda" component={Agenda} />
            <ErrorBoundaryRoute path="/" component={PageNotFound} />
        </Switch>
    );
}

export default Routes;
