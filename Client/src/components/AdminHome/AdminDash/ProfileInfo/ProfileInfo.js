import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';



const ProfileInfo = (props) => {
    return(
        <Paper style={{padding: '15px', height:"100%"}}>
            
            <Typography variant="h5" gutterBottom>Pasan Mahesha</Typography>
            <Typography variant="overline" gutterBottom>pmahesha.hera@gmail.com</Typography>
            <Typography variant="body2" gutterBottom>1996-10-02</Typography>
            <Typography variant="subtitle2" gutterBottom>Male</Typography>
            <Typography variant="subtitle2" gutterBottom>No: 227, Gamunu Mawatha, Vijayapura, Anuradhapura</Typography>

        </Paper>
    );
};

export default ProfileInfo;