import React , { Component } from 'react';
import MyTextField from '../../UI/TextField/TextField';
import './AdminRegistration.css';
import PasswordField from '../../UI/TextField/PasswordField';
import validator from 'validator';
import axios from 'axios';
//import { Link } from 'react-router-dom';


class AdminRegistration extends Component {
    inputValues = {
        
            firstName: {value: '', isValid: true, message: ''},
            lastName: {value: '', isValid: true, message: ''},
            telephone:{value: '', isValid: true, meddsge: ''},
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
          const newAdmin = {
            firstName: this.state.firstName.value,
            lastName: this.state.lastName.value,
            telephone: this.state.telephone.value,
            email: this.state.email.value,
            username: this.state.username.value,
            password: this.state.password.value,
            facebook: '',
            twitter: '',
            profilePicUrl: '',
            profilePicId: ''
            }


            //posting to customer schema
          axios.post('http://localhost:4000/registration/addAdmin', newAdmin)
            .then(res => {
                console.log(res);
                
            })
            .catch(error => {
                console.log(error);
                
            })

            const newUser = {
                email: this.state.email.value,
                password: this.state.password.value,
                userType: 'admin'
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
            <div className="AdminRegistrationOuterDiv">
                <div className="AdminRegistrationInnerDiv">
                    <h5 className="text-uppercase text-center">Admin Registration</h5>
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
        
                    

                    <MyTextField
                    error={!this.state.telephone.isValid}
                    id="telephone"
                    label="Telephone No"
                    placeholder="Insert Telephone Number"
                    helperText={!this.state.telephone.isValid ? <p style={{color: 'red'}}>{this.state.telephone.message}</p> : null}
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
                   

                </form>
            </div>
            </div>
            
        );
    }
};

export default AdminRegistration;