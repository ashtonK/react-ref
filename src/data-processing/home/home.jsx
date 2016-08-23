import React from 'react';

export default class Home extends React.Component {

    render() {
        console.log('Home');
        return (
            <div>
                <h2>Home</h2>
                {this.props.children}
            </div>
        );
    }
}


