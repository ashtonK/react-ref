import React from 'react';
import {Appbar} from '../core/components/appbar';
import {QuestionNav} from './components/question-nav';
import css from './data-collection.css';
// import {firebase} from '../firebase';
// import {SurveyInfo} from './survey-info';



export default class DataCollection extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            categories: [],
        };
    }
    render(){
        return(
            <div>
                <Appbar></Appbar>
                 <div className={css.mainPage}>
                    <div className={css.progressNav}>
                        <QuestionNav categories= {this.state.categories}/>
                    </div>
                    <div className={css.pageContainer}>
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}
