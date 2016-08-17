import React from 'react';
import {Route, Redirect} from 'react-router';
import {Shell} from './data-processing/shell';

export let routes = (
    <Route path="/" component={Shell}>
        <Redirect from="*" to="/"/>
    </Route>
);
