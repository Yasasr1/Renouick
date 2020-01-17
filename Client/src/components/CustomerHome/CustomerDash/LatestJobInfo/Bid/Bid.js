import React from 'react';
import { Paper, Grid, Button } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import axios from 'axios';


const Bid = (props) => {
    const date = new Date(props.date).toLocaleString();


    const updateInfo = () => {
        const info = {
            status: "Ongoing",
            jobId: props.jobId,
            bidid: props.bidId,
            worker: props.poster
        }

        console.log(info);

        axios.post('http://localhost:4000/job/update',info)
            .then(res => {
                console.log(res.data);
                alert(res.data.job);
            })
            .catch(error => {
                console.log(error);
                alert('job posting failed');
            })

    }

    

    return(
        <Paper className="shadow p-3 mb-5 bg-white rounded" style={{padding: '20px', margin: '5px'}}>
            <p className="h3"> Rs {props.amount}</p>
            <Grid container spacing={1}>
                <Grid item md={3}>
                    <p className="h6">by: {props.poster}</p>
                </Grid>
                <Grid item md={9}>
                    <Rating readOnly value={4}/>
                </Grid>
                <Grid item md={12}>
                    <p className="h6">date: {date}</p>
                </Grid>
                <Grid item md={12}>
                    <Button onClick={updateInfo} variant="contained" style={{float: "right", backgroundColor: "green", color: "white"}}>Accept</Button>
                </Grid>
            </Grid>
            
        </Paper>
    );
};

export default Bid;