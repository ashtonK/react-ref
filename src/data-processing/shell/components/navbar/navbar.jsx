import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import {ManageUsers} from '../../../manageUsers';
import {AdminDash} from '../../../admin-dash-view';

var injectTapEventPlugin = require('react-tap-event-plugin');
injectTapEventPlugin();

export default () => (
    <Tabs>
        <Tab label="Home">
            <AdminDash/>
        </Tab>
        <Tab label="Manage Users">
            <ManageUsers/>
        </Tab>
        <Tab label="Create New LCP">
            Will shoe Create LCP
        </Tab>
    </Tabs>
);


