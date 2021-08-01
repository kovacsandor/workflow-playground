import React from 'react';
import { Workflow } from './Workflow';
import { WorkflowNew } from './WorkflowNew';
import { Home } from './Home';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

export function App(): JSX.Element {
    return (
        <>
            <h1>Workflow playground</h1>
            <BrowserRouter>
                <ul>
                    <li>
                        <Link to="/">Workflows</Link>
                    </li>
                    <li>
                        <Link to={`/workflow/new`}>Add new workflow</Link>
                    </li>
                </ul>
                <Switch>
                    <Route exact={true} path="/workflow/new">
                        <WorkflowNew />
                    </Route>
                    <Route path="/workflow/:id">
                        <Workflow />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </BrowserRouter>
        </>
    );
}
