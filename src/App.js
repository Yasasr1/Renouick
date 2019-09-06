import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';


import Layout from './components/Layout/Layout';
import HomePage from './components/HomePage/HomePage';
import WorkerRegistration from './components/RegistrationPages/WorkerRegistration/WorkerRegistration';
import CustomerRegistration from './components/RegistrationPages/CustomerRegistration/CustomerRegistration';
import Login from './components/LoginPage/LoginPage';
import FAQ from './components/FAQ/FAQ';


const app = () => {
  return (
    <BrowserRouter>
      <div>
      <Layout>
        <Switch>
          <Route path="/" exact component={HomePage}/>
          <Route path="/worker_reg" exact component={WorkerRegistration}/>
          <Route path="/customer_reg" exact component={CustomerRegistration}/>
          <Route path="/login" exact component={Login}/>
          <Route path="/faq" exact component={FAQ}/>


        </Switch>
      </Layout>
      </div>
    </BrowserRouter>
    
  );
}


export default app;
