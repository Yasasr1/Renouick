import React,{ Component } from 'react';
import { connect } from 'react-redux';

import Grid from '@material-ui/core/Grid';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ProfileImg from './ProfileImg/ProfileImg';
import Profileinfo from './ProfileInfo/ProfileInfo'; 
import EditInfo from './EditInfo/EditInfo';
import RatingInfo from './RatingInfo/RatingInfo';
import LatestJobInfo from './LatestJobInfo/LatestJobInfo';
import { IconButton, Divider } from '@material-ui/core';

import Icon from '@mdi/react'
import { mdiFacebookBox, mdiTwitter } from '@mdi/js';
//importing action creators
import * as actions from '../../../store/actions/user';

import axios from 'axios';




class CustomerDash extends Component {
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
        let latestJob = <p>No Jobs</p>
        if(this.state.latestJob) {
            latestJob = <LatestJobInfo
                        title={this.state.latestJob.title}
                        category={this.state.latestJob.category}
                        description={this.state.latestJob.description}
                        status={this.state.latestJob.status}
                        images={this.state.latestJob.images}
                        isWorkerAssigned={false}
                        />
        }

        return (
            <div style={{backgroundColor: '#F5F1FA'}}>
                <Grid container spacing={3} justify="center" style={{padding: '30px', flexGrow: '1'}}>
                    <Grid item md={3}>
                        <ProfileImg source={this.props.picUrl}/>
                        <Grid container justify="center" spacing={3}>
                            <Grid item md={12}>
                                <br/>
                                <Divider/>
                            </Grid>
                            <IconButton onClick={()=>this.openSocialMedia('facebook')}>
                                <Icon path={mdiFacebookBox} size={1.5} color="blue"/>
                            </IconButton>
                            <IconButton onClick={()=>this.openSocialMedia('twitter')}>
                                <Icon path={mdiTwitter} size={1.5} color="cyan"/>
                            </IconButton>
                        </Grid>
                       
                    </Grid>
                    <Grid item sm={7} >
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
                        <Grid item md={12}> 
                            <RatingInfo/>
                        </Grid>
                    </Grid>                    
                    <Grid item sm={2}>
                        <EditInfo/>
                    </Grid>
                </Grid>

                <Grid container style={{padding: '30px'}}>
                    <ArrowForwardIosIcon color="primary"/>
                    <h5 style={{marginLeft: '30px'}}>Latest Job</h5>
                </Grid>
                
                <Grid container justify="center" style={{padding: '30px', flexGrow: '1'}}>    
                    <Grid item md={12}>
                        {latestJob}
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


export default connect(mapStateToProps,mapDispatchToProps)(CustomerDash);