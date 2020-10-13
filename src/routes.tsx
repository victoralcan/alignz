import React from 'react';
import { Switch, Route } from 'react-router-dom';

function Routes() {
    return (
        <Switch>
            <Route exact path="/" render={(props) => <div {...props}>INICIAL</div>} />
        </Switch>
    );
}

export default Routes;
