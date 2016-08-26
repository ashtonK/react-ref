import React from 'react';
import OverallRating from './components/overall-rating/overall-rating';

export default class Report extends React.Component {
    render() {
        console.log('Reports page');
        return (
            <div>
                <OverallRating/>
            </div>
        );
    }
}
