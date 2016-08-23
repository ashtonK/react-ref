import React from 'react';
import {observer, inject} from 'mobx-react';

import style from './info-page-config.css';

@inject('store')
@observer
export default class InfoPageConfig extends React.Component {

    static defaultProps = {
        type: '',
    };

    static propTypes = {
        type: React.PropTypes.string,
    };

    render() {
        return (
            <div className={ style.infoPageConfig }>
                <h2>InfoPageConfig</h2>
            </div>
        );
    }

}
