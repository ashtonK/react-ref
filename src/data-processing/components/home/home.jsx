import React from 'react';
import {observer, inject} from 'mobx-react';

@inject('store')
@observer
export default class Home extends React.Component {

    constructor(props){
        super(props);
    }
    render() {

        return(
            <div>
                <div>{this.props.children}</div>
            </div>
        );
    }
}


