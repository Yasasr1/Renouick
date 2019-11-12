import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import CakeIcon from '@material-ui/icons/Cake';
import HomeIcon from '@material-ui/icons/Home';
import FormatPaintIcon from '@material-ui/icons/FormatPaint';



const ProfileInfo = (props) => {
    //get a date string from date object 
    /*let date = '';
    if(props.birthday) {
        date = new Date(props.birthday).toLocaleDateString();
    }*/
    
    return(
        <Paper style={{padding: '15px'}}>
            <Grid container spacing={1}>
                <Grid item md={12}>
                    <Typography variant="h5" gutterBottom>Yasas Ramanayaka</Typography>
                    <Divider/>
                </Grid>
            </Grid>
            <Grid container spacing={1}>

                <Grid item md={2}>
                    <CakeIcon fontSize="small" color="primary" style={{padding:"3px"}}/>
                    <Typography variant="caption">Birthday</Typography>
                </Grid>
                <Grid item md={10}>
                    <Typography variant="caption">:15/05/1996</Typography>
                </Grid>

                <Grid item md={2}>
                    <HomeIcon fontSize="small" color="primary" style={{padding:"3px"}}/>
                    <Typography variant="caption">Address</Typography>
                </Grid>
                <Grid item md={10}>
                    <Typography variant="caption">:17/4 A, Amunupitiya road, Welisara</Typography>
                </Grid>

                <Grid item md={2}>
                    <FormatPaintIcon fontSize="small" color="primary" style={{padding:"3px"}}/>
                    <Typography variant="caption">Profession</Typography>
                </Grid>
                <Grid item md={10}>
                    <Typography variant="caption">:A/C Reapair</Typography>
                </Grid>
                    
            </Grid>
            

        </Paper>
    );
};

export default ProfileInfo;
