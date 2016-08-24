import React from 'react';
import css from './survey-info.css';
// import {firebase} from '../../firebase';
import {QuestionItem} from '../question-item';

export default class SurveyInfo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            lcps: [],
            info: []
        };
    }
    componentWillMount(){
        // this.ref = firebase.syncState('lcps',{
        //     context:this,
        //     state:'lcps',
        //     asArray:true
        // });
    }
    render(){
        console.log('Info');
        let welcomeTitle = 'Welcome to the questionnaire ';
        let welcomeMessage =
            `
            Thank you for taking the time to fill out this survey. Please note that the survey is anonymous and your name is optional.
            All other questions are required. Your perspective is valuable and will help highlight areas of the program that are
            going well as well as areas you feel warrant additional focus by the team to minimize delivery risks.
            `;
        let lcpPageInfo = [];
        for(let lcp of this.state.lcps){
            if(lcp.survey.survey_id == '362417'){
                lcpPageInfo = lcp.survey.info_page;
            }
        }
        return(
            <div>
                <div className={css.participantInfoTitle}>{welcomeTitle}</div>
                <div className={css.welcomeMessage}>{welcomeMessage}</div>
                <QuestionItem questionItems={lcpPageInfo}></QuestionItem>
            </div>
        );
    }
}
