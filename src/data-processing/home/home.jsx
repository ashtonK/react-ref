import React from 'react';

export default class Home extends React.Component {

    render() {
        console.log('Home');
        return (
            <div>
                <h2>Home</h2>
                <div>{this.props.children}</div>
                <h2>Home2</h2>
            </div>
        );
    }
}


