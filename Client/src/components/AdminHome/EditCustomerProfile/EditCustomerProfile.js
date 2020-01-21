import React,{ Component } from 'react';
import { connect } from 'react-redux';
import {Grid, Button} from '@material-ui/core/';
import Profileinfo from './ProfileInfo/ProfileInfo'; 
import * as actions from '../../../store/actions/user';
import axios from 'axios';
import CustomerSelect from './CustomerSelect/CustomerSelect';
import ProfilePic from '../../../assests/OurTeam/member2.jpg';
import Typography from '@material-ui/core/Typography';
import ChatIcon from '@material-ui/icons/Chat';
import ReportView from './ReportView/ReportView'; 
//import IconButton from '@material-ui/core/IconButton';
//import ChatIcon from '@material-ui/icons/Chat';
import { IconButton, Divider } from '@material-ui/core';

class EditCustomerProfile extends Component {
    state = {
        latestJob : null
    }
   
    //dispatch the action to get and save customer data in redux storw
    componentDidMount() {
        this.props.getCustomerInfo(this.props.email,this.props.token);
        axios.get('http://localhost:4000/job/getLatest', {
            params: {
                email: this.props.email
            },
            headers: {
                'x-auth-token': this.props.token
            }
        })
        .then(res => {
            const job = res.data;
            this.setState({latestJob: job[0]});
        })
        .catch(err => {
            console.log(err);
        })

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
                            
                    </Grid>

                    <Grid item sm={6} >
                        <Grid item md={12} style={{marginBottom: '40px'}}>
                        
                             <Profileinfo
                             gender={this.props.gender}
                             address={this.props.address}
                             email={this.props.email}
                             birthday={this.props.birthday}
                             fName={this.props.fName}
                             lName={this.props.lName}
                             />
                        </Grid> 
                        
                    </Grid>  

                    <Grid item sm={3} container justify="center" style={{marginBottom: '40px'}}>
                    <Typography variant="h4" component="h4" align="center"style={{ fontFamily:"Calibri " , fontSize:20 , fontStyle:"Italic" , color:"black"}}>
                    <br/>Search a customer here <br/>to view details</Typography>
                     <CustomerSelect/>
                    </Grid>    
                </Grid>
                
                <Grid container spacing={3} justify="center" style={{padding: '1px', flexGrow: '1'}}>
                
               
                    <Grid item sm={8}>
                        <Grid  justify="center"  style={{padding: '1px', flexGrow: '1'}}>
                            <Grid item xs={12} >
                            <Typography variant="h4" component="h4" align="center"style={{ fontFamily:"Calibri " , fontSize:27 , fontStyle:"Italic" , color:"black"}}>
                         Complaints by workers against him</Typography>
                            </Grid>
                            <Grid><ReportView/></Grid>
                        </Grid>
                    </Grid>
                    <Grid item sm={1}>                                      
                    </Grid>

                    
                    <Grid item xs={3} container spacing={3}>
                        
                        <Grid item sm={12} >
                            <Button onClick={this.searchWorker} color="secondary" variant="contained">Ban This customer</Button>
                        </Grid>
                        <Grid item  sm={12}>
                            <Grid item xs={3}>
                              <Grid item sx={12}>
                                 <Typography variant="h4" component="h4" align="center"
                                    style={{ fontFamily:"Calibri " , fontSize:20 , fontStyle:"Italic" , color:"rblack"}}>
                                    Chat</Typography> <br/>
                              </Grid>
                              <Grid item sx={12}>
                                <IconButton aria-label="chat" >  <ChatIcon style={{ fontSize: 60 }}/></IconButton>
                              </Grid>
                            </Grid>
                                               
                        </Grid>
                    </Grid>  
 
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