import React , { Component } from 'react';
import MyTextField from '../../UI/TextField/TextField';
import './CustomerRegistration.css';
import PasswordField from '../../UI/TextField/PasswordField';
import OrangeButton from '../../UI/OrangeButton/OrangeButton';
import Grid from '@material-ui/core/Grid';

class CustomerRegistration extends Component {


    render() {
        return(
            <div className="CustomerRegistrationOuterDiv">
                <div className="CustomerRegistrationInnerDiv">
                    <h5 className="text-uppercase text-center">Registration</h5>
                <form>
                    <MyTextField
                    id="fname"
                    label="First Name"
                    placeholder="Insert First Name"
                    helperText=""
                    />

                    <MyTextField
                    id="lname"
                    label="Last Name"
                    placeholder="Insert Last Name"
                    helperText=""
                    />

                    <MyTextField
                    id="birthday"
                    label="Birthday"
                    placeholder="Insert birth day"
                    helperText=""
                    />

                    <MyTextField
                    id="address"
                    label="Address"
                    placeholder="Insert Address"
                    helperText=""
                    />

                    <MyTextField
                    id="email"
                    label="E-mail"
                    placeholder="Insert Email"
                    helperText=""
                    />

                    <MyTextField
                    id="username"
                    label="Username"
                    placeholder="Insert Username"
                    helperText=""
                    />

                    <PasswordField
                    id="password"
                    label="Password"
                    />

                     <PasswordField
                    id="confirmPassword"
                    label="Confirm Password"
                    />
                    <br/>
                    <br/>
                    <button className="btn btn-block btn-primary">Register</button>
                    <button className="btn btn-block btn-danger">Clear</button>
                    <p className="text-muted">have an account?</p>
                    <a href="/">Sign in</a>


                </form>
            </div>
            </div>
            
        );
    }
};

export default CustomerRegistration;