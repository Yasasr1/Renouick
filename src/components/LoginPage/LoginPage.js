import { Component } from 'react';
import React from 'react';
import './LoginPage.css';
import Typography from '@material-ui/core/Typography';
import AccountBoxRoundedIcon from '@material-ui/icons/AccountBoxRounded';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';




class LoginPage extends Component  {
   
    render() {
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
                    />

                    <br/>
                    <br/>
                    <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
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

export default LoginPage;