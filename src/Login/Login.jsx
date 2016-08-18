import React from 'react';
import {Link} from 'react-router';
import {Appbar} from '../data-processing/shell/components/appbar';

export default class Login extends React.Component {
    render() {
        console.log('Login');
        return (
            <div>
                <Appbar></Appbar>
                <h2>Login Page</h2>
                <Link to="/processing">Home</Link>
            </div>
        );
    }
}


