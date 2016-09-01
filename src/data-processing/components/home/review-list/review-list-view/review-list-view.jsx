import React from 'react';
import {observer, inject} from 'mobx-react';

import {ReviewListElement} from './review-list-element';
import {browserHistory} from 'react-router';
import css from './review-list-view.css';
import classNames from 'classnames/bind';
let cx = classNames.bind(css);
@inject('store')
@observer
export default class ReviewListView extends React.Component {
    constructor(props) {
        super(props);
        this.onSelectReview = this.onSelectReview.bind(this);
        this.Debug = this.Debug.bind(this);
    }
    render() {
        const {reviewStore} = this.props.store;
        const {reviewListDB} = reviewStore;
        return (
            <div>
                <div className={cx({
                    reviewListHeader: true})}>
                    <div className={cx({
                        reviewColumHeader: true,iconColumn:true
                    })}></div>
                    <div className={cx({
                        reviewColumHeader: true,clientColumn:true
                    })}>Client</div>
                    <div className={cx({
                        reviewColumHeader: true,programColumn:true
                    })}>Program Title</div>
                    <div className={cx({
                        reviewColumHeader: true,statusColumn:true
                    })}>Status</div>
                    <div className={cx({
                        reviewColumHeader: true,partCountColumn:true
                    })}>Participant Count</div>
                    <div className={cx({
                        reviewColumHeader: true,dateColumn:true
                    })}>Due Date</div>
                </div>
                {reviewListDB.map(review =>
                    <div><ReviewListElement reviewInfo={review} onSelectReview={this.onSelectReview} ></ReviewListElement></div>) }
                <button onClick={this.Debug}>DEBUG</button>
            </div>
        );
    }
    onSelectReview(id) {
        const {reviewStore} = this.props.store;
        reviewStore.editExistingReview(id);
        browserHistory.push('/processing/report');
    }
    Debug() {
        const {reviewStore} = this.props.store;
        const {reviewListDB} = reviewStore;
        console.log(reviewListDB);
    }
}
