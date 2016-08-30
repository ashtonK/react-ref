import React from 'react';
const styles = {
    active: {
        display: 'inherit',
        backgroundColor: '#333'
    },
    inactive:  {
        display: 'none',
        backgroundColor: '#333'
    },
};
export default class ReviewListElement extends React.Component {

    constructor() {
        super();
        this.state = {
            active: false
        };
        this.toggleAccordion = this.toggleAccordion.bind(this);
    }
    toggleAccordion(){
        this.setState({
            active: !this.state.active
        });
    }
    render() {
        const stateStyle = this.state.active ? styles.active : styles.inactive;
        return (
            <div>
                <button onClick={() => { console.log(this.props); } }>DEBUG</button>
                <button onClick={() => { this.props.onSelectReview(this.props.reviewInfo.key); } }>GO TO REVIEW</button>
                <div>
                <a onClick ={this.toggleAccordion}>
                {this.props.reviewInfo.client}
                </a>
                <p style={stateStyle}>
                 {this.props.reviewInfo.program}
                </p>
                </div>
            </div>
        );
    }
}

