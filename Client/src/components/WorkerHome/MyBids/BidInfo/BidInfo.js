import React, { Component } from 'react';
import { Paper, Typography, Divider, Grid, Button, TextField } from '@material-ui/core';
import { Modal,Alert} from 'react-bootstrap';
import { connect } from 'react-redux';
import axios from 'axios';



class BidInfo extends Component {
    state = {
        isPopupOpen: false,
        reportTitle: '',
        reportDesc: '',
        alert: null

    }

    handleModelOpen = () => {
        this.setState({isPopupOpen: true});
    }

    handleModelClose = () => {
        this.setState({isPopupOpen: false});
    }

    //handle report input
    handleChange = (event) => {
        let newState = {
            ...this.state,
            [event.target.name]: event.target.value
        }

        this.setState(newState);
    }

    handleReportSubmit = ()=> {
        let report = {
            poster: this.props.email,
            ReportedAbout: this.props.jobPoster,
            title: this.state.reportTitle,
            description: this.state.reportDesc
        }

        axios.post('http://localhost:4000/report/post',report)
            .then(res => {
                console.log(res.data);
                let alert = <Alert variant="success">Report submitted</Alert>
                this.setState({alert: alert})
                
            })
            .catch(error => {
                console.log(error);
                
                
            })

        this.handleModelClose();
    }
    
    render(){
        return (
            <React.Fragment>
                <Paper style={{padding: '20px'}}>
                    <Typography variant="h5">{this.props.jobTitle}</Typography>
                    <Divider/>
                    <br/>
                    <Grid container spacing={2}>
                        <Grid item md={2}>
                            <Typography variant="body2">Job Posted by:</Typography>
                        </Grid>
                        <Grid item md={9}>
                            <Typography variant="body2">{this.props.jobPoster}</Typography>
                        </Grid>
                        <Grid item md={2}>
                            <Typography variant="body2">Job description:</Typography>
                        </Grid>
                        <Grid item md={9}>
                            <Typography variant="body2">{this.props.jobDesc}</Typography>
                        </Grid>
                        <br/>
                        <Grid item md={12}>
                            <Divider/>
                        </Grid>
                        <Grid item md={2}>
                            <Typography variant="body2">Bid amount:</Typography>
                        </Grid>
                        <Grid item md={9}>
                        <Typography variant="body2">{this.props.amount}</Typography>
                        </Grid>
                        <Grid item md={12}>
                            <Button
                                variant="contained"
                                color="secondary"
                                style={{float: 'right'}}
                                onClick={this.handleModelOpen}
                            >
                                Report
                            </Button>
                            <Modal show={this.state.isPopupOpen} onHide={this.handleModelClose}>
                                <Modal.Header closeButton>
                                <Modal.Title>Report Worker</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <TextField onChange={this.handleChange} id="tile" name="reportTitle" label="Report Title" fullWidth />
                                    <br/>
                                    <br/>
                                    <TextField onChange={this.handleChange} id="description" name="reportDesc" label="Description" multiline rowsMax="10" fullWidth/>
                                </Modal.Body>
                                <Modal.Footer>
                                <Button variant="secondary" onClick={this.handleModelClose}>
                                    Close
                                </Button>
                                <Button variant="primary" onClick={this.handleReportSubmit}>
                                    Submit
                                </Button>
                                </Modal.Footer>
                            </Modal>
                            <br/>
                            <br/>
                            {this.state.alert}
                        </Grid>
                    </Grid>
    
                </Paper>
            </React.Fragment>
        );
    }
    
};

const mapStateToProps = state => {
    return {
        email: state.email,
        
    }
}

export default connect(mapStateToProps,null)(BidInfo);