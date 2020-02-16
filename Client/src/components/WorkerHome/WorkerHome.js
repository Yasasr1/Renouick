import React from 'react';
import { Switch, Route } from 'react-router-dom';
import WorkerHeader from './WorkerHeader/WorkerHeader';
import WorkerDash from './WorkerDash/WorkerDash';
import BrowseJobs from './BrowseJobs/BrowseJobs';
import viewJob from './ViewJob/ViewJob';
import MyBids from './MyBids/MyBids';
import Chat from './Chat/ChatComponent';
import EditProfile from './WorkerEditProfile/WorkerEditProfile';


const WorkerHome = (props) => {

    return (
        <React.Fragment>
            <WorkerHeader history={props.history}/>
            <Switch>
                <Route path={props.match.url} exact component={WorkerDash}/>
                <Route path={props.match.url + '/jobs'} component={BrowseJobs}/>
                <Route path={props.match.url + '/viewJob'} component={viewJob}/>
                <Route path={props.match.url + '/myBids'} component={MyBids}/>
                <Route path={props.match.url + '/chat'} component={Chat}/>
                <Route path={props.match.url + '/editProfile'} component={EditProfile}/>
            </Switch>
        </React.Fragment>
    );

    
};

export default WorkerHome;