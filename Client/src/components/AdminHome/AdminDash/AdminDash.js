import React,{ Component } from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import ProfileImg from '../../CustomerHome/CustomerDash/ProfileImg/ProfileImg';
import Profileinfo from './ProfileInfo/ProfileInfo';
import EditInfo from './EditInfo/AdminEditInfo';
import profilePic from '../../../assests/OurTeam/member2.jpg';
import WorkerCount from './WorkerCount/WorkerCount';
import * as actions from '../../../store/actions/user';
import PieChart from './PieChart/PieChart';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
 

class AdminDash extends Component {

    render() {

        return (
            <div style={{backgroundColor:'#2c3937'}}>
                <Grid container spacing={1} justify="center" direction="row" style={{padding: '100px', flexGrow: '1'}}>
                    <Grid item xs={2}> <ProfileImg source={profilePic}/> </Grid>
                    <Grid item xs={7}  > <Profileinfo/></Grid>
                    <Grid item xs={3}  > <EditInfo/>
                   <br/>
                     <Typography variant="h4" component="h4" align="center"style={{ fontFamily:"Calibri " , fontSize:27 , fontStyle:"Italic" , color:"yellow"}}>
                         Exsisting User Accounts Details
                     </Typography>
                     
                    
                    </Grid>
                    
                    <Grid container spacing={0} direction="row" justify="center" alignItems="center" style={{paddingLeft: '100px', flexGrow: '1'}} >
                   <Grid item xs={8} > <WorkerCount/> </Grid> 
                    <Grid item xs={4} > <PieChart/> </Grid> 
                    </Grid>     
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