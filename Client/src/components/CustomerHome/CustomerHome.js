import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CustomerHeader from './CustomerHeader/CustomerHeader';
import CustomerDash from './CustomerDash/CustomerDash';
import PostJob from './PostJob/PostJob';
import MyJobs from './MyJobs/MyJobs';
import Test from './Test/Test';
import EditProfile from './EditProfile/Editprofile';

const CustomerHome = (props) => {

    return (
        <React.Fragment>
            <CustomerHeader history={props.history}/>
            <Switch>
                <Route path={props.match.url} exact component={CustomerDash}/>
                <Route path={props.match.url + '/post_job'} component={PostJob}/>
                <Route path={props.match.url + '/my_jobs'} component={MyJobs}/>
                <Route path={props.match.url + '/test'} component={Test}/>
                <Route path={props.match.url + '/edit'} component={EditProfile}/>
            </Switch>
        </React.Fragment>
    );

    
};

export default CustomerHome;