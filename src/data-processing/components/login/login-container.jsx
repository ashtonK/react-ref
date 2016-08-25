import React from 'react';
import {Appbar} from '../../../core/components/appbar';
import Login from './login';
import {observer,inject} from 'mobx-react';

@inject('store')
@observer
export default class LoginContainer extends React.Component {
    constructor(props){
        super(props);
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onPswdChange = this.onPswdChange.bind(this);
        this.onSignIn = this.onSignIn.bind(this);
        this.props.store.checkLogin();
    }
    componentWillMount() {
        const {authStore} = this.props.store;
        authStore.startCredentials();
    }
    render() {
        const {authStore} = this.props.store;
        const {emailPswdSignIn,debug} = authStore;
        return (
            <div>
                <Appbar/>
                <Login
                    emailPswdSignIn={emailPswdSignIn}
                    onEmailChange={this.onEmailChange}
                    onPswdChange={this.onPswdChange}
                    onSignIn={this.onSignIn}
                    debug={debug}
                />
            </div>
        );
    }
    onEmailChange(e){
        const {authStore} = this.props.store;
        authStore.setEmailPswdField('email', e.target.value);
    }
    onPswdChange(e){
        const {authStore} = this.props.store;
        authStore.setEmailPswdField('password', e.target.value);
    }
    onSignIn(event) {
        event.stopPropagation();
        event.preventDefault();

        const {authStore} = this.props.store;
        authStore
            .signIn()
            .catch((error) => {
                authStore.setEmailPswdField('error', error);
            });
        this.props.store.checkLogin();
    }
}

