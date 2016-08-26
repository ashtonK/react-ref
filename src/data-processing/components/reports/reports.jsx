import React from 'react';
import OverallRating from './components/overall-rating/overall-rating';
import {observer, inject} from 'mobx-react';

@inject('store')
@observer
export default class Report extends React.Component {
    render() {
        const {reviewStore} = this.props.store;
        const {editedReviewId} = reviewStore;
        return (
            <div>
            <div>{editedReviewId}</div>
                <OverallRating/>
            </div>
        );
    }
}
