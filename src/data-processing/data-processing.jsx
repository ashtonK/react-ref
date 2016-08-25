import React from 'react';
import {Appbar} from '../core/components/appbar';
import {Navbar} from './components/navbar';
import css from './data-processing.css';
import {observer, inject} from 'mobx-react';

@inject('store')
@observer
export default class DataProcessing extends React.Component{
    constructor(props){
        super(props);
        this.props.store.checkLogin();
    }
    render(){
        console.log('Processing');
        return(
            <div>
                <Appbar></Appbar>
                <Navbar></Navbar>
                <div className={css.mainPage}>
                    <div className={css.pageContainer}>
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}

