import React from 'react';
import css from '../survey-info/survey-info.css';
import {Link} from 'react-router';

export default class SurveyQuestions extends React.Component{
    render(){
        let welcomeTitle = 'Question';
        let welcomeMessage = 'See questions:';
        console.log('Quesion');
        return(
            <div>
                <div className={css.participantInfoTitle}>{welcomeTitle}</div>
                <div className={css.welcome}>{welcomeMessage}</div>
                <div className={css.participantInfoForm}>
                    <form>
                        <label>Label</label>
                        <input placeholder=""/>
                    </form>
                </div>
                <Link to="/survey">Info</Link>
            </div>
        );
    }
}
