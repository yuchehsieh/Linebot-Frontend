import React from 'react';
import {Switch, Route} from 'react-router-dom';

import routePath from './constants/path';

import CreateResume from "./components/Pages/CreateResume";
import NotFound from "./components/Pages/NotFoundPage";
import SearchRequisition from "./components/Pages/SearchRequisition";
import RequisitionDetail from "./components/Pages/RequisitionDetail";

const Routes = props => {
    return (
        <Switch>
            <Route path={routePath.createResume} exact component={CreateResume}/>
            <Route path={routePath.searchRequisition} exact component={SearchRequisition}/>
            <Route path={`${routePath.requisitionDetail}/:id`} component={RequisitionDetail}/>
            <Route component={NotFound}/>
        </Switch>
    );
};

export default Routes;
