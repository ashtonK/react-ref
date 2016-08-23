import React from 'react';

import {ReviewListView} from './review-list-view';
import {ReviewListFilter} from './review-list-filter';
import {ReviewCardView} from './review-card-view';

export default class ReviewList extends React.Component {

    render() {
        console.log('review');
        return (
            <div>
                <ReviewListFilter></ReviewListFilter>
                <ReviewListView></ReviewListView>
                <ReviewCardView></ReviewCardView>
            </div>
        );
    }
}


