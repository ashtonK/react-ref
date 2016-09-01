import React from 'react';
import css from './review-list-filter.css';

import classNames from 'classnames/bind';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

let cx = classNames.bind(css);
export default class ReviewListFilter extends React.Component {
    constructor(){
        super();
        this.state = {
            viewByFilter: 'Client'
        };
    }
    handleChange(){
        console.log('ha');
    }
    render() {
        return (
            <div>
                <div className={cx({
                    filterBarContainer: true
                }) }>
                    <div className={ cx({
                        filterContainer: true
                    }) }>
                    <div>
                    Sort By:
                    </div>
                        <DropDownMenu value={this.state.viewByFilter} onChange={this.handleChange}>
                            <MenuItem value={1} primaryText="Client" />
                            <MenuItem value={2} primaryText="Program Name" />
                            <MenuItem value={3} primaryText="Status" />
                            <MenuItem value={4} primaryText="Participant Count" />
                            <MenuItem value={5} primaryText="End Date" />
                        </DropDownMenu>
                    </div>
                    <div className={ cx({
                        viewOptionContainer: true
                    }) }>
                        <i className="material-icons">view_headline</i>
                        <i className="material-icons">view_module</i>
                    </div>
                </div>
            </div>
        );
    }
}
