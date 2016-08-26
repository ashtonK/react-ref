import {observable,action} from 'mobx';
import reviewService from '../services/review.service';

export class ReviewStore {
    @observable reviewListDB =[];
    @observable editedReviewId = null;
    @observable editedReview =null;
    @observable reviewMap = {};  // updated by reviewService

    init(){
        this.editedReviewId='default';
        this.fetchReviewList();
    }

    @action
    editExistingReview(reviewId){
        this.editedReviewId = reviewId;
        console.log('store has :'+this.editedReviewId);
        this.editedReview=null;
    }
    @action
    fetchReviewList() {
        this.reviewListDB=[];
        reviewService.fetchReviews(this.reviewListDB);
    }


}

