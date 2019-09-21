import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout/Layout';
<<<<<<< HEAD
//import HomePage from './components/HomePage/HomePage';
import WorkerRegistration from './components/RegistrationPages/WorkerRegistration/WorkerRegistration';
import About from './components/About/About';
const app = () => {
  return (
    <div>
      <Layout>
        <About/> 
      </Layout>
    </div>
=======
import CustomerHome from './components/CustomerHome/CustomerHome';


const app = () => {
  return (
    <BrowserRouter>
      <div>
      <Switch>
        <Route path="/customer" component={CustomerHome}/>
        <Route path="/" component={Layout}/> 
      </Switch>
      </div>
    </BrowserRouter>
    
>>>>>>> 87bdc3e577016c731aa9d218d45ad90d880cbec2
  );
}

/*<Route path="/customer" exact component={CustomerLayout}/>
        <Route path="/worker" exact component={WorkerLayout}/>*/
export default app;
