import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CustomerHeader from './CustomerHeader/CustomerHeader';
import CustomerDash from './CustomerDash/CustomerDash';
import PostJob from './PostJob/PostJob';

const CustomerHome = (props) => {

    return (
        <React.Fragment>
            <CustomerHeader/>
            <Switch>
                <Route path={props.match.url} exact component={CustomerDash}/>
                <Route path={props.match.url + '/post_job'} component={PostJob}/>
            </Switch>
        </React.Fragment>
    );

    
};

export default CustomerHome;