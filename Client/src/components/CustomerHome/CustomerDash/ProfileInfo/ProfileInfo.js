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

                <Grid item md={3}>
                    <CakeIcon fontSize="small" color="primary" style={{padding:"3px"}}/>
                    <Typography variant="body1">Birthday</Typography>
                </Grid>
                <Grid item md={9}>
                    <Typography variant="body1">:{props.birthday ? date : ''}</Typography>
                </Grid>

                <Grid item md={3}>
                    <HomeIcon fontSize="small" color="primary" style={{padding:"3px"}}/>
                    <Typography variant="body1">Address</Typography>
                </Grid>
                <Grid item md={9}>
                    <Typography variant="body1">:{props.address}</Typography>
                </Grid>

                <Grid item md={12}>
                    <Divider/>
                </Grid>

                <Grid item md={3}>
                    <AlternateEmailIcon fontSize="small" color="primary" style={{padding:"3px"}}/>
                    <Typography variant="body1">Contact No</Typography>
                </Grid>
                <Grid item md={9}>
                    <Typography variant="body1">:{props.contactNumber}</Typography>
                </Grid>
                
                <Grid item md={3}>
                    <AlternateEmailIcon fontSize="small" color="primary" style={{padding:"3px"}}/>
                    <Typography variant="body1">Email</Typography>
                </Grid>
                <Grid item md={9}>
                    <Typography variant="body1">:{props.email}</Typography>
                </Grid>

                
                
            </Grid>
            

        </Paper>
    );
};

export default ProfileInfo;
