import {observable} from 'mobx';

export class ReviewStore {
    @observable reviewList = [];

    init(){
        this.reviewList = ['Review1','Review2','Review3'];
    }

}

