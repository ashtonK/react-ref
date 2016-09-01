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

    componentWillMount() {
        const {reportStore} = this.props.store;
        reportStore.init();
    }
    changeCategoryDataAvg(val){
        console.log('Change: '+ val);
        const {reportStore} = this.props.store;
        reportStore.changeCategoryDataAvg(val);
    }
    render() {
        const {reportStore} = this.props.store;
        console.log('Q Breakdown');
        const {categoryDataAvg,headerValues,dataTotals,viewScore,viewName,categoryAvg,isLoading} = reportStore;
        console.log(isLoading);
        console.log(categoryDataAvg);
        console.log(headerValues);
        console.log(dataTotals);
        console.log(viewScore);
        console.log(viewName);
        console.log(categoryAvg);
        if (isLoading) {
            return <div>Loading...</div>;
        }else{
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
                        headers={headerValues}
                        dataTotals={dataTotals}
                        viewScore={viewScore}
                        viewName={viewName}
                        />
                    </div>
                </div>
            );
        }
    }
}
