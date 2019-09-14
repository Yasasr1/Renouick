import React from 'react';
import Paper from '@material-ui/core/Paper';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';




const RatingInfo = (props) => {
    return(
        <Paper style={{padding: '15px'}}>
            <Typography variant="h5" gutterBottom>Rating</Typography>
            <Box component="fieldset" mb={3} borderColor="transparent">
                <Typography component="legend">Current Rating</Typography>
            <Rating value={3} readOnly />
      </Box>
            
        </Paper>
    );
};

export default RatingInfo;