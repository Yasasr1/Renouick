import React from 'react';
import Paper from '@material-ui/core/Paper';
import { Divider } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Rating from '@material-ui/lab/Rating';






const LatestJobInfo = (props) => {
    //if the props isWorkerAssigned is true worker info will also be displayed
    let workerInfo = (
        <React.Fragment>
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
        </React.Fragment>
    );
    return(
        <Paper style={{padding: '25px'}}>
           <h4 align="center">{props.title}</h4>
           <Divider/>
           <br/>
           <Grid container>
                <Grid item md={4}>
                    <h2>Job photos</h2>
                </Grid>
                <Grid item md={8}>
                <Typography variant="caption" gutterBottom>{props.category}</Typography>
                <br/>
                    <Typography variant="body1" gutterBottom>{props.description}</Typography>
                    <Typography variant="h5" color="secondary" gutterBottom>{props.status}</Typography>
                    <Typography variant="overline" gutterBottom>{props.worker || "No assigned workers.."}</Typography>
                </Grid>
           </Grid>
           {props.isWorkerAssigned ? workerInfo : null}
        </Paper>
    );
};

export default LatestJobInfo;