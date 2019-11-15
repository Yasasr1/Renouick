import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout/Layout';
import CustomerHome from './components/CustomerHome/CustomerHome';


const app = () => {
  return (
    <BrowserRouter>
      <div>
      <Switch>
        <Route path="/customer" component={CustomerHome}/>
        <Route path="/" exact component={Layout}/> 
      </Switch>
      </div>
    </BrowserRouter>
    
  );
}

/*<Route path="/customer" exact component={CustomerLayout}/>
        <Route path="/worker" exact component={WorkerLayout}/>*/
export default app;
