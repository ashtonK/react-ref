import React from 'react';
import style from './admin-dash-view-list.css';
import {Collapsible, CollapsibleItem} from 'react-materialize';

<<<<<<< HEAD:src/data-processing/admin-dash-view/admin-dash-list-view/admin-dash-list-view.jsx
export default class AdminDashList extends React.Component { 
=======
export default class ReviewListFilter extends React.Component {
>>>>>>> d7741007d3d3c27e697cdd7a0b6125a38d584dff:src/data-processing/home/review-list/review-list-filter/review-list-filter.jsx

    render() {
        return (
            <div>
<<<<<<< HEAD:src/data-processing/admin-dash-view/admin-dash-list-view/admin-dash-list-view.jsx
                <h3>Admin List</h3>
                <div className={style.lcpListHeader}>
                    <div className={style.collapseArrow}>
                    </div>
                    <div className={style.lcpClientHeader}>
                        Client
                    </div>
                    <div className={style.lcpProgramHeader}>
                        Program
                    </div>
                    <div className={style.lcpTitleHeader}>
                        Title
                    </div>
                    <div className={style.lcpStatusHeader}>
                        Status
                    </div>
                    <div className={style.lcpTotalParticipants}>
                        Total Participants
                    </div>
                    <div className={style.lcpEndDate}>
                        End Date
                    </div>
                </div>
                <Collapsible popout={false} accordion={false}>
                    <CollapsibleItem header='Company Name'>
                        This is the inside text, does it work?
                    </CollapsibleItem>
                    <CollapsibleItem header='Second Company Name'>
                        This is the second inside text.
                    </CollapsibleItem>
                </Collapsible>
=======
                <h3>Review Filter</h3>
>>>>>>> d7741007d3d3c27e697cdd7a0b6125a38d584dff:src/data-processing/home/review-list/review-list-filter/review-list-filter.jsx
            </div>
        );
    }
}
