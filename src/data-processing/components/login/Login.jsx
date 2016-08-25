import React from 'react';
import {Link} from 'react-router';
import {Appbar} from '../../../core/components/appbar';
// import css from './Login.css';
import {AuthService} from '../../services';

import {observer, inject} from 'mobx-react';

@inject('store')
@observer
export default class Login extends React.Component {
    // signIn(event, email, password){
    //     console.log('Method');
    //     event.stopPropagation();
    //     event.preventDefault();
    //     AuthService.getCurrentUser();

    //     AuthService.signInWithEmailAndPassword(email, password)
    //         .catch((error) => {
    //             console.log('Error: '+ error);
    //         });
    //     AuthService.observeAuthChanges();
    //     AuthService.createUser(email);
    // }
    debug(){
        console.log(AuthService);
        AuthService.signInWithEmailAndPassword('gmannheim@sapient.com', '123456')
            .catch((error) => {
                console.log('Error: '+ error);
            });
        AuthService.getCurrentUser();
    }
    // <form>
//     <div>
//         <div className={css.loginTitle}>Login</div>
//     </div>
//     <div>
//         <label className={css.loginLabel}>Email Address</label>
//         <input className={css.inputArea}  type="email" value={email} required/>
//     </div>
//     <div>
//         <label className={css.loginLabel}>Password</label>
//         <input className={css.inputArea} type="password" value={password} required/>
//     </div>
//     <div>
//         <button type='submit'>Login</button>
//     </div>
// </form>
    render() {
        const {dataProcessing} = this.props.store;
        const {authStore} = dataProcessing;
        const {authTest} = authStore;
        console.log('Login');
        return (
            <div>
                <Appbar></Appbar>
                <h2>Login Page</h2>
                <p>{authTest}</p>
                <div><Link to="/processing">Processing</Link></div>
                <div><Link to="/survey">Survey</Link></div>
                <button onClick={this.debug}>Debug</button>

            </div>
        );
    }
}


