import React from 'react';
import { Switch } from 'react-router-dom';
import ErrorBoundaryRoute from './shared/error/error-boundary-route';
import PageNotFound from './shared/error/page-not-found';

function Routes() {
    return (
        <Switch>
            <ErrorBoundaryRoute exact path="/" component={() => <div>CONTEUDO</div>} />
            <ErrorBoundaryRoute path="/" component={PageNotFound} />
        </Switch>
    );
}

export default Routes;
