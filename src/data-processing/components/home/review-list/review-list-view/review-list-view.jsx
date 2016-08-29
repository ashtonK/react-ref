import React from 'react';
import {observer, inject} from 'mobx-react';

import {ReviewListElement} from './review-list-element';
import {browserHistory} from 'react-router';

@inject('store')
@observer
export default class ReviewListView extends React.Component {
    constructor(props){
        super(props);
        this.onSelectReview = this.onSelectReview.bind(this);
        this.Debug = this.Debug.bind(this);
    }
    render() {
        const {reviewStore} = this.props.store;
        const {reviewListDB} = reviewStore;
        return (
			<div>
            <ul>
            {reviewListDB.map(review =>
                <li><ReviewListElement reviewInfo={review} onSelectReview={this.onSelectReview} ></ReviewListElement></li>)}
            </ul>
            <button onClick={this.Debug}>DEBUG</button>
			</div>
			);
    }
    onSelectReview(id){
        const {reviewStore} = this.props.store;
        reviewStore.editExistingReview(id);
        browserHistory.push('/processing/report');
        console.log('Here1');
        console.log(reviewStore);
        let temp = reviewStore.fetchReviewList();
        console.log(temp);
        console.log('Here2');
    }
    Debug(){
        const {reviewStore} = this.props.store;
        const {reviewListDB} = reviewStore;
        console.log(reviewListDB);
    }
}
