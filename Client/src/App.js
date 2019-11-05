import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout/Layout';
import CustomerHome from './components/CustomerHome/CustomerHome';
import AdminHome from './components/AdminHome/AdminHome';
import WorkerHome from './components/WorkerHome/WorkerHome';

import { connect } from 'react-redux';
import * as actions from './store/actions/auth';


class App extends Component {
  //to automatically log in if there is a token in local storage
  componentDidMount () {
    this.props.onTryAutoSignup();
  }

  render() {
      //routing guards for unauthenticated users
      //logged out
      let routes = (
        <Switch>
          <Route path="/customer" render={() => <h1>not found</h1>}/>
          <Route path="/worker" render={() => <h1>not found</h1>}/>
          <Route path="/admin" component={AdminHome}/>
          <Route path="/" component={Layout}/>
        </Switch>
      );
      //logged in as customer
      if(this.props.isAuthenticated && this.props.userType === "customer") {
        routes = (
          <Switch>
          <Route path="/customer" component={CustomerHome}/>
          <Route path="/worker" render={() => <h1>not found</h1>}/>
          <Route path="/admin" render={() => <h1>not found</h1>}/>
          <Route path="/" component={Layout}/> 
        </Switch>
        );
      }

      //logged in as worker
      if(this.props.isAuthenticated && this.props.userType === "worker") {
        routes = (
          <Switch>
          <Route path="/customer" render={() => <h1>not found</h1>} />
          <Route path="/worker" component={WorkerHome}/>
          <Route path="/admin" render={() => <h1>not found</h1>}/>
          <Route path="/" component={Layout}/> 
        </Switch>
        );
      }

      //logged in as admin
      /*
      if(this.props.isAuthenticated && this.props.userType === "admin") {
        routes = (
          <Switch>
          <Route path="/customer" render={() => <h1>not found</h1>}/>
          <Route path="/worker" render={() => <h1>not found</h1>}/>
          <Route path="/admin" component={AdminHome}/>
          <Route path="/" component={Layout}/> 
        </Switch>
        );
      }*/
    return (
      <BrowserRouter>
        <div>
        {routes}
        </div>
      </BrowserRouter>
      
    );
    }  
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.token !== null,
    userType: state.userType
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
