class ReportUtils{

    getQuestionAvgByReviewByFilter(reviewParticipantData, avgValues,headerValues,dataTotals){
        console.log('getQuestionAvgByReviewByFilter');
        var questionIndexCategories = {};
        var questionIndexCount = {};
        console.log(reviewParticipantData);
        for(let partKey in reviewParticipantData){
            console.log('A');
            console.log(reviewParticipantData[partKey]);
        }
        for(let participant of reviewParticipantData){
            console.log('B');
            if(participant.review == 'lcp1'){
                console.log('T1');
                for(let partInfoList of participant.info_list){
                    console.log('T2');
                    for(let partInfo of partInfoList.question_list){
                        if(partInfo.index == 'role'){
                            console.log('T3');
                            for(let partCategory of participant.question_categories){
                                if(!questionIndexCategories[partCategory.catName]) {
                                    questionIndexCategories[partCategory.catName] = {};
                                }
                                if(!questionIndexCount[partCategory.catName]){
                                    questionIndexCount[partCategory.catName] = {};
                                }
                                for(let question of partCategory.question_list){
                                    console.log('T4');
                                    if(!questionIndexCategories[partCategory.catName][partInfo.response]){
                                        questionIndexCategories[partCategory.catName][partInfo.response] = {};
                                    }
                                    if(!questionIndexCount[partCategory.catName][partInfo.response]){
                                        questionIndexCount[partCategory.catName][partInfo.response] = {};
                                    }
                                    if(!questionIndexCategories[partCategory.catName][partInfo.response][question.index]){
                                        questionIndexCategories[partCategory.catName][partInfo.response][question.index] = 0;
                                    }
                                    if(!questionIndexCount[partCategory.catName][partInfo.response][question.index]){
                                        questionIndexCount[partCategory.catName][partInfo.response][question.index] = 0;
                                    }
                                    questionIndexCategories[partCategory.catName][partInfo.response][question.index] = questionIndexCategories[partCategory.catName][partInfo.response][question.index] + question.response;
                                    questionIndexCount[partCategory.catName][partInfo.response][question.index] = questionIndexCount[partCategory.catName][partInfo.response][question.index] + 1;
                                }
                            }
                        }
                    }
                }
            }
        }
        console.log('T5');
        for(let catKey in questionIndexCategories){
            var avgFilterValues = [];
            var questionTotalAvg = [];
            for(let key in questionIndexCategories[catKey]){
                console.log('T6');
                var avgQuestionValues = [];
                var header = [];
                avgQuestionValues.push(key);
                header.push('');
                var count = 0;
                for(let questionKey in questionIndexCategories[catKey][key]){
                    console.log('T7');
                    avgQuestionValues.push( questionIndexCategories[catKey][key][questionKey] / questionIndexCount[catKey][key][questionKey]);
                    count = count + 1;
                    header.push(count);
                    if(!questionTotalAvg[questionKey]){
                        questionTotalAvg[questionKey] = 0;
                    }
                    questionTotalAvg[questionKey] = questionTotalAvg[questionKey] + questionIndexCategories[catKey][key][questionKey];
                }
                headerValues = header;
                avgFilterValues.push(avgQuestionValues);
            }
            console.log('T8');
            avgValues[catKey] = avgFilterValues;
            if(!dataTotals[catKey]){
                dataTotals[catKey] = {};
            }
            dataTotals[catKey] = questionTotalAvg;
        }
        console.log('T9');
        console.log(avgValues);
        return avgValues;
    }
}

export default new ReportUtils();
