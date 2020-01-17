import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import CallIcon from '@material-ui/icons/Call';
import HomeIcon from '@material-ui/icons/Home';
import Rating from '@material-ui/lab/Rating';
import GradeIcon from '@material-ui/icons/Grade';
import EmailIcon from '@material-ui/icons/Email';
import Icon from '@mdi/react';
import { mdiFacebookBox, mdiTwitter } from '@mdi/js';
import IconButton from '@material-ui/core/IconButton';

//import Avatar from '@material-ui/core/Avatar';

const ProfileInfo = (props) => {
    /*const openSocialMedia = (type) => {
        if(type === 'facebook') {
            window.open(this.props.facebook)
        } else if(type === 'twitter') {
            window.open(this.props.twitter)
        }
  
    }*/
  
   
    return(
        <Paper style={{padding: '25px'}}>
            <Grid container spacing={1} >
                <Grid item md={10}>
                    <Typography variant="h5" gutterBottom>Yasas Ramanayaka</Typography>
                    
                    <Divider/>

                </Grid>
            </Grid>
            <Grid container spacing={1}>
           
                <Grid item md={3}>
                    <CallIcon fontSize="small" color="primary" style={{padding:"3px"}}/>
                    <Typography variant="caption">Contact No</Typography>
                </Grid>
                <Grid item md={9}>
                    <Typography variant="caption">:0710841248</Typography>
                </Grid>

                <Grid item md={3}>
                    <EmailIcon fontSize="small" color="primary" style={{padding:"3px"}}/>
                    <Typography variant="caption">E mail</Typography>
                </Grid>
                <Grid item md={9}>
                    <Typography variant="caption">:pasan@gmail.com</Typography>
                </Grid>

                <Grid item md={3}>
                    <HomeIcon fontSize="small" color="primary" style={{padding:"3px"}}/>
                    <Typography variant="caption">Address</Typography>
                </Grid>
                <Grid item md={9}>
                    <Typography variant="caption">:17/4 A, Amunupitiya road, Welisara</Typography>
                </Grid>

                <Grid item md={3}>
                    <GradeIcon fontSize="small" color="primary" style={{padding:"3px"}}/>
                    <Typography variant="caption" >Current Rating</Typography>
                    
                </Grid>
                <Grid item md={9}>
                    <Typography variant="caption"><Rating value={3}readOnly/>           3.0         </Typography>
                    <Typography variant="body2">45 reviews</Typography>
                </Grid>
                <Grid item md={9}> 
                   <IconButton onClick={()=>this.openSocialMedia('facebook')}>
                                <Icon path={mdiFacebookBox} size={1} color="blue"/>
                   </IconButton>
                   <IconButton onClick={()=>this.openSocialMedia('twitter')}>
                                <Icon path={mdiTwitter} size={1} color="cyan"/>
                   </IconButton>
                </Grid>
            </Grid>
            

        </Paper>
    );
};

export default ProfileInfo;
