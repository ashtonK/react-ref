import React from 'react';
import {observer, inject} from 'mobx-react';

@inject('store')
@observer
export default class ReviewPage extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        const {reviewStore} = this.props.store;
        const {reviewList} = reviewStore;
        console.log(reviewStore);
        console.log(reviewList);
        return (
			<div>
			<ul>
			{reviewList.map(function(listValue){
    return <li>{listValue}</li>;
			})}
			</ul>
			</div>
			);
    }
}
