import React from 'react';
import css from './appbar.css';
import image from '../../../assets/images/Plato-Blue-01.svg';
import {observer, inject} from 'mobx-react';
import {Link} from 'react-router';

@inject('store')
@observer
export default class Appbar extends React.Component {
    constructor(props) {
        super(props);
        this.onSignOut = this.onSignOut.bind(this);
    }
    onSignOut(event) {
        event.stopPropagation();
        event.preventDefault();

        const {authStore} = this.props.store;
        authStore.signOut();
    }
    render() {
        let ReviewTitle = 'Title of Survey';
        return (
            <div>
                <nav>
                    <div className={css.navContainer}>
                        <Link to="/processing">
                            <img className={css.navLogo} src={image}/>
                        </Link>
                        <div className={css.navTitle}>{ReviewTitle}</div>
                        <div>
                            <button onClick={this.onSignOut}>Logout</button>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}
