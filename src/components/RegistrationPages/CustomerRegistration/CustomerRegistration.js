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
                <form>
                    <h2>Customer Registration</h2>
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

                    <Grid container justify="center" spacing={8}>
                        <Grid item>
                            <OrangeButton content="Submit"/>
                        </Grid>
                        <Grid item>
                            <OrangeButton content="Clear"/>
                        </Grid>
                    </Grid>

                </form>
            </div>
            </div>
            
        );
    }
};

export default CustomerRegistration;