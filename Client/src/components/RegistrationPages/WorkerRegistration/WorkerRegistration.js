import React , { Component } from 'react';
import MyTextField from '../../UI/TextField/TextField';
import './WorkerRegistration.css';
import PasswordField from '../../UI/TextField/PasswordField';
import {TextField} from '@material-ui/core';
import validator from 'validator';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import axios from 'axios';
import { Link } from 'react-router-dom';






class WorkerRegistration extends Component {
    inputValues = {
        
        firstName: {value: '', isValid: true, message: ''},
        lastName: {value: '', isValid: true, message: ''},
        birthday: {value: '', isValid: true, message: ''},
        contactNumber: {value: '', isValid: true, message: ''},
        email: {value: '', isValid: true, message: ''},
        password: {value: '', isValid: true, message: ''},
        confirmPassword: {value: '', isValid: true, message: ''},
        workingCategory : {value: [], isValid: true}
    }
    
    state = {...this.inputValues};

    //save input from textfields to state
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
    //save inputs from checkboxes to state
    checkboxInputHandler =(event) => {
        let updatedState = {...this.state};
        let isDeleted = false;

        //check if the value is already in the array. if it's already there that means user is clicking on the checkbox 2nd
        //time and should delete the value
        updatedState[event.target.id].value.map((element,index) => {
            if(element === event.target.value) {
                updatedState[event.target.id].value.splice(index,1);
                isDeleted = true;
            }
            return 0;
        })

        //if true that means value is deleted and should not add it again to the array
        if(isDeleted === false) {
            updatedState = {
                ...this.state,
                [event.target.id]: {
                    ...this.state[event.target.id],
                    value: [...this.state[event.target.id].value,event.target.value]
                }
            };
        }

        this.setState(updatedState);

       
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

        if(copiedState.workingCategory.value.length === 0){
            copiedState.workingCategory.isValid = false;
            isConfirmed = false;
        } else  {
            copiedState.workingCategory.isValid = true;
        }
        
        if (!validator.isEmail(copiedState.email.value)) {
            copiedState.email.isValid = false;
            copiedState.email.message = 'Not a valid email address';
            isConfirmed = false;
        } else  {
            copiedState.email.isValid = true;
            copiedState.email.message = '';
        }
        
        if(!copiedState.contactNumber.value){
            copiedState.contactNumber.isValid = false;
            copiedState.contactNumber.message = '*Required';
            isConfirmed = false;
        } else  {
            copiedState.contactNumber.isValid = true;
            copiedState.contactNumber.message = '';
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
          //posting to worker schema
          const newWorker = {
              firstName: this.state.firstName.value,
              lastName: this.state.lastName.value,
              birthday: this.state.birthday.value,
              contactNumber: this.state.contactNumber.value,
              email: this.state.email.value,
              password: this.state.password.value,
              workingCategory: this.state.workingCategory.value,
              profilePicUrl: '',
              profilePicId: '',
              registrationDate: new Date(),
              totalStars: 0,
              numberOfRatings: 0,
              accountStatus: 'pending'
          }

          axios.post('http://localhost:4000/registration/addWorker', newWorker)
            .then(res => {
                console.log(res.data);
                alert(res.data.worker);
                this.setState({isRegistered: true});
            })
            .catch(error => {
                console.log(error);
                console.log(error.responce);
                alert("Registration Failed");
            })

            //posting to user schema
            const newUser = {
                email: this.state.email.value,
                password: this.state.password.value,
                userType: 'worker',
                accountStatus: 'pending'
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
        return (
            <div className="WorkerRegistrationOuterDiv">
                <div className="WorkerRegistrationInnerDiv">
                    <h5 className="text-uppercase text-center">Worker Registration</h5>
                    <form>
                        <button onClick={this.test}></button>
                        <MyTextField
                        id="firstName"
                        error={!this.state.firstName.isValid}
                        label="First Name"
                        placeholder="Insert First Name"
                        helperText={!this.state.firstName.isValid ? <p style={{color: 'red'}}>{this.state.firstName.message}</p> : null}
                        changed={this.inputHandler}
                        />

                        <MyTextField
                        id="lastName"
                        label="Last Name"
                        placeholder="Input Last Name"
                        error={!this.state.lastName.isValid}
                        helperText={!this.state.lastName.isValid ? <p style={{color: 'red'}}>{this.state.lastName.message}</p> : null}
                        changed={this.inputHandler}
                        />

                        <TextField
                        id="birthday"
                        label="Birthday"
                        type="date"
                        style={{ margin: 12, width: '95%' }}
                        InputLabelProps={{
                        shrink: true,
                        }}
                        onChange={this.inputHandler}
                        />

                        <MyTextField
                        id="contactNumber"
                        error={!this.state.contactNumber.isValid}
                        label="Contact Number"
                        placeholder="Insert Contact Number"
                        helperText={!this.state.contactNumber.isValid ? <p style={{color: 'red'}}>{this.state.contactNumber.message}</p> : null}
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

                        <div className="WorkerRegistrationCheckbox">
                            <FormLabel >Select Working Catagory</FormLabel>
                        </div>

                        <FormGroup>
                            <FormControlLabel
                            control={<Checkbox id="workingCategory" value="plumbing" color="primary" />}
                            onChange={this.checkboxInputHandler}
                            label="Plumbing"
                            />

                            <FormControlLabel
                            control={<Checkbox id="workingCategory" value="painting" color="primary" />}
                            label="Painting"
                            onChange={this.checkboxInputHandler}
                            />
          
                            <FormControlLabel
                            control={<Checkbox id="workingCategory" value="electricalWork" color="primary" />}
                            label="Electrical Work"
                            id="electricalWork"
                            onChange={this.checkboxInputHandler}
                            />

                            <FormControlLabel
                            control={<Checkbox id="workingCategory" value="grassCutting" color="primary" />}
                            label="Grass Cutting"
                            id="grassCutting"
                            onChange={this.checkboxInputHandler}
                            />

                            <FormControlLabel
                            control={<Checkbox id="workingCategory" value="houseCleaning" color="primary" />}
                            label="House Cleaning"
                            id="houseCleaning"
                            onChange={this.checkboxInputHandler}
                            />

                            <FormControlLabel
                            control={<Checkbox id="workingCategory" value="acRepair" color="primary" />}
                            label="A/C Repair"
                            id="acRepair"
                            onChange={this.checkboxInputHandler}
                            />
                        </FormGroup>
                        {!this.state.workingCategory.isValid ? <p style={{color: 'red'}}>Please select work category</p> : null}
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
}

export default WorkerRegistration;