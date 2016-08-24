import React from 'react';
import s from './navbar.css';
import {Link,IndexLink} from 'react-router';

var injectTapEventPlugin = require('react-tap-event-plugin');
injectTapEventPlugin();


export default class Navbar extends React.Component {
    render() {
        console.log('Navbar');
        return(
            <nav>
                <ul className={s.navigation}>
                    <li className={s.navListItem}>
                        <IndexLink to="/processing/home" className={s.navOption} activeClassName={s.active}>Home</IndexLink>
                    </li>
                    <li className={s.navListItem}>
                        <Link to="/processing/manageUsers" className={s.navOption} activeClassName={s.active}>Manage Users</Link>
                    </li>
                    <li className={s.navListItem}>
                        <Link to="/processing/createReview" className={s.navOption} activeClassName={s.active}>Create New Review</Link>
                    </li>
                </ul>
            </nav>
        );
    }
}
