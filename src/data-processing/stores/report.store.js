import {action, observable} from 'mobx';

export class ReportStore {
    @observable categoryDataAvg = [];
    @observable headers = null;
    @observable dataTotals = null;
    @observable viewScore = null;
    @observable viewName = null;
    @observable categoryAvg = [];


    init() {
        this.categoryDataAvg =  [['Team 1',1,2,3],['Team 2',4,5,3],['Team 3',4,1,5],['Team 4',4,1,5],['Team 5',4,1,5]];
        this.headers = ['','A','B','C'];
        this.dataTotals = ['Team Total',1,3,5];
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
    }

    @action
    changeCategoryDataAvg(viewName) {
        if(viewName == 'Greg'){
            this.categoryDataAvg =  [['Team 1',1,1,1],['Team 2',2,2,2],['Team 3',3,3,3],['Team 4',4,4,4],['Team 5',5,5,5]];
            this.headers = ['','A','B','C'];
            this.dataTotals = ['Team Total',1,3,5];
            this.viewScore = [5];
            this.viewName = 'Greg';
        }
    }
}
