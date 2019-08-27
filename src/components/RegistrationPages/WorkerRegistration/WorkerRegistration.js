import React , { Component } from 'react';
import MyTextField from '../../UI/TextField/TextField';
import './WorkerRegistration.css';
import PasswordField from '../../UI/TextField/PasswordField';
import {TextField} from '@material-ui/core';
import validator from 'validator';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';


class WorkerRegistration extends Component {
    inputValues = {
        
        firstName: {value: '', isValid: true, message: ''},
        lastName: {value: '', isValid: true, message: ''},
        birthday: {value: '', isValid: true, message: ''},
        email: {value: '', isValid: true, message: ''},
        username: {value: '', isValid: true, message: ''},
        password: {value: '', isValid: true, message: ''},
        confirmPassword: {value: '', isValid: true, message: ''},
        workingExperience : {value: '', isValid: true, message: ''},
        workingCategory: {value: '', isValid: true, message: ''}
    
    }
    
    state = {...this.inputValues};

    render() {
        return (
            <div className="WorkerRegistrationOuterDiv">
                <div className="WorkerRegistrationInnerDiv">
                <h5 className="text-uppercase text-center">Customer Registration</h5>
                <form>
                <MyTextField
                    id="firstName"
                    //error={!this.state.firstName.isValid}
                    label="First Name"
                    placeholder="Insert First Name"
                    //helperText={!this.state.firstName.isValid ? <p style={{color: 'red'}}>{this.state.firstName.message}</p> : null}
                   // changed={this.inputHandler}
                    />

                <MyTextField
                id="lastname"
                label="Last Name"
                placeholder="Input Last Name"
                />

                <TextField
                id="birthday"
                label="Birthday"
                type="date"
                //defaultValue="2017-05-24"
                style={{ margin: 12, width: '95%' }}
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={this.inputHandler}
                />

                 <MyTextField
                    error={!this.state.email.isValid}
                    id="email"
                    label="E-mail"
                    placeholder="Insert Email"
                    //helperText={!this.state.email.isValid ? <p style={{color: 'red'}}>{this.state.email.message}</p> : null}
                    //changed={this.inputHandler}
                    />

                    <MyTextField
                    error={!this.state.username.isValid}
                    id="username"
                    label="Username"
                    placeholder="Insert Username"
                    //helperText={!this.state.username.isValid ? <p style={{color: 'red'}}>{this.state.username.message}</p> : null}
                    //changed={this.inputHandler}
                    />

                    <PasswordField
                    //error={!this.state.password.isValid}
                    id="password"
                    label="Password"
                    //changed={this.inputHandler}
                    />

                    <PasswordField
                    //error={!this.state.confirmPassword.isValid}
                    id="confirmPassword"
                    //label={!this.state.confirmPassword.isValid ?  "Don't match" : "Confirm Password"}
                   // changed={this.inputHandler}
                />

                <div className="WorkerRegistrationCheckbox">
                    <FormLabel >Select Worker Catagory</FormLabel>
                </div>

                <FormGroup>
                    <FormControlLabel
                    control={<Checkbox value="plumbing" />}
                    label="Plumbing"
                    />

                    <FormControlLabel
                    control={<Checkbox value="painting" />}
                    label="Painting"
                    />
          
                    <FormControlLabel
                    control={<Checkbox value="electricalWork" />}
                    label="Electrical Work"
                    />

                    <FormControlLabel
                    control={<Checkbox value="grassCutting" />}
                    label="Grass Cutting"
                    />

                    <FormControlLabel
                    control={<Checkbox value="houseCleaning" />}
                    label="House Cleaning"
                    />

                    <FormControlLabel
                    control={<Checkbox value="acRepair" />}
                    label="A/C Repair"
                    />


                </FormGroup>

                


                </form>
                </div>
            </div>
                


           
        );
    }
}

export default WorkerRegistration;