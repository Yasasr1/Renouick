import React from 'react';
import { Paper, Typography, Grid, Divider} from '@material-ui/core'

const LatestBidInfo = (props) => {
    return (
        <Paper className="shadow p-3 mb-5 bg-white rounded">
            <Grid container spacing={1} style={{padding: '30px'}}>
                <Grid item md={12}>
                    <Divider/>
                </Grid>
                <Grid item sm={3}>
                    <Typography variant="h6">Job Title</Typography>
                </Grid>
                <Grid item sm={1}>
                    <Typography variant="h6">:</Typography>
                </Grid>
                <Grid item sm={7}>
                    <Typography variant="h6">{props.jobTitle}</Typography>
                </Grid>
                <Grid item sm={3}>

                    <Typography variant="h6">Posted by</Typography>
                </Grid>
                <Grid item sm={1}>
                    <Typography variant="h6">:</Typography>
                </Grid>
                <Grid item sm={7}>
                    <Typography variant="h6">{props.jobPoster}</Typography>
                </Grid>
                
                <Grid item sm={3}>
                    <Typography variant="h6">Price</Typography>
                </Grid>
                <Grid item sm={1}>
                    <Typography variant="h6">:</Typography>
                </Grid>
                <Grid item sm={7}>
                    <Typography variant="h6">{props.price}</Typography>
                </Grid>

                <Grid item sm={3}>
                    <Typography variant="h6">Status</Typography>
                </Grid>
                <Grid item sm={1}>
                    <Typography variant="h6">:</Typography>
                </Grid>
                <Grid item sm={7}>
                    <Typography variant="h6">{props.status}</Typography>
                </Grid>
            </Grid>
        </Paper>
    );
};

export default LatestBidInfo;