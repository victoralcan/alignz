import React from 'react';
import { Switch } from 'react-router-dom';
import ErrorBoundaryRoute from './shared/error/error-boundary-route';

function Routes() {
    return (
        <Switch>
            <ErrorBoundaryRoute exact path="/" component={() => <div>INICIAL</div>} />
        </Switch>
    );
}

export default Routes;
