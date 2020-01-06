import React,{ Component } from 'react';
import { connect } from 'react-redux';
import {Grid, Button} from '@material-ui/core/';
//import ProfileImg from './ProfileImg/ProfileImg';
import Profileinfo from './ProfileInfo/ProfileInfo'; 
import * as actions from '../../../store/actions/user';
import axios from 'axios';
import CustomerSelect from './CustomerSelect/CustomerSelect';
import CardBox1 from '../../UI/Card/CardBox1';
import ProfileImg from './ProfileImg/ProfileImg';
import profilePic from '../../../assests/OurTeam/member2.jpg';
import Typography from '@material-ui/core/Typography';
//import { Link } from 'react-router-dom';
//import Button from @material-ui
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
                <Grid container spacing={3} justify="center"  style={{padding: '100px', flexGrow: '1'}}></Grid>
               
                    <Grid item xs={4}>
                    <CardBox1 image={profilePic}/>
                             
                    </Grid>
                    <Grid item xs={5} >
                        
                             <Profileinfo
                             gender={this.props.gender}
                             address={this.props.address}
                             email={this.props.email}
                             birthday={this.props.birthday}
                             fName={this.props.fName}
                             lName={this.props.lName}
                             />
                        </Grid>
                        <Grid item xs={3}>
                        <CustomerSelect/>
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