import React from 'react';
import css from './appbar.css';
import image from '../images/Plato-Blue-01.svg';

export default class Appbar extends React.Component{
    render(){
        let ReviewTitle = 'Title of Survey';
        return(
            <div>
                <nav>
                    <div className={css.navContainer}>
                        <img className={css.navLogo} src={image}/>
                        <div className={css.navTitle}>{ReviewTitle}</div>
                    </div>
                </nav>
            </div>
        );
    }
}
