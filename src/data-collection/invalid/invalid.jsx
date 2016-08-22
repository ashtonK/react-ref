import React from 'react';
import css from './invalid.css';

export default class Invalid extends React.Component{

    render(){
        return(
            <div className={css.invalid}>The survey you are trying to reach is not currently active.</div>
        );
    }
}
