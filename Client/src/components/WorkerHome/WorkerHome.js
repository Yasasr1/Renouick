import React from 'react';
import { Switch, Route } from 'react-router-dom';
import WorkerHeader from './WorkerHeader/WorkerHeader';
import WorkerDash from './WorkerDash/WorkerDash';
import BrowseJobs from './BrowseJobs/BrowseJobs';
import viewJob from './ViewJob/ViewJob';
import MyBids from './MyBids/MyBids';
import Report from './ReportView/Report';


const WorkerHome = (props) => {

    return (
        <React.Fragment>
            <WorkerHeader history={props.history}/>
            <Switch>
                <Route path={props.match.url} exact component={WorkerDash}/>
                <Route path={props.match.url + '/jobs'} component={BrowseJobs}/>
                <Route path={props.match.url + '/viewJob'} component={viewJob}/>
                <Route path={props.match.url + '/myBids'} component={MyBids}/>
                <Route path={props.match.url + '/report'} component={Report}/>
            </Switch>
        </React.Fragment>
    );

    
};

export default WorkerHome;