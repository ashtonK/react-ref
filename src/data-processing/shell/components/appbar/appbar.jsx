import React from 'react';
import AppBar from 'material-ui/AppBar';

export default class Appbar extends React.Component {
    constructor() {
        super();
        this.state = {
            title : 'Welcome to the Review!',
        };
    }
    render() {
        console.log('Appbar');
        return(
          <AppBar
          title={this.state.title}
          showMenuIconButton={false}
          />
        );
    }
}
