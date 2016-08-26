import React from 'react';
import {observer, inject} from 'mobx-react';

import {ReviewListElement} from './review-list-element';

@inject('store')
@observer
export default class ReviewListView extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        const {reviewStore} = this.props.store;
        const {reviewList} = reviewStore;
        return (
			<div>
			<ul>
			{reviewList.map(review =>
                <li><ReviewListElement reviewInfo={review}></ReviewListElement></li>)}
			</ul>
			</div>
			);
    }
}
