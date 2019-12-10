import React from 'react';
import {Switch, Route} from 'react-router-dom';

import routePath from './constants/path';

import CreateResume from "./components/Pages/CreateResume";
import NotFound from "./components/Pages/NotFoundPage";
import SearchRequisition from "./components/Pages/SearchRequisition";

const Routes = props => {
    return (
        <Switch>
            <Route path={routePath.createResume} exact component={CreateResume}/>
            <Route path={routePath.searchJob} exact component={SearchRequisition}/>
            <Route component={NotFound}/>
        </Switch>
    );
};

export default Routes;
