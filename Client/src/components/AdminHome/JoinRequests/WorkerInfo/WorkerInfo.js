import React, { Component } from 'react';
import { Paper, Grid, Typography, Button } from '@material-ui/core';
import { Alert } from 'react-bootstrap';
import axios from 'axios';


class WorkerInfo extends Component {
    state = {
        alert: null
    }

    

    approveHandler = () => {
        const send = {
            email: this.props.email
        }
        axios.post('http://localhost:4000/worker/approve',send)
        .then(res=> {
            console.log(res.data);

        })
        .catch(error=> {
            console.log(error);
        })
        let alert = <Alert variant="success">Approved</Alert>
        this.setState({alert: alert})

    }

    declineHandler = () => {
        const send = {
            email: this.props.email
        }
        axios.post('http://localhost:4000/worker/decline',send)
        .then(res=> {
            console.log(res.data);

        })
        .catch(error=> {
            console.log(error);
        })
        let alert = <Alert variant="danger">Declined</Alert>
        this.setState({alert: alert})
    }

    render(){
        let birthday = new Date(this.props.birthday).toLocaleDateString();

        const profession = this.props.profession.map(p => {
            return <li key={p}>{p}</li>
        })
        return(
            <Paper className="shadow p-3 mb-5 bg-white rounded" style={{padding: '20px', margin: '20px'}}>
                <Grid container spacing={1}>
                    <Grid item md={2}>
                        <Typography variant="overline">First Name </Typography>
                    </Grid>
                    <Grid item md={10}>
                        <Typography variant="overline">:{this.props.fName}</Typography>
                    </Grid>
    
                    <Grid item md={2}>
                        <Typography variant="overline">Last Name </Typography>
                    </Grid>
                    <Grid item md={10}>
                        <Typography variant="overline">:{this.props.lName}</Typography>
                    </Grid>
    
                    <Grid item md={2}>
                        <Typography variant="overline">Birthday </Typography>
                    </Grid>
                    <Grid item md={10}>
                        <Typography variant="overline">:{birthday}</Typography>
                    </Grid>
    
                    <Grid item md={2}>
                        <Typography variant="overline">Email </Typography>
                    </Grid>
                    <Grid item md={10}>
                        <Typography variant="overline">:{this.props.email}</Typography>
                    </Grid>
    
                    <Grid item md={2}>
                        <Typography variant="overline">Contact Number </Typography>
                    </Grid>
                    <Grid item md={10}>
                        <Typography variant="overline">:{this.props.contactNumber}</Typography>
                    </Grid>
    
                    <Grid item md={2}>
                        <Typography variant="overline">Working categories</Typography>
                    </Grid>
                    <Grid item md={10}>
                        <Typography variant="overline">:</Typography>
                        <ul>
                            {profession}
                        </ul>
                    </Grid>
                    <Grid item md={12}>
                        <Button onClick={this.approveHandler} style={{margin: '10px', float: 'right', backgroundColor: 'green', color: 'white'}} variant="contained">Approve</Button>
                        <Button onClick={this.declineHandler} style={{margin: '10px', float: 'right', backgroundColor: 'red', color: 'white'}} variant="contained">Decline</Button>
                        {this.state.alert}
                    </Grid>
                </Grid>
            </Paper>
        );
    }

    
};

export default WorkerInfo;