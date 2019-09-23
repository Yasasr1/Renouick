import { Component } from 'react';
import React from 'react';
import './LoginPage.css';
import Typography from '@material-ui/core/Typography';
import AccountBoxRoundedIcon from '@material-ui/icons/AccountBoxRounded';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import axios from 'axios';

//importing action creators
import * as actions from '../../store/actions/auth';
//importing to connect mapDispatchToProps to this component
import { connect } from 'react-redux';




class LoginPage extends Component  {
    state = {
        email: '',
        password: '',
        error: false
    };

    inputHandler = (event) => {
        let updatedState = {
            [event.target.id]: event.target.value
        };

        this.setState(updatedState);
    };

    submitHandler = () => {

        /*const authInfo = {
            email: this.state.email,
            password: this.state.password
        }

        axios.post('http://localhost:4000/auth', authInfo)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                const error = {...err};
                console.log(error.response.data.msg);
                alert(error.response.data.msg);
            })*/
        this.props.onAuth(this.state.email,this.state.password)   

    };
   
    render() {
        let message = null;
        if(this.state.error) {
            message = <p style={{color: 'red'}}>*Email or password is incorrect</p>
        }
        return (
            <React.Fragment>
                <div className="LoginPageLeft">
                </div>
                <div className="LoginPageRight">
                <AccountBoxRoundedIcon style={{fontSize: '80px', color: 'orange'}} />
                <Typography component="h1" variant="h5">
                     Sign in
                </Typography>
                <form>
                    <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    onChange={this.inputHandler}
                    />

                    <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    onChange={this.inputHandler}
                    />

                    <br/>
                    <br/>
                    {message}
                    <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={this.submitHandler}
                    >
                        Sign In
                    </Button>
                    <br/>
                    <br/>
                    <p className="text-muted">Don't have an account?</p>
                    <Link to="/customer_reg">Register as a customer</Link>
                    <br/>
                    <Link to="/worker_reg">Register as a worker</Link>
                </form>
                </div>
            </React.Fragment>
            
            
        );
    }
 
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email, password) => dispatch(actions.auth(email, password))
    };
}

export default connect(null,mapDispatchToProps)(LoginPage);