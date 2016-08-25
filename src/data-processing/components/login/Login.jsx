import React from 'react';
import css from './login.css';

export default function Login({emailPswdSignIn, onEmailChange,onPswdChange, onSignIn,debug}) {
    const {email, password, error} = emailPswdSignIn;
    return(
        <div>
            <form onSubmit={onSignIn}>
                <div>
                    <div className={css.loginTitle}>Login Please</div>
                </div>
                <div>
                    <label className={css.loginLabel}>Email Address</label>
                    <input className={css.inputArea} type="email" value={email} onChange={onEmailChange}/>
                </div>
                <div>
                    <label className={css.loginLabel}>Password</label>
                    <input className={css.inputArea} type="password" value={password} onChange={onPswdChange}/>
                </div>
                <div>
                    {error ? error.message : null}
                </div>
                <button type="submit">Submit</button>
                <button onClick={debug}>debug</button>
            </form>
        </div>
    );
}
