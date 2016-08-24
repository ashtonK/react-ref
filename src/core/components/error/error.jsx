import React from 'react';
import css from './error.css';

export default class Error extends React.Component{

    render(){
        return(
            <div>
                <div className={css.error}>404</div>
                <div className={css.errorMessage}>: The request you made was not found on this server.</div>
            </div>
        );
    }
}
