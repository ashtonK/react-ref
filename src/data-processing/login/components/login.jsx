import React from 'react';
import {observer} from 'mobx-react';
import { Link} from 'react-router';

@observer(['store'])
export default class Login extends React.Component {
    render() {
        return (
            <div>
                <h2>Login Page</h2>
                <Link to="/processing">Home</Link>
            </div>
        );
    }
}


