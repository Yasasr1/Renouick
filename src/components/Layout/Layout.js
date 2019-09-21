import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from '../Header/Header';
import HomePage from '../HomePage/HomePage';
import WorkerRegistration from '../RegistrationPages/WorkerRegistration/WorkerRegistration';
import CustomerRegistration from '../RegistrationPages/CustomerRegistration/CustomerRegistration';
import Login from '../LoginPage/LoginPage';
import FAQ from '../FAQ/FAQ'
import About from '../About/About';


const layout = (props) => {
    

    return (
        <React.Fragment>
            <Header/>
            <Switch>
                <Route path={props.match.url} exact component={HomePage}/>
                <Route path={props.match.url + "worker_reg"} exact component={WorkerRegistration}/>
                <Route path={props.match.url + "customer_reg"} exact component={CustomerRegistration}/>
                <Route path={props.match.url + "login"} exact component={Login}/>
                <Route path={props.match.url + "faq"} exact component={FAQ}/>
                <Route path={props.match.url + "about"} exact component={About}/>

            </Switch>
        </React.Fragment>
    );
};

export default layout;