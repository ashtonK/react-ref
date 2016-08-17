import React from 'react';
import {Router} from 'react-router';
import {observer, Provider} from 'mobx-react';
import {routes} from '../../routes';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default observer(['store'], function App({store, history}) {

    return (
        <MuiThemeProvider>
            <Provider store={store}>
                <Router history={history}>
                        {routes}
                </Router>
            </Provider>
        </MuiThemeProvider>
    );

});
