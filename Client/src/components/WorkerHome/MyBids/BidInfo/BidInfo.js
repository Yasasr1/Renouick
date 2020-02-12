import React from 'react';
import { Paper, Typography, Divider, Grid } from '@material-ui/core';

const BidInfo = (props) => {
    return (
        <React.Fragment>
            <Paper style={{padding: '20px'}}>
                <Typography variant="h5">{props.jobTitle}</Typography>
                <Divider/>
                <br/>
                <Grid container spacing={2}>
                    <Grid item md={2}>
                        <Typography variant="body2">Job Posted by:</Typography>
                    </Grid>
                    <Grid item md={9}>
                        <Typography variant="body2">{props.jobPoster}</Typography>
                    </Grid>
                    <Grid item md={2}>
                        <Typography variant="body2">Job Posted on:</Typography>
                    </Grid>
                    <Grid item md={9}>
                        <Typography variant="body2">date</Typography>
                    </Grid>
                    <Grid item md={2}>
                        <Typography variant="body2">Job description:</Typography>
                    </Grid>
                    <Grid item md={9}>
                        <Typography variant="body2">{props.jobDesc}</Typography>
                    </Grid>
                    <br/>
                    <Grid item md={12}>
                        <Divider/>
                    </Grid>
                    <Grid item md={2}>
                        <Typography variant="body2">Bid amount:</Typography>
                    </Grid>
                    <Grid item md={9}>
                    <Typography variant="body2">{props.amount}</Typography>
                    </Grid>
                </Grid>

            </Paper>
        </React.Fragment>
    );
};

export default BidInfo;