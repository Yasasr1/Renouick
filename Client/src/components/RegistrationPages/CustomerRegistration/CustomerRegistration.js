import React , { Component } from 'react';
import MyTextField from '../../UI/TextField/TextField';
import './CustomerRegistration.css';
import PasswordField from '../../UI/TextField/PasswordField';
import {TextField} from '@material-ui/core';
import validator from 'validator';
import axios from 'axios';
import { Link } from 'react-router-dom';


class CustomerRegistration extends Component {
    inputValues = {
        
            firstName: {value: '', isValid: true, message: ''},
            lastName: {value: '', isValid: true, message: ''},
            birthday: {value: '', isValid: true, message: ''},
            address: {value: '', isValid: true, message: ''},
            email: {value: '', isValid: true, message: ''},
            username: {value: '', isValid: true, message: ''},
            password: {value: '', isValid: true, message: ''},
            confirmPassword: {value: '', isValid: true, message: ''}
        
    }

    state = {...this.inputValues};

    inputHandler = (event) => {
        const updatedState = {
            ...this.state,
            [event.target.id]: {
                ...this.state[event.target.id],
                value: event.target.value,
            }
        };

        this.setState(updatedState)
    }

    formValidationHandler = () => {
        const copiedState = {...this.state};
        let isConfirmed = true;

        if(!copiedState.firstName.value){
            copiedState.firstName.isValid = false;
            copiedState.firstName.message = '*Required';
            isConfirmed = false;
        } else  {
            copiedState.firstName.isValid = true;
            copiedState.firstName.message = '';
        }
        if(!copiedState.lastName.value){
            copiedState.lastName.isValid = false;
            copiedState.lastName.message = '*Required';
            isConfirmed = false;
        } else  {
            copiedState.lastName.isValid = true;
            copiedState.lastName.message = '';
        }

        if(!copiedState.address.value){
            copiedState.address.isValid = false;
            copiedState.address.message = '*Required';
            isConfirmed = false;
        } else  {
            copiedState.address.isValid = true;
            copiedState.address.message = '';
        }

        if(!copiedState.username.value){
            copiedState.username.isValid = false;
            copiedState.username.message = '*Required';
            isConfirmed = false;
        } else  {
            copiedState.username.isValid = true;
            copiedState.username.message = '';
        }
        
        if (!validator.isEmail(copiedState.email.value)) {
            copiedState.email.isValid = false;
            copiedState.email.message = 'Not a valid email address';
            isConfirmed = false;
        } else  {
            copiedState.email.isValid = true;
            copiedState.email.message = '';
        }

        if(!copiedState.password.value){
            copiedState.password.isValid = false;
            copiedState.password.message = '*Required';
            isConfirmed = false;
        } else  {
            copiedState.password.isValid = true;
            copiedState.password.message = '';
        }

        if(copiedState.password.value !== copiedState.confirmPassword.value || !copiedState.confirmPassword.value){
            copiedState.confirmPassword.isValid = false;
            copiedState.confirmPassword.message = 'Password do not match';
            isConfirmed = false;
        } else  {
            copiedState.confirmPassword.isValid = true;
            copiedState.confirmPassword.message = '';
        }

        this.setState(copiedState);
        return isConfirmed;
        
    }

    submitHandler = (event) => {
        
        event.preventDefault();
        if (this.formValidationHandler()) {
          // form processing here....
          const newCustomer = {
            firstName: this.state.firstName.value,
            lastName: this.state.lastName.value,
            birthday: this.state.birthday.value,
            address: this.state.address.value,
            email: this.state.email.value,
            username: this.state.username.value,
            password: this.state.password.value
            }


            //posting to customer schema
          axios.post('http://localhost:4000/registration/addCustomer', newCustomer)
            .then(res => {
                console.log(res.data);
                
            })
            .catch(error => {
                console.log(error.data);
                
            })

            const newUser = {
                email: this.state.email.value,
                password: this.state.password.value,
                userType: 'customer'
            }

            //posting to user schema
            axios.post('http://localhost:4000/registration/addUser', newUser)
                .then(res => {
                    console.log(res.data);
                })
                .catch(error => {
                    console.log(error.responce);
                })


        }
    }
    clearFormHandler = () => {
        this.setState({...this.inputValues});
    }

    render() {
        return(
            <div className="CustomerRegistrationOuterDiv">
                <div className="CustomerRegistrationInnerDiv">
                    <h5 className="text-uppercase text-center">Registration</h5>
                <form>
                    <MyTextField
                    id="firstName"
                    error={!this.state.firstName.isValid}
                    label="First Name"
                    placeholder="Insert First Name"
                    helperText={!this.state.firstName.isValid ? <p style={{color: 'red'}}>{this.state.firstName.message}</p> : null}
                    changed={this.inputHandler}
                    />

                    <MyTextField
                    error={!this.state.lastName.isValid}
                    id="lastName"
                    label="Last Name"
                    placeholder="Insert Last Name"
                    helperText={!this.state.lastName.isValid ? <p style={{color: 'red'}}>{this.state.lastName.message}</p> : null}
                    changed={this.inputHandler}
                    />
        
                    <TextField
                    id="birthday"
                    label="Birthday"
                    type="date"
                    defaultValue="2017-05-24"
                    style={{ margin: 12, width: '95%' }}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    onChange={this.inputHandler}
                    />
                     

                    <MyTextField
                    error={!this.state.address.isValid}
                    id="address"
                    label="Address"
                    placeholder="Insert Address"
                    helperText={!this.state.address.isValid ? <p style={{color: 'red'}}>{this.state.address.message}</p> : null}
                    changed={this.inputHandler}
                    />

                    <MyTextField
                    error={!this.state.email.isValid}
                    id="email"
                    label="E-mail"
                    placeholder="Insert Email"
                    helperText={!this.state.email.isValid ? <p style={{color: 'red'}}>{this.state.email.message}</p> : null}
                    changed={this.inputHandler}
                    />

                    <MyTextField
                    error={!this.state.username.isValid}
                    id="username"
                    label="Username"
                    placeholder="Insert Username"
                    helperText={!this.state.username.isValid ? <p style={{color: 'red'}}>{this.state.username.message}</p> : null}
                    changed={this.inputHandler}
                    />

                    <PasswordField
                    error={!this.state.password.isValid}
                    id="password"
                    label="Password"
                    changed={this.inputHandler}
                    />

                    <PasswordField
                    error={!this.state.confirmPassword.isValid}
                    id="confirmPassword"
                    label={!this.state.confirmPassword.isValid ?  "Don't match" : "Confirm Password"}
                    changed={this.inputHandler}
                    />
                    <br/>
                    <br/>
                    <button onClick={this.submitHandler} className="btn btn-block btn-primary">Register</button>
                    <button type="reset" onClick={this.clearFormHandler} className="btn btn-block btn-danger">Clear</button>
                    <p className="text-muted">have an account?</p>
                    <Link to="/login">Sign in</Link>


                </form>
            </div>
            </div>
            
        );
    }
};

export default CustomerRegistration;