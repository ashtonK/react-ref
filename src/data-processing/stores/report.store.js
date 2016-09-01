import {action, observable} from 'mobx';
import reportService from '../services/report.service';
import ReportUtils from '../components/reports/reports-utils';

export class ReportStore {
    @observable categoryDataAvg = [];
    @observable viewScore = null;
    @observable viewName = null;
    @observable categoryAvg = [];
    @observable categoryTotals = [];

    @observable reviewParticipantData = [];
    @observable avgValues = {};
    @observable headerValues = [];
    @observable dataTotals = [];
    @observable isLoading;


    init() {
        console.log('Report Init');
        // this.categoryDataAvg =  [['Team 1',1,2,3],['Team 2',4,5,3],['Team 3',4,1,5],['Team 4',4,1,5],['Team 5',4,1,5]];
        // this.headerValues = ['','1','2','3','4','5'];
        // this.dataTotals = ['Team Total',1,2,3,4,5];
        this.viewScore = [3];
        this.viewName = 'Vision';
        this.categoryAvg = [
            {
                'catName' :'Vision',
                'avg' : 3
            },
            {
                'catName' :'Greg',
                'avg' : 5
            }
        ];
        this.isLoading = true;
        Promise.resolve(reportService.getParticipantsByReview(this.reviewParticipantData)).then((reviewParticipantData) => {
            console.log('Data Promise Done');
            for(let partKey in reviewParticipantData){
                console.log(reviewParticipantData[partKey]);
            }
            reviewParticipantData.map((data) => {
                console.log('Map');
                console.log(data);
            });
            for (let part of reviewParticipantData){
                console.log('For Loop');
                console.log(part);
            }
            Promise.resolve(ReportUtils.getQuestionAvgByReviewByFilter(reviewParticipantData,this.avgValues,this.headerValues,this.dataTotals)).then((data) => {
                console.log('Promise Done, Start Then');
                console.log(data);
                if(this.avgValues){
                    console.log('Values: ');
                    console.log(this.avgValues);
                    for(let key in this.avgValues){
                        console.log('Key: ' +key);
                        if(key == 'Vision'){
                            console.log('Vision');
                            console.log(this.avgValues[key]);
                            this.categoryDataAvg = this.avgValues[key];
                            this.categoryTotals = this.dataTotals[key];
                            console.log('T1');
                            this.isLoading = false;
                        }
                    }
                }
            });
        });

    }

    @action
    changeCategoryDataAvg(viewName) {
        if(viewName == 'Greg'){
            Promise.resolve(reportService.getQuestionAvgByReviewByFilter(this.avgValues)).then((data) => {
                console.log('Data');
                console.log(data);
                if(this.avgValues){
                    console.log('Avg Values');
                    console.log(this.avgValues);
                    for(let key in this.avgValues){
                        console.log('Test1');
                        if(key == 'Vision'){
                            console.log('Vision');
                            console.log(this.avgValues[key]);
                        }
                    }
                }
                // var dataCategory = data['Vision'];
                // console.log(dataCategory);
                // this.categoryDataAvg =  [['Team 1',1,1,1],['Team 2',2,2,2],['Team 3',3,3,3],['Team 4',4,4,4],['Team 5',5,5,5]];
                // this.categoryDataAvg = dataCategory;
            });
            this.headers = ['','1','2','3','4','5'];
            this.dataTotals = ['Team Total',1,2,3,4,5];
            this.viewScore = [5];
            this.viewName = 'Greg';
        }
    }
    @action
    debug(){
        console.log(this.avgValues);
        // reportService.getQuestionAvgByReviewByFilter();
    }
}
