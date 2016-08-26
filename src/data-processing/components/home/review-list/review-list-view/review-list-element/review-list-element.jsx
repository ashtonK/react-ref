import React from 'react';
import {observer, inject} from 'mobx-react';
import {browserHistory} from 'react-router';


@inject('reviewInfo')
@observer
export default class ReviewListElement extends React.Component {
    constructor(props){
        super(props);
        this.routeToReport = this.routeToReport.bind(this);
    }
    render() {
        return (
			<div>
            <button onClick={this.routeToReport}>GO TO REVIEW</button>
            {this.props.reviewInfo}
			</div>
			);
    }
    routeToReport(){
        console.log(this.props.reviewInfo);
        browserHistory.push('/processing/manageUsers');
    }
}
