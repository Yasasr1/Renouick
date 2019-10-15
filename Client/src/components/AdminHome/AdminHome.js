import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AdminHeader from './AdminHeader/AdminHeader';
import AdminDash from './AdminDash/AdminDash';
//import PostJob from './PostJob/PostJob';
//import MyJobs from './MyJobs/MyJobs';

const AdminHome = (props) => {

    return (
        <React.Fragment>
            <AdminHeader history={props.history}/>
            <Switch>
                <Route path={props.match.url} exact component={AdminDash}/>
                <Route path={props.match.url + '/paths danna galapena ewa'} />
                <Route path={props.match.url + '/paths danna galapena ewa'} />
            </Switch>
        </React.Fragment>
    );

    
};

export default AdminHome;