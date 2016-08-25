import React from 'react';
import {observable} from 'mobx';
import {observer, inject} from 'mobx-react';


@inject('store')
@observer
export default class Home extends React.Component {
    homeState = new HomeState();
    constructor(props){
        super(props);
    }
    render() {
        return(
            <div>
                <button onClick ={this.handleInc}>+</button>
                <div>{homeState.count}</div>
                <h2>Home</h2>
                <div>{this.props.children}</div>
            </div>
        );
    }
    handleInc(){
        homeState.getValue();
    }
}


