import React from 'react';
import AppBar from 'material-ui/AppBar';

export default class Appbar extends React.Component {
    render() {
        console.log('Appbar');
        return(
          <AppBar
          title="Plato"
          showMenuIconButton={false}
          />
        );
    }
}
