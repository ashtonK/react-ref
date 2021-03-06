import React from 'react';
import OverallRating from './components/overall-rating/overall-rating';
import {observer, inject} from 'mobx-react';
import {QuestionBreakdown} from './components/question-breakdown';

@inject('store')
@observer
export default class Report extends React.Component {
    render() {
        const {reviewStore} = this.props.store;
        const {editedReview} = reviewStore;
        console.log('Reports page');
        return (
            <div>
            <div>{editedReview.key}</div>
                <OverallRating/>
                <QuestionBreakdown></QuestionBreakdown>
            </div>
        );
    }
}

