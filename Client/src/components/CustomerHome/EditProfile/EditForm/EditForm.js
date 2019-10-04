import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Button, TextField} from '@material-ui/core';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import axios from 'axios';



class EditForm extends Component {
    state = {
        customer : {
        firstName: '',
        lastName: '',
        birthday: '',
        address: '',
        email: '',
        password: '',
        confirmPw: '',
        userName: '',
        facebook: '',
        twitter: '',
        profilePicUrl: '',
        profilePicId: ''
        },
        isValid: true
    }

    //mapping redux store to local component state. otherwise can't change the inputs
    //when the customer dashboard load. it'll dispatch the action to save customer data to redux store
    //initial values of the inputs will be set to the values in the redux store
    componentDidMount() {
        this.setState({
            ...this.state,
            customer: {
                ...this.state.customer,
                firstName: this.props.customer.firstName,
                lastName:  this.props.customer.lastName,
                birthday:  this.props.customer.birthday,
                address:  this.props.customer.address,
                email: this.props.customer.email,
                password:  this.props.customer.password,
                userName:  this.props.customer.userName,
                facebook: this.props.customer.facebook,
                twitter: this.props.customer.twitter,
                profilePicUrl: this.props.customer.profilePicUrl,
                profilePicId : this.props.customer.profilePicId
                
            }

        });
    }

    //change state with input
    handleInput = (event) => {
        this.setState({
            ...this.state,
            customer: {
                ...this.state.customer,
                [event.target.id]: event.target.value
               
            }
        })
    }

    //changing password
    handlePwSubmit = () => {
        if(this.state.customer.password === this.state.customer.confirmPw) {
            const details = {
                email: this.state.customer.email,
                password: this.state.customer.password
            }
            axios.post('http://localhost:4000/customer/updatePw', details)
            .then(res => {
                console.log(res);
                alert(res.data);
            })
            .catch(err => {
                console.log(err);
                alert(err);
            })
            this.setState({isValid: true});

        }
        else {
            this.setState({isValid: false});
        }
    }

    handleSubmit = () => {
        const updatedCustomer = {
            firstName: this.state.customer.firstName,
            lastName:  this.state.customer.lastName,
            birthday:  this.state.customer.birthday,
            address:  this.state.customer.address,
            email: this.state.customer.email,
            username:  this.state.customer.userName,
            password:  this.state.customer.password,
            profilePicUrl: this.state.customer.profilePicUrl,
            profilePicId : this.state.customer.profilePicId,
            facebook: this.state.customer.facebook,
            twitter: this.state.customer.twitter,
           
        };
        console.log(updatedCustomer);
        axios.post('http://localhost:4000/customer/updateCustomer', updatedCustomer)
        .then(res => {
            alert(res.data);
        })
        .catch(err => {
            alert(err)
        })
    }


    render() {
        let error = null;
        if(!this.state.isValid) {
            error = <p style={{color: 'red'}}>Password doesn't match!</p>
        }
        return(
            <Grid container justify="flex-start" spacing={2} style={{padding: '30px'}}>
               <Grid item md={8}>
                    <h4>Basic Info</h4>
               </Grid>
               <Grid item md={2}>
                   <Button variant="contained" fullWidth>Cancel</Button>
               </Grid>
               <Grid item md={2}>
                   <Button onClick={this.handleSubmit} variant="contained" color="primary" fullWidth>Save</Button>
               </Grid>
               <Grid container spacing={2}>
                    <Grid item md={6}>
                        <TextField
                        id="firstName"
                        label="First Name"
                        margin="dense"
                        variant="outlined"
                        value={this.state.customer.firstName}
                        onChange={this.handleInput}
                        fullWidth
                        /> 
                    </Grid>
                    <Grid item md={6}>
                        <TextField
                        id="lastName"
                        label="Last Name"
                        margin="dense"
                        variant="outlined"
                        value={this.state.customer.lastName}
                        onChange={this.handleInput}
                        fullWidth
                        />
                    </Grid>
                    <Grid item md={12}>
                    <TextField
                    id="birthday"
                    label="Birthday"
                    type="date"
                    defaultValue="2017-05-24"
                    style={{ margin: 12, width: '95%' }}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    onChange={this.handleInput}
                    />

                        <TextField
                        id="address"
                        label="Address"
                        margin="dense"
                        variant="outlined"
                        multiline
                        rowsMax="4"
                        value={this.state.customer.address}
                        onChange={this.handleInput}
                        fullWidth
                        />
                    </Grid>    
               </Grid>
               <Grid item md={8}>
                    <br/>
                    <h4>External Links</h4>
                    <br/>
               </Grid>
               <Grid item md={12}>
                    <TextField
                    id="facebook"
                    label="Facebook"
                    margin="dense"
                    variant="outlined"
                    value={this.state.customer.facebook}
                    onChange={this.handleInput}
                    fullWidth
                    />
    
                    <TextField
                    id="twitter"
                    label="Twitter"
                    margin="dense"
                    variant="outlined"
                    value={this.state.customer.twitter}
                    onChange={this.handleInput}
                    fullWidth
                    />
    
                </Grid> 
               <Grid item md={8}>
                    <br/>
                    <h4>Security</h4>
                    <br/>
               </Grid>
               <Grid container spacing={2}>
                    <Grid item md={12}>
                        
    
                        <TextField
                        id="password"
                        type="password"
                        label="Change Password"
                        margin="dense"
                        variant="outlined"
                        onChange={this.handleInput}
                        fullWidth
                        /> 
    
                        <TextField
                        id="confirmPw"
                        type="password"
                        label="Confirm Password"
                        margin="dense"
                        variant="outlined"
                        onChange={this.handleInput}
                        fullWidth
                        />
                        <br/>
                        {error}
                        <br/>
                    </Grid>
                    <Grid container justify="flex-end" spacing={2}>
                    <Grid item md={2}>
                        <Button variant="contained" fullWidth>Cancel</Button>
                    </Grid>
                    <Grid item md={2}>
                        <Button onClick={this.handlePwSubmit} variant="contained" color="primary" fullWidth>Save</Button>
                    </Grid>
                    </Grid>
    
                </Grid> 
      
    
            </Grid>
        );
    }
    
};

const mapStateToProps = state => {
    return {
        customer: state.user,
        token: state.token
    }
}

export default connect(mapStateToProps,null)(EditForm);