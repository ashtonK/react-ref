import React from 'react';
// import {Tabs, Tab} from 'material-ui/Tabs';
// import {ManageUsers} from '../../../manageUsers';
// import {AdminDash} from '../../../admin-dash-view';
import s from './navbar.css';
import {Link,IndexLink} from 'react-router';

var injectTapEventPlugin = require('react-tap-event-plugin');
injectTapEventPlugin();

export default () => (
    <nav>
        <ul className={s.navigation}>
            <li className={s.navListItem}>
                <IndexLink to="processing" className={s.navOption} activeClassName={s.active}>Home</IndexLink>
            </li>
            <li className={s.navListItem}>
                <Link to="ManageUsers" className={s.navOption} activeClassName={s.active}>Manage Users</Link>
            </li>
            <li className={s.navListItem}>
                <Link to="processing" className={s.navOption} activeClassName={s.active}>Create New LCP</Link>
            </li>
        </ul>
    </nav>
);


