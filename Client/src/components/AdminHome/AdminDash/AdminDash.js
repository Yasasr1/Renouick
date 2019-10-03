import React,{ Component } from 'react';
import Grid from '@material-ui/core/Grid';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import ProfileImg from './ProfileImg/ProfileImg';
import Profileinfo from './ProfileInfo/ProfileInfo';
import EditInfo from './EditInfo/EditInfo';
import RatingInfo from './RatingInfo/RatingInfo';
//placeholder profile pic
import profilePic from '../../../assests/testAvatar/avatar.jpg';
import LatestJobInfo from './LatestJobInfo/LatestJobInfo';

class AdminDash extends Component {

    render() {

        return (
            <div style={{backgroundColor: '#F5F1FA'}}>
                <Grid container spacing={3} justify="center" style={{padding: '30px', flexGrow: '1'}}>
                    <Grid item md={4}> <ProfileImg source={profilePic}/></Grid>
                    <Grid item sm={6} >
                        <Grid item md={12} style={{marginBottom: '40px'}}> <Profileinfo/></Grid>
                        <Grid item md={12}> <RatingInfo/></Grid>
                    </Grid>                    
                    <Grid item sm={2}><EditInfo/></Grid>
                </Grid>
                <Grid container style={{padding: '30px'}}>
                <ArrowForwardIosIcon color="primary"/>
                <h5 style={{marginLeft: '30px'}}>Latest Job</h5>
                </Grid>
                
                
                
                <Grid container justify="center" style={{padding: '30px', flexGrow: '1'}}>    
                    <Grid item md={12}><LatestJobInfo/></Grid>
                </Grid>
            </div>
        );
    }
}

export default AdminDash;