
import React , { Component } from 'react';
import './EditAdminProfile.css';
import axios from 'axios';
import{ Button, Grid,TextField }from '@material-ui/core';
import { connect } from 'react-redux';



class EditAdminProfile extends Component {
    state = {
        admin : {
        firstName: '',
        lastName: '',
        contactNumber: '',
        email: '',
        username: '',
        password: '',
        confirmPw: ''
        },
        isValid: true
    }
//mapping redux store to local component state. otherwise can't change the inputs
    //when the admin dashboard load. it'll dispatch the action to save customer data to redux store
    //initial values of the inputs will be set to the values in the redux store
    componentDidMount() {
        axios.get('http://localhost:4000/admin/getInfo' , {
            params: {
                email: this.props.email
            },
            headers: {
                'x-auth-token': this.props.token
            }
        })
        .then(res => {
            const admin = res.data;
            console.log("admin: "+admin);
            this.setState({admin: {...admin}});
            console.log(this.state.admin[0])
        }).catch(err => {
            console.log(err);
        })
       /* this.setState({
            ...this.state,
            admin: {
                ...this.state.admin,
                firstName: this.props.admin.firstName,
                lastName:  this.props.admin.lastName,
                contactNumber:  this.props.admin.contactNumber,
                email: this.props.admin.email,
                username: this.props.admin.username,
                password:  this.props.admin.password
                
            }

        });*/
    }

    //change state with input
    handleInput = (event) => {
        this.setState({
            ...this.state,
            admin: {
                ...this.state.admin,
                [event.target.id]: event.target.value
               
            }
        })
    }

    //changing password
    handlePwSubmit = () => {
        if(this.state.admin.password === this.state.admin.confirmPw) {
            const details = {
                email: this.state.admin.email,
                password: this.state.admin.password
            }
            axios.post('http://localhost:4000/admin/updatePw', details)
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
        const updatedAdmin = {
            firstName: this.state.admin.firstName,
            lastName:  this.state.admin.lastName,
            contactNumber:  this.state.admin.contactNumber,
            email: this.state.admin.email,
            username: this.state.admin.username,
            password:  this.state.admin.password,
           
        };
        console.log(updatedAdmin);
        axios.post('http://localhost:4000/admin/updateAdmin', updatedAdmin)
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
            <Grid container justify="flex-start" spacing={10} style={{padding: '130px'}}>
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
                        value={this.state.admin.firstName}
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
                        value={this.state.admin.lastName}
                        onChange={this.handleInput}
                        fullWidth
                        />
                    </Grid>
                    <Grid item md={6}>
                    <TextField
                    id="contactNumber"
                    label="Contact Number"
                    margin="dense"
                    variant="outlined"
                    multiline
                    rowsMax="4"
                    value={this.state.admin.contactNumber}
                    onChange={this.handleInput}
                    fullWidth
                    />
                    </Grid>   
                    <Grid item md={6}>
                    <TextField
                    id="email"
                    label="E mail"
                    margin="dense"
                    variant="outlined"
                    multiline
                    rowsMax="4"
                    value={this.state.admin.email}
                    onChange={this.handleInput}
                    fullWidth
                    />
                    </Grid>  
                    <Grid item md={6}>
                    <TextField
                    id="username"
                    label="Username"
                    margin="dense"
                    variant="outlined"
                    multiline
                    rowsMax="4"
                    value={this.state.admin.username}
                    onChange={this.handleInput}
                    fullWidth
                    />
                    </Grid> 
               </Grid>
               
               <Grid item md={8}>
                    <br/>
                    <h4>Security</h4>
                    <br/>
               </Grid>
               <Grid container spacing={3}>
                    <Grid item md={4}>
                        
    
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
                        {error }
                        <br/>
                    </Grid>
                    <Grid container justify="flex-end" spacing={10}>
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

const matchStateToProps = state => {
    return {
        email: state.email,
        token: state.token
    }
}

export default connect(matchStateToProps,null)(EditAdminProfile);

