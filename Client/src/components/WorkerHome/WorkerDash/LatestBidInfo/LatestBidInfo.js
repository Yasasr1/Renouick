import React from 'react';
import { Paper, Typography, Grid, Divider} from '@material-ui/core'

const LatestBidInfo = (props) => {
    return (
        <Paper>
            <Grid container spacing={1} style={{padding: '30px'}}>
                <Grid item md={12}>
                    <Divider/>
                </Grid>
                <Grid item sm={5}>
                    <Typography variant="h5">Job Title:</Typography>
                </Grid>
                <Grid item sm={7}>
                    <Typography variant="h5">(Job title)</Typography>
                </Grid>
                <Grid item sm={5}>
                    <Typography variant="h5">Posted by:</Typography>
                </Grid>
                <Grid item sm={7}>
                    <Typography variant="h5">(Customer name)</Typography>
                </Grid>
                <Grid item sm={5}>
                    <Typography variant="h5">price:</Typography>
                </Grid>
                <Grid item sm={7}>
                    <Typography variant="h5">(5000)</Typography>
                </Grid>
            </Grid>
        </Paper>
    );
};

export default LatestBidInfo;