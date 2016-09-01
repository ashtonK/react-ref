import firebase from 'firebase';

class ReportService {
    constructor() {
    }

    getParticipantsByReview(reviewParticipantData){
        firebase.database().ref('/participants/')
        .once('value',function(snapshot){
            snapshot.forEach(function(childSnapshot){
                var participant = childSnapshot.val();
                if(participant.review == 'lcp1'){
                    reviewParticipantData.push(participant);
                }
            });
        });
        return reviewParticipantData;
    }

    //For Pie Chart
    getTotalAvgByReview(){
        var responseCount = 0;
        var reposneTotal = 0;
        firebase.database().ref('/participants/')
            .once('value',function(snapshot){
                snapshot.forEach(function(childSnapshot){
                    var participant = childSnapshot.val();
                    if(participant.review == 'lcp1'){
                        for(let partCategory of participant.question_categories){
                            for(let question of partCategory.question_list){
                                reposneTotal = reposneTotal + question.response;
                                responseCount = responseCount + 1;
                            }
                        }
                    }
                });
            });
        var average = (reposneTotal / responseCount);
        console.log('Average: '+ average);
    }

    //For Bar Chart
    getQuestionTotalAvgByReview(){
        var questionIndexValues = {};
        var questionIndexCount = {};
        firebase.database().ref('/templates')
            .once('value',function(snapshot){
                snapshot.forEach(function(childSnapshot){
                    var template = childSnapshot.val();
                    if(childSnapshot.key == 'template1'){
                        for(let templateCategories of template.question_categories){
                            for(let teamplateQuestion of templateCategories.question_list){
                                questionIndexValues[teamplateQuestion.item] = 0;
                                questionIndexCount[teamplateQuestion.item] = 0;
                            }
                        }
                    }
                });
                firebase.database().ref('/participants/')
                    .once('value',function(snapshot){
                        snapshot.forEach(function(childSnapshot){
                            var participant = childSnapshot.val();
                            if(participant.review == 'lcp1'){
                                for(let partCategory of participant.question_categories){
                                    for(let question of partCategory.question_list){
                                        questionIndexValues[question.index] = questionIndexValues[question.index] +question.response;
                                        questionIndexCount[question.index] = questionIndexCount[question.index] + 1;
                                    }
                                }
                            }
                        });
                        console.log(questionIndexValues);
                        console.log(questionIndexCount);
                        for (var key in questionIndexValues) {
                            questionIndexValues[key] = (questionIndexValues[key] / questionIndexCount[key]);
                        }
                        console.log(questionIndexValues);
                        return questionIndexValues;
                    });
            });
    }

     //For Bar Chart
//     getQuestionAvgByReviewByFilter(avgValues){
//         var questionIndexCategories = {};
//         var questionIndexCount = {};
//         firebase.database().ref('/participants/')
//         .once('value').then(function(snapshot){
//             snapshot.forEach(function(childSnapshot){
//                 var participant = childSnapshot.val();
//                 if(participant.review == 'lcp1'){
//                     for(let partInfoList of participant.info_list){
//                         for(let partInfo of partInfoList.question_list){
//                             if(partInfo.index == 'role'){
//                                 for(let partCategory of participant.question_categories){
//                                     if(!questionIndexCategories[partCategory.catName]) {
//                                         questionIndexCategories[partCategory.catName] = {};
//                                     }
//                                     if(!questionIndexCount[partCategory.catName]){
//                                         questionIndexCount[partCategory.catName] = {};
//                                     }
//                                     for(let question of partCategory.question_list){
//                                         if(!questionIndexCategories[partCategory.catName][partInfo.response]){
//                                             questionIndexCategories[partCategory.catName][partInfo.response] = {};
//                                         }
//                                         if(!questionIndexCount[partCategory.catName][partInfo.response]){
//                                             questionIndexCount[partCategory.catName][partInfo.response] = {};
//                                         }
//                                         if(!questionIndexCategories[partCategory.catName][partInfo.response][question.index]){
//                                             questionIndexCategories[partCategory.catName][partInfo.response][question.index] = 0;
//                                         }
//                                         if(!questionIndexCount[partCategory.catName][partInfo.response][question.index]){
//                                             questionIndexCount[partCategory.catName][partInfo.response][question.index] = 0;
//                                         }
//                                         questionIndexCategories[partCategory.catName][partInfo.response][question.index] = questionIndexCategories[partCategory.catName][partInfo.response][question.index] + question.response;
//                                         questionIndexCount[partCategory.catName][partInfo.response][question.index] = questionIndexCount[partCategory.catName][partInfo.response][question.index] + 1;
//                                     }
//                                 }
//                             }
//                         }
//                     }
//                 }
//             });


// // headers

//             //get averages
//             for(let catKey in questionIndexCategories){
//                 var avgFilterValues = [];
//                 for(let key in questionIndexCategories[catKey]){
//                     var avgQuestionValues = [];
//                     var headerValues = [];
//                     avgQuestionValues.push(key);
//                     headerValues.push('');
//                     var count = 0;
//                     for(let questionKey in questionIndexCategories[catKey][key]){
//                         avgQuestionValues.push( questionIndexCategories[catKey][key][questionKey] / questionIndexCount[catKey][key][questionKey]);
//                         count = count +1;
//                         headerValues.push(count);
//                     }
//                     avgFilterValues.push(avgQuestionValues);
//                 }
//                 avgValues[catKey] = avgFilterValues;
//             }
//             console.log('In Once');
//             console.log(avgValues);
//             return avgValues;
//         });
//     }
}

let reportService = new ReportService();

export default reportService;

