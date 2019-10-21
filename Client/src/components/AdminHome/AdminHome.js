import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AdminHeader from './AdminHeader/AdminHeader';
import AdminDash from './AdminDash/AdminDash';
import AdminRegistration from './AdminRegistration/AdminRegistration';
import EditAdminProfile from './EditAdminProfile/EditAdminProfile';
//import MyJobs from './MyJobs/MyJobs';

const AdminHome = (props) => {

    return (
        <React.Fragment>
            <AdminHeader history={props.history}/>
            <Switch>
                <Route path={props.match.url} exact component={AdminDash}/>
                <Route path={props.match.url + '/admin_registration'} component={AdminRegistration} />
                <Route path={props.match.url + '/edit_admin_profile'} component={EditAdminProfile}/>
            </Switch>
        </React.Fragment>
    );

    
};

export default AdminHome;