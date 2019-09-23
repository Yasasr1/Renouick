import React from 'react';
import Paper from '@material-ui/core/Paper';
import { Divider } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Rating from '@material-ui/lab/Rating';






const LatestJobInfo = (props) => {
    return(
        <Paper style={{padding: '25px'}}>
           <h4 align="center">Job title</h4>
           <Divider/>
           <br/>
           <Grid container>
                <Grid item md={4}>
                    <h2>Job photos</h2>
                </Grid>
                <Grid item md={8}>
                <Typography variant="caption" gutterBottom>(Job category)</Typography>
                <br/>
                    <Typography variant="body1" gutterBottom>(job Description job Description job Description job Description job Description)</Typography>
                    <Typography variant="h5" color="secondary" gutterBottom>(Status)</Typography>
                    <Typography variant="body1" gutterBottom>(assigned worker - if any)</Typography>
                </Grid>
           </Grid>

           <Divider/>
           <br/>
           <Grid container>      
                <Grid item md={4}>
                    <h5> assigned worker photo</h5>
                </Grid>
                <Grid item md={8}>
                    <Typography variant="h5">(Worker name)</Typography>
                    <Typography variant="body2">Worker rating</Typography>
                    <Rating value={3} readOnly />
                </Grid>
           </Grid>
           
           
        </Paper>
    );
};

export default LatestJobInfo;