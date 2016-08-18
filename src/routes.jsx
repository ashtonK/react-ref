import React from 'react';
import {Route, IndexRoute} from 'react-router';
import {Shell} from './data-processing/shell';
import {Login} from './Login';
import {ManageUsers} from './data-processing/ManageUsers';

export let routes = (
    <div>
        <Route path="/" component={Login}></Route>
        <Route path="processing" component={Shell}>
            <IndexRoute component={ManageUsers}/>
            <Route path="ManageUsers" component={ManageUsers}></Route>
        </Route>
        // <Route path="processing" component={Shell}></Route>
    </div>
);
