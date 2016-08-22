import React from 'react';
import {AdminDashList} from './admin-dash-list-view';

export default class AdminDash extends React.Component {

    render() {
        return (
            <div>
                <h2>Admin Home</h2>
                Filters
                <AdminDashList></AdminDashList>
            </div>
        );
    }
}


