import React from 'react';
import Paper from '@material-ui/core/Paper';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';





const RatingInfo = (props) => {
    return(
        <Paper style={{padding: '15px'}}>
            <Grid container spacing={2}>
                <Grid item md={12}>
                    <Typography variant="h5" gutterBottom>Current Rating</Typography>
                    <Divider/>
                </Grid>
                <Grid item md={12}>
                    <Typography variant="h3">3.0</Typography>
                    <Rating value={3}readOnly/>
                    <Typography variant="body2">45 reviews</Typography>
                </Grid>
            </Grid>
            
            
            
        </Paper>
    );
};

export default RatingInfo;