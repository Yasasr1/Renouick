import { Component } from 'react';
import React from 'react';
import './LoginPage.css';
import Typography from '@material-ui/core/Typography';
import AccountBoxRoundedIcon from '@material-ui/icons/AccountBoxRounded';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import LinearProgress from '@material-ui/core/LinearProgress';
import validator from 'validator';
import { Redirect } from 'react-router-dom';
import Particles from 'react-particles-js';
import image from '../../assests/loginAnimation/image.svg';





//importing action creators
import * as actions from '../../store/actions/auth';
//importing to connect mapDispatchToProps to this component
import { connect } from 'react-redux';




class LoginPage extends Component  {
    state = {
        email: '',
        password: '',
        error: {email: '', password: ''}
    };

    inputHandler = (event) => {
        let updatedState = {
            [event.target.id]: event.target.value
        };

        this.setState(updatedState);
    };

    validationHandler = () => {
        //form validaton 
        let updatedState = null;
        let isValid = true;
        if(!this.state.email) {
            updatedState = {
                ...this.state,
                error: {
                    ...this.state.error,
                    email: 'Please enter email'
                }
            }
            this.setState(updatedState);
            isValid = false;
        }
        else if (!validator.isEmail(this.state.email)) {
            updatedState = {
                ...this.state,
                error: {
                    ...this.state.error,
                    email: 'Not a valid email'
                }
            }
            this.setState(updatedState);
            isValid = false;
        }
        else {
            if(!this.state.password) {
                updatedState = {
                    ...this.state,
                    error: {
                        ...this.state.error,
                        password: 'Please enter password',
                        email: ''
                    }
                }
                this.setState(updatedState);
                isValid = false;
            }
            else {
                updatedState = {
                    ...this.state,
                    error: {
                        ...this.state.error,
                        password: '',
                        email: ''
                    }
                }
                this.setState(updatedState);
            }
        }

        return isValid;
    }

    submitHandler = () => {   
        let isValid = this.validationHandler();
        if(isValid)
            this.props.onAuth(this.state.email,this.state.password)   

    };
   
    render() {
        //console.log({...this.state,...this.state.error,...this.state.error[email]: 'sfasf'})
        //holds the error message if any
        let error = null;
        if(this.props.error) {
            error = <p style={{color: 'red'}}>{this.props.error}</p>
        }

        //hold the linier spinner
        let spinner = null;
        if(this.props.loading) {
            spinner = <LinearProgress/>
        }

        //email error msg(front end)
        let emailError = null;
        if(this.state.error.email) {
            emailError = <p style={{color: 'red'}}>*{this.state.error.email}</p>
        }

        //password error msg(front end)
        let passwordError = null;
        if(this.state.error.password) {
           passwordError = <p style={{color: 'red'}}>*{this.state.error.password}</p>
        }

        //used to redirect user after login
        let redirect = null;
        if(this.props.isAuthenticated) {
            redirect = <Redirect to="/customer"/>
        }

        return (
            <React.Fragment>
                {redirect}
                <div className="LoginPageLeft">
                <Particles
                  params={{
                    "particles": {
                        "number": {
                            "value": 550,
                            "density": {
                                "enable": true,
                                "value_area": 1500
                            }
                        },
                        "line_linked": {
                            "enable": true,
                            "opacity": 0.02
                        },
                        "move": {
                            "direction": "right",
                            "speed": 0.5
                        },
                        "size": {
                            "value": 1
                        },
                        "opacity": {
                            "anim": {
                                "enable": true,
                                "speed": 1,
                                "opacity_min": 0.05
                            }
                        }
                    },
                    "interactivity": {
                        "events": {
                            "onclick": {
                                "enable": true,
                                "mode": "push"
                            }
                        },
                        "modes": {
                            "push": {
                                "particles_nb": 1
                            }
                        }
                    },
                    "retina_detect": true
                }}
                height='800px'
                />
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
                    onChange={this.inputHandler}
                    />
                    {emailError}
                    <TextField
                    required
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    onChange={this.inputHandler}
                    />
                    {passwordError}
                    <br/>
                    <br/>
                    {error}
                    {spinner}
                    <br/>
                    <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={this.submitHandler}
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

const mapStateToProps = state => {
    return {
        loading: state.loading,
        error: state.error,
        userType: state.userType,
        isAuthenticated: state.token !== null
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email, password) => dispatch(actions.auth(email, password))
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(LoginPage);