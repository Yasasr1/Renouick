import React,{ Component } from 'react';
import { connect } from 'react-redux';
import CustomerImg from './CustomerImg/member2.jpg'
import Grid from '@material-ui/core/Grid';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
//import ProfileImg from './ProfileImg/ProfileImg';
import Profileinfo from './ProfileInfo/ProfileInfo'; 
import { IconButton, Divider } from '@material-ui/core';
import Icon from '@mdi/react';
import { mdiFacebookBox, mdiTwitter } from '@mdi/js';
import ReportIcon from '@material-ui/icons/Report';
import * as actions from '../../../store/actions/user';
import avatar from '../../../assests/testAvatar/avatar.jpg';
import axios from 'axios';
import MyTextField from '../../UI/TextField/TextField';
import CustomerSelect from './CustomerSelect/CustomerSelect';
import RatingInfo from './RatingInfo/RatingInfo';
import ReportsReview from './ReportsReview/ReportsReview';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
//import { Link } from 'react-router-dom';
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
               
                <Grid container spacing={3}  justify="space-around"  alignItems="flex-start" style={{padding: '100px', flexGrow: '1'}}>
                
                    <Grid item sm={7} >
                    
                        <Grid item >
                            <CustomerSelect/>                             
                  
                        
                            </Grid> 
                        
                        <Grid item md={12} style={{padding: '10px'}}>
                            
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
                    
                    <Grid item xs={8}>
                    
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