import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CustomerHeader from './CustomerHeader/CustomerHeader';
import CustomerDash from './CustomerDash/CustomerDash';

const CustomerHome = (props) => {

    return (
        <React.Fragment>
            <CustomerHeader/>
            <Switch>
                <Route path={props.match.url} component={CustomerDash}/>
            </Switch>
        </React.Fragment>
    );

    
};

export default CustomerHome;