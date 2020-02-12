import React,{ Component } from 'react';
import { connect } from 'react-redux';
import {Grid, Button, Hidden} from '@material-ui/core/';
//import ProfileImg from './ProfileImg/ProfileImg';
import Profileinfo from './ProfileInfo/ProfileInfo'; 
import * as actions from '../../../store/actions/user';
import axios from 'axios';
import CustomerSelect from './CustomerSelect/CustomerSelect';
//import CardBox1 from '../../UI/Card/CardBox1';
//import ProfileImg from './ProfileImg/ProfileImg';
import ProfilePic from '../../../assests/OurTeam/member2.jpg';
import Typography from '@material-ui/core/Typography';
import ChatIcon from '@material-ui/icons/Chat';
import ReportView from './ReportView/ReportView'; 
//import IconButton from '@material-ui/core/IconButton';
//import ChatIcon from '@material-ui/icons/Chat';
import { IconButton, Divider } from '@material-ui/core';
import Icon from '@mdi/react';
import { mdiFacebookBox, mdiTwitter } from '@mdi/js';
//import { Link } from 'react-router-dom';
//import Button from @material-ui
import Paper from '@material-ui/core/Paper';
//import React from 'react';
import Box from '@material-ui/core/Box';
import Sort from './ReportView/Sort/Sort';
import Fab from '@material-ui/core/Fab';
import getUser from '../../../store/actions/user';

class EditCustomerProfile extends Component {
    componentDidMount() {
        this.props.getCustomerInfo(this.props.email,this.props.token);
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
                        <Button size="small" height="15%" color="secondary" variant="contained" style={{fontSize:16}}>Ban This customer</Button>
                    </Grid>
                    </Grid>

                    <Grid item sm={6} >
                        <Grid item md={12} style={{marginBottom: '40px'}}>
                        
                             <Profileinfo
                             contactNumber={this.props.contactNumber}
                             email={this.props.email}
                             address={this.props.address}
                             fName={this.props.fName}
                             lName={this.props.lName}
                             />
                              <Grid style={{padding: '20px', flexGrow: '1'}} >
                             <Typography variant="h4" component="h4" style={{fontSize:30 ,fontFamily:"Calibri" , fontStyle:"Italic" , color:"Black" }}>
                         Complaints by Workers
                         </Typography>
                             <ReportView/>
                             </Grid>
                        </Grid> 
                        
                    </Grid>  

                    {/* <Grid item sm={3} container justify="center" style={{marginBottom: '40px'}}> */}
                        {/* <CustomerSelect/><br/> */}
                        {/* <Fab color="primary" aria-label="add">
                         <ChatIcon />
                        </Fab>
                        </Grid>   */}
                       
                </Grid>
               
                   
                   
 
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        email: state.email,
        token: state.token,
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
        getCustomerInfo: (email, token) => dispatch(actions.getUser(email, token))
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(EditCustomerProfile);