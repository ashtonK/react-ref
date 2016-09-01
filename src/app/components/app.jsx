import React from 'react';
import {Router} from 'react-router';
import {observer, Provider} from 'mobx-react';
import {routes} from '../../routes';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


const muiTheme = getMuiTheme({
    fontFamily: 'Roboto, sans-serif',
    palette: {
        primary1Color: '#03C6EF',
    }
});
export default observer(['store'], function App({store, history}) {
    return (
        <MuiThemeProvider muiTheme={muiTheme}>
            <Provider store={store}>
                <Router history={history}>
                        {routes}
                </Router>
            </Provider>
        </MuiThemeProvider>
    );
});
