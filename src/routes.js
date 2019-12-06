import React from 'react';
import {Switch, Route} from 'react-router-dom';

import routePath from './constants/path';

import CreateResume from "./components/Pages/CreateResume";
import NotFound from "./components/Pages/NotFoundPage";

const Routes = props => {
    return (
        <Switch>
            <Route path={routePath.createResume} exact component={CreateResume}/>
            <Route component={NotFound}/>
        </Switch>
    );
};

export default Routes;
