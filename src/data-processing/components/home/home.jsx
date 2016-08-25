import React from 'react';
import {observer, inject} from 'mobx-react';
import {Link} from 'react-router';

@inject('store')
@observer
export default class Home extends React.Component {

    constructor(props){
        super(props);
    }
    render() {
        const {reviewStore} = this.props.store;
        const {reviewList} = reviewStore;
        console.log(reviewStore);
        console.log(reviewList);
        return(
            <div>
                <Link to="/processing/home/review" >Home</Link>
                <h2>Home</h2>
                <div>{this.props.children}</div>
            </div>
        );
    }
}


