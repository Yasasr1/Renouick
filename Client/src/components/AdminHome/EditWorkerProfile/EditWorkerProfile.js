import React,{ Component } from 'react';
import { connect } from 'react-redux';
import {Grid, Button} from '@material-ui/core/';
import Profileinfo from './ProfileInfo/ProfileInfo'; 
import * as actions from '../../../store/actions/user';
import axios from 'axios';
import WorkerSelect from './WorkerSelect/WorkerSelect';
import ProfilePic from '../../../assests/OurTeam/member2.jpg';
import Typography from '@material-ui/core/Typography';
import ChatIcon from '@material-ui/icons/Chat';
import ReportView from './ReportView/ReportView'; 
import { IconButton, Divider } from '@material-ui/core';
import Fab from '@material-ui/core/Fab';

class EditWorkerProfile extends Component {
    componentDidMount() {
        this.props.getWorkerInfo(this.props.email,this.props.token);
    }
    
    openSocialMedia = (type) => {
        if(type === 'facebook') {
            window.open(this.props.facebook)
        } else if(type === 'twitter') {
            window.open(this.props.twitter)
        }

    }

    render() {
       
        return (
            <div style={{backgroundColor: '#F5F1FA'}}>
                <Grid container spacing={3} justify="center" direction="row" style={{padding: '100px', flexGrow: '1'}}>
               
                    <Grid item sm={3}>
                        <img src={ProfilePic} width={350} height={250}/>
                        <Grid style={{padding: '100px', flexGrow: '1'}} >
                        <Button size="small" height="15%" color="secondary" variant="contained" style={{fontSize:16}}>Ban This worker</Button>
                    </Grid>  
                    </Grid>

                    <Grid item sm={6} >
                        <Grid item md={12} style={{marginBottom: '40px'}}>
                        
                             <Profileinfo
                             workingCategory={this.props.workingCategory}
                             address={this.props.address}
                             email={this.props.email}
                             fName={this.props.fName}
                             lName={this.props.lName}
                             />
                              <Grid style={{padding: '20px', flexGrow: '1'}} >
                             <Typography variant="h4" component="h4" style={{fontSize:30 , fontStyle:"Italic" , color:"Black" }}>
                         Complaints by Customers
                         </Typography>
                             <ReportView/>
                             </Grid>
                        </Grid> 
                    </Grid>  

                    {/* <Grid item sm={3} container justify="center" style={{marginBottom: '40px'}}>
                        <WorkerSelect/><br/>
                        <Fab color="primary" aria-label="add">
                         <ChatIcon />
                        </Fab>
                        </Grid>
  */}
                </Grid>             
          
         
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        email: state.email,
        token: state.token,
        workingCategory: state.workingCategory,
        picUrl: state.user.profilePicUrl,
        gender: state.user.gender,
        address: state.user.address,
        birthday: state.user.birthday,
        fName: state.user.firstName,
        lName: state.user.lastName,
        facebook: state.user.facebook,
        twitter: state.user.twitter
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getWorkerInfo: (email, token) => dispatch(actions.getWorker(email, token))
    };
}


export default connect(mapStateToProps,mapDispatchToProps)(EditWorkerProfile);