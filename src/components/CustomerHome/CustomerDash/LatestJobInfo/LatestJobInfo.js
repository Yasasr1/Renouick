import React from 'react';
import Paper from '@material-ui/core/Paper';
import { Divider } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';





const LatestJobInfo = (props) => {
    return(
        <Paper style={{padding: '25px'}}>
           <h4 align="center">Job title</h4>
           <Divider/>
           <br/>
           <Grid container>
               <Grid item md={4}>
                    <Typography variant="body1" gutterBottom>Job type </Typography>
                    <Typography variant="body1" gutterBottom>Date created </Typography>
                    <Typography variant="body1" gutterBottom>Assigned worker </Typography>
                    <Typography variant="body1" gutterBottom>Status </Typography>
               </Grid>
               <Grid item md={4}>
               <Typography variant="body1" gutterBottom>: (placeholder)</Typography>
           <Typography variant="body1" gutterBottom>: (ph)</Typography>
           <Typography variant="body1" gutterBottom>: (ph)</Typography>
           <Typography variant="body1" gutterBottom>: (ph)</Typography>
               </Grid>
           </Grid>
           
           
        </Paper>
    );
};

export default LatestJobInfo;