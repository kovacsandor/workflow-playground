import React from 'react';
import { Workflow } from './Workflow';
import { Home } from './Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

export function App(): JSX.Element {
    return (
        <>
            <h1>Workflow playground</h1>
            <BrowserRouter>
                <Switch>
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
