import React from 'react';
import {ScoreTable} from './components/score-table';
import {SectionAvg} from './components/section-avg';
import {observer,inject} from 'mobx-react';

@inject('store')
@observer
export default class QuestionBreakdown extends React.Component {
    constructor(props){
        super(props);
        this.changeCategoryDataAvg = this.changeCategoryDataAvg.bind(this);
    }
    changeCategoryDataAvg(val){
        console.log('Change: '+ val);
        const {reportStore} = this.props.store;
        reportStore.changeCategoryDataAvg(val);
    }
    render() {
        const {reportStore} = this.props.store;
        const {categoryDataAvg,headers,dataTotals,viewScore,viewName,categoryAvg} = reportStore;
        return (
            <div>
                <div>
                    Average Score /Section
                </div>
                <div>
                    <SectionAvg
                    categoryAvg={categoryAvg}
                    changeCategoryDataAvg={this.changeCategoryDataAvg}
                    />
                    <ScoreTable
                    data={categoryDataAvg}
                    headers={headers}
                    dataTotals={dataTotals}
                    viewScore={viewScore}
                    viewName={viewName}
                    />
                </div>
            </div>
        );
    }
}
