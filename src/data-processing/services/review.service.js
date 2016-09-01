import firebase from 'firebase';

class ReviewService {

    constructor(){
        this.reviewRef = firebase.database().ref('/reviews/');
    }
    saveNewReview(review){
        return this.reviewRef.push(review).key;
    }
    saveExistingIdea(reviewId,review){
        firebase.database().ref('/reviews/'+reviewId).set(review);
    }
    fetchReviews(reviewListDB) {
        firebase.database().ref('/reviews/')
            .once('value',function(data){
                data.forEach(function(childData){
                    var reviewInfo= childData.val();
                    reviewInfo.key =childData.key;
                    reviewListDB.push(reviewInfo);
                });
            });
    }
}

let reviewService = new ReviewService();

export default reviewService;
