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
        for(var review of this.reviewListDB){
            if(review.key==reviewId){
                this.editedReview=review;
                break;
            }
        }
    }
    @action
    fetchReviewList() {
        this.reviewListDB=[];
        reviewService.fetchReviews(this.reviewListDB);
    }
    @action
    setCurrentReview(){
    }


}

