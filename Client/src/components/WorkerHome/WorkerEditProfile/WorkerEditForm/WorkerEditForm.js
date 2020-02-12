import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Button, TextField} from '@material-ui/core';
import axios from 'axios';



class WorkerEditForm extends Component {
    state = {
        worker : {
        firstName: '',
        lastName: '',
        birthday: '',
        email: '',
        password: '',
        confirmPw: '',
        contactNumber: '',
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
            worker: {
                ...this.state.worker,
                firstName: this.props.worker.firstName,
                lastName:  this.props.worker.lastName,
                birthday:  this.props.worker.birthday,
                address:  this.props.worker.address,
                email: this.props.worker.email,
                password:  this.props.worker.password,
                contactNumber:  this.props.worker.contactNumber,
                facebook: this.props.worker.facebook,
                twitter: this.props.worker.twitter,
                profilePicUrl: this.props.worker.profilePicUrl,
                profilePicId : this.props.worker.profilePicId
                
            }

        });
    }

    //change state with input
    handleInput = (event) => {
        this.setState({
            ...this.state,
            worker: {
                ...this.state.worker,
                [event.target.id]: event.target.value
               
            }
        })
    }

    //changing password
    handlePwSubmit = () => {
        if(this.state.worker.password === this.state.worker.confirmPw) {
            const details = {
                email: this.state.worker.email,
                password: this.state.worker.password
            }
            axios.post('http://localhost:4000/worker/updatePw', details)
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
        const updatedWorker = {
            firstName: this.state.worker.firstName,
            lastName:  this.state.worker.lastName,
            birthday:  this.state.worker.birthday,
            email: this.state.worker.email,
            contactNumber:  this.state.worker.contactNumber,
            password:  this.state.worker.password,
            profilePicUrl: this.state.worker.profilePicUrl,
            profilePicId : this.state.worker.profilePicId,
            facebook: this.state.worker.facebook,
            twitter: this.state.worker.twitter,
           
        };
        console.log(updatedWorker);
        axios.post('http://localhost:4000/worker/updateWorker', updatedWorker)
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
                        value={this.state.worker.firstName}
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
                        value={this.state.worker.lastName}
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
                    id="contactNumber"
                    label="Contact Number"
                    margin="dense"
                    variant="outlined"
                    multiline
                    rowsMax="4"
                    value={this.state.worker.contactNumber}
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
                    value={this.state.worker.facebook}
                    onChange={this.handleInput}
                    fullWidth
                    />
    
                    <TextField
                    id="twitter"
                    label="Twitter"
                    margin="dense"
                    variant="outlined"
                    value={this.state.worker.twitter}
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
        worker: state.user,
        token: state.token
    }
}

export default connect(mapStateToProps,null)(WorkerEditForm);