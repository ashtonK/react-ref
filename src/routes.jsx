import React from 'react';
import {Route, IndexRoute} from 'react-router';

import {DataProcessing} from './data-processing';
import {DataCollection} from './data-collection';
import {Error} from './data-collection/error';
import {Invalid} from './data-collection/invalid';
import {Done} from './data-collection/survey-done';
import {SurveyInfo} from './data-collection/survey-info';
import {SurveyQuestions} from './data-collection/survey-questions';
import {SurveyConfirm} from './data-collection/survey-confirm';

import {Login} from './data-processing/login';
import {ManageUsers} from './data-processing/manage-users';
import {Home} from './data-processing/home';
import {ReviewList} from './data-processing/home/review-list';
import {ReviewPage} from './data-processing/home/review-page';

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
        <Route path="processing" component={DataProcessing}>
            <IndexRoute path="Home" component={Home}>
                <IndexRoute path="/" component={ReviewList}></IndexRoute>
                <Route path="review" component={ReviewPage}/>
            </IndexRoute>
            <Route path="ManageUsers" component={ManageUsers}></Route>
        </Route>
    </div>
);
