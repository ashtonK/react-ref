import React from 'react';
import style from './admin-dash-view-list.css';
import {Collapsible, CollapsibleItem} from 'react-materialize';

export default class AdminDashList extends React.Component { 

    render() {
        return (
            <div>
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
            </div>
        );
    }
}
