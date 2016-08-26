import React from 'react';
import {Route, IndexRoute} from 'react-router';

import {DataProcessing} from './data-processing';
import {DataCollection} from './data-collection';
import {Error} from './core/components/error';
import {Invalid} from './data-collection/components/invalid';
import {Done} from './data-collection/components/survey-done';
import {SurveyInfo} from './data-collection/components/survey-info';
import {SurveyQuestions} from './data-collection/components/survey-questions';
import {SurveyConfirm} from './data-collection/components/survey-confirm';

import {Login} from './data-processing/components/login';
import {ManageUsers} from './data-processing/components/manage-users';
import {Home} from './data-processing/components/home';
import {ReviewList} from './data-processing/components/home/review-list';
import {CreateReview} from './data-processing/components/create-review';
import {Report} from './data-processing/components/reports';


export let routes = (
    <div>
        <Route path="/" component={Login}></Route>
        <Route path="survey" component={DataCollection}>
            <IndexRoute components={SurveyInfo}/>
            <Route path="questions" components={SurveyQuestions}/>
            <Route path="confirm" components={SurveyConfirm}/>
        </Route>
        <Route path="done" component={Done}/>
        <Route path="invalid" component={Invalid}/>
        <Route path="error" component={Error}/>
        <Route path="/processing" component={DataProcessing}>
            <Route path="home" component={Home}>
                <IndexRoute  component={ReviewList}>
                </IndexRoute>
            </Route>
            <Route path="manageUsers" component={ManageUsers}></Route>
            <Route path="createReview" component={CreateReview}></Route>
            <Route path="report" component={Report}></Route>
        </Route>
    </div>
);
