import React from 'react';
import css from './review-list-element.css';

import classNames from 'classnames/bind';

let cx = classNames.bind(css);
export default class ReviewListElement extends React.Component {

    constructor() {
        super();
        this.state = {
            active: false
        };
        this.toggleAccordion = this.toggleAccordion.bind(this);
    }
    toggleAccordion() {
        this.setState({
            active: !this.state.active
        });
    }
    render() {
        const bodyStyle = this.state.active ? css.reviewBodyActive : css.reviewBodyInactive;
        const arrowIcon = this.state.active ? 'expand_more' : 'chevron_right';
        return (
            <div className={css.reviewContainer}>
                <div className={css.reviewHeader} onClick ={this.toggleAccordion}>
                    <div className={cx({
                        iconColumn: true, reviewColumn: true
                    })}>
                        <i className="material-icons"  style={{ color: '#04C5F0', height: '20px' }}>{arrowIcon}</i>
                    </div>
                    <div className={cx({
                        clientColumn: true, reviewColumn: true
                    }) }>{this.props.reviewInfo.client}</div>
                    <div className={cx({
                        programColumn: true, reviewColumn: true
                    }) }>{this.props.reviewInfo.program}</div>
                    <div className={cx({
                        statusColumn: true, reviewColumn: true
                    }) }>{this.props.reviewInfo.status}</div>
                    <div className={cx({
                        partCountColumn: true, reviewColumn: true
                    }) }>Participant Count</div>
                    <div className={cx({
                        dateColumn: true, reviewColumn: true
                    }) }>{this.props.reviewInfo.end_date}</div>
                </div>
                <div>
                    <div className={bodyStyle}>
                        {this.props.reviewInfo.program}
                        <button onClick={() => { this.props.onSelectReview(this.props.reviewInfo.key); } }>GO TO REVIEW</button>
                    </div>
                </div>
            </div>
        );
    }
}

