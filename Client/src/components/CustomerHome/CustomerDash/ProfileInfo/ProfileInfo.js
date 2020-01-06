import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import CakeIcon from '@material-ui/icons/Cake';
import HomeIcon from '@material-ui/icons/Home';



const ProfileInfo = (props) => {
    //get a date string from date object 
    let date = '';
    if(props.birthday) {
        date = new Date(props.birthday).toLocaleDateString();
    }
    
    return(
        <Paper className="shadow p-3 mb-5 bg-white rounded" style={{padding: '15px'}}>
            <Grid container spacing={1}>
                <Grid item md={12}>
                    <Typography variant="h5" gutterBottom>{props.fName} {props.lName}</Typography>
                    <Divider/>
                </Grid>
            </Grid>
            <Grid container spacing={1}>

                <Grid item md={2}>
                    <CakeIcon fontSize="small" color="primary" style={{padding:"3px"}}/>
                    <Typography variant="caption">Birthday</Typography>
                </Grid>
                <Grid item md={10}>
                    <Typography variant="caption">:{props.birthday ? date : ''}</Typography>
                </Grid>

                <Grid item md={2}>
                    <HomeIcon fontSize="small" color="primary" style={{padding:"3px"}}/>
                    <Typography variant="caption">Address</Typography>
                </Grid>
                <Grid item md={10}>
                    <Typography variant="caption">:{props.address}</Typography>
                </Grid>

                <Grid item md={12}>
                    <Divider/>
                </Grid>

                <Grid item md={2}>
                    <AlternateEmailIcon fontSize="small" color="primary" style={{padding:"3px"}}/>
                    <Typography variant="caption">Contact No</Typography>
                </Grid>
                <Grid item md={10}>
                    <Typography variant="caption">:{props.contactNumber}</Typography>
                </Grid>
                
                <Grid item md={2}>
                    <AlternateEmailIcon fontSize="small" color="primary" style={{padding:"3px"}}/>
                    <Typography variant="caption">Email</Typography>
                </Grid>
                <Grid item md={10}>
                    <Typography variant="caption">:{props.email}</Typography>
                </Grid>

                
                
            </Grid>
            

        </Paper>
    );
};

export default ProfileInfo;

/*<Typography variant="overline" gutterBottom>yasasramanayaka@gmail.com</Typography>
            <Typography variant="body2" gutterBottom>1996-05-15</Typography>
            <Typography variant="subtitle2" gutterBottom>Male</Typography>
            <Typography variant="subtitle1" gutterBottom>17/4A Amunupitiya road, Welisara</Typography>*/