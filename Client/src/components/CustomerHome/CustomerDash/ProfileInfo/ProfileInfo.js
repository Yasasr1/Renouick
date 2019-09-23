import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';




const ProfileInfo = (props) => {
    return(
        <Paper style={{padding: '15px'}}>
            <Typography variant="h5" gutterBottom>Yasas Ramanayaka</Typography>
            <Typography variant="overline" gutterBottom>yasasramanayaka@gmail.com</Typography>
            <Typography variant="body2" gutterBottom>1996-05-15</Typography>
            <Typography variant="subtitle2" gutterBottom>Male</Typography>
            <Typography variant="subtitle1" gutterBottom>17/4A Amunupitiya road, Welisara</Typography>

        </Paper>
    );
};

export default ProfileInfo;