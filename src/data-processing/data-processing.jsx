import React from 'react';
// import {Appbar} from '../core/components/appbar';
// import {Navbar} from './components/navbar';
// import css from './data-processing.css';
import {observer, inject} from 'mobx-react';

@inject('store')
@observer
export default class DataProcessing extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const {dataProcessing} = this.props.store;
        const {test} = dataProcessing;
        console.log('Processing');
        return(
            <div>
            <p>{test}</p>
            </div>
        );
    }
}

