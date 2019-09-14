import React,{ Component } from 'react';
import Grid from '@material-ui/core/Grid';

import ProfileImg from './ProfileImg/ProfileImg';
import Profileinfo from './ProfileInfo/ProfileInfo';
import EditInfo from './EditInfo/EditInfo';
import RatingInfo from './RatingInfo/RatingInfo';
//placeholder profile pic
import profilePic from '../../../assests/testAvatar/avatar.jpg';

class CustomerDash extends Component {

    render() {

        return (
            <React.Fragment>
                <Grid container spacing={3} justify="center" style={{padding: '30px', flexGrow: '1'}}>
                    <Grid item md={4}> <ProfileImg source={profilePic}/></Grid>
                    <Grid item sm={6} >
                        <Grid item md={12} style={{marginBottom: '40px'}}> <Profileinfo/></Grid>
                        <Grid item md={12}> <RatingInfo/></Grid>
                    </Grid>                    
                    <Grid item sm={2}><EditInfo/></Grid>
                    
                </Grid>
            </React.Fragment>
        );
    }
}

export default CustomerDash;