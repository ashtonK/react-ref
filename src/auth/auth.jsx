import React from 'react';

import style from './auth.css';

export default class Auth extends React.Component {

    static defaultProps = {
        type: '',
    };

    static propTypes = {
        type: React.PropTypes.string,
    };

    render() {
        return (
            <div className={ style.auth }>
                <h2>Auth</h2>
            </div>
        );
    }

}
