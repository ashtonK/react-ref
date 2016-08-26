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
            .once('value',function(snapshot){
                snapshot.forEach(function(childSnapshot){
                    var reviewInfo= childSnapshot.val();
                    reviewInfo.key =childSnapshot.key;
                    reviewListDB.push(reviewInfo);
                });
            });
    }
}

let reviewService = new ReviewService();

export default reviewService;
