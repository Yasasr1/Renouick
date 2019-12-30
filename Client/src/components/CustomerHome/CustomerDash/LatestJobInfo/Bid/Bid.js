import React from 'react';
import { Paper, Grid, Button } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';

const Bid = (props) => {
    const date = new Date(props.date).toLocaleString();
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
                    <Button variant="contained" style={{float: "right", backgroundColor: "green", color: "white"}}>Accept</Button>
                </Grid>
            </Grid>
            
        </Paper>
    );
};

export default Bid;