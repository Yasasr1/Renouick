import React,{ Component } from 'react';
import { connect } from 'react-redux';

import Grid from '@material-ui/core/Grid';
//import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ProfileImg from '../../CustomerHome/CustomerDash/ProfileImg/ProfileImg';
import Profileinfo from './ProfileInfo/ProfileInfo';
import EditInfo from './EditInfo/AdminEditInfo';
import profilePic from '../../../assests/testAvatar/avatar.jpg';
import WorkerCount from './WorkerCount/WorkerCount';
import * as actions from '../../../store/actions/user';

class AdminDash extends Component {

    render() {

        return (
            <div style={{backgroundColor: '#F5F1FA'}}>
                <Grid container spacing={3} justify="center" style={{padding: '30px', flexGrow: '1'}}>
                    <Grid item md={4}> <ProfileImg source={profilePic}/></Grid>
                    <Grid item sm={6} >
                        <Grid item md={12}  style={{marginBottom: '40px'}}> <Profileinfo/></Grid>
                       
                        
                        <Grid container item  spacing={2}> <WorkerCount/> </Grid>
                        
                    </Grid>                    
                    <Grid item sm={2}><EditInfo/></Grid>
                </Grid>
                
                
                
                
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        email: state.email,
        token: state.token
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getAdminInfo: (email, token) => dispatch(actions.getUser(email, token))
    };
}


export default connect(mapStateToProps,mapDispatchToProps)(AdminDash);