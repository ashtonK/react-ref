import React from 'react';
import OverallRating from './components/overall-rating/overall-rating';
import {QuestionBreakdown} from './components/question-breakdown';

export default class Report extends React.Component {
    render() {
        console.log('Reports page');
        return (
            <div>
                <OverallRating/>
                <QuestionBreakdown></QuestionBreakdown>
            </div>
        );
    }
}

