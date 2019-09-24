import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout/Layout';
import CustomerHome from './components/CustomerHome/CustomerHome';

import { connect } from 'react-redux';
import * as actions from './store/actions/auth';


class App extends Component {
  //to automatically log in if there is a token in local storage
  componentDidMount () {
    this.props.onTryAutoSignup();
  }

  render() {
    return (
      <BrowserRouter>
        <div>
        <Switch>
          <Route path="/customer" component={CustomerHome}/>
          <Route path="/" component={Layout}/> 
        </Switch>
        </div>
      </BrowserRouter>
      
    );
    }  
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  }
}

export default connect(null,mapDispatchToProps)(App);
