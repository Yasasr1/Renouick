import React, { Component } from 'react';
import { Paper, Grid, Button } from '@material-ui/core';
import { Alert } from 'react-bootstrap';
import Rating from '@material-ui/lab/Rating';
import axios from 'axios';


class Bid extends Component {
    state = {
        alert: null
    }


    updateInfo = () => {
        const info = {
            status: "Ongoing",
            jobId: this.props.jobId,
            bidid: this.props.bidId,
            worker: this.props.poster
        }

        //console.log(info);

        axios.post('http://localhost:4000/job/update',info)
            .then(res => {
                console.log(res.data);
                let alert = <Alert variant="success">Bid Accepted</Alert>
                this.setState({alert: alert})
            })
            .catch(error => {
                console.log(error);
                let alert = <Alert variant="danger">Bid Accepting Failed</Alert>
                this.setState({alert: alert})
            })
            let alert = <Alert variant="success">Bid Accepted</Alert>
            this.setState({alert: alert})

    }

    
    render(){
        const date = new Date(this.props.date).toLocaleString();
        return(
            <Paper className="shadow p-3 mb-5 bg-white rounded" style={{padding: '20px', margin: '5px'}}>
                <p className="h3"> Rs {this.props.amount}</p>
                <Grid container spacing={1}>
                    <Grid item md={3}>
                        <p className="h6">by: {this.props.poster}</p>
                    </Grid>
                    <Grid item md={9}>
                        <Rating readOnly value={this.props.posterRating}/>
                    </Grid>
                    <Grid item md={12}>
                        <p className="h6">date: {date}</p>
                    </Grid>
                    <Grid item md={12}>
                        <Button onClick={this.updateInfo} variant="contained" style={{float: "right", backgroundColor: "green", color: "white"}}>Accept</Button>
                        {this.state.alert}
                    </Grid>
                </Grid> 
            </Paper>
        );
    }
};

export default Bid;