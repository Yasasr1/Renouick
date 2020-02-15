import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import ProfileImg from '../../CustomerHome/CustomerDash/ProfileImg/ProfileImg';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import RatingInfo from '../../CustomerHome/CustomerDash/RatingInfo/RatingInfo';
import StatisticsCard from './StatisticsCard/StatisticsCard';
import EarningsChart from './EarningsChart/EarningsChart';
import EditInfoWorker from './EditInfoWorker/EditInfoWorker';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/user';


import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import TimelapseIcon from '@material-ui/icons/Timelapse';
import { IconButton, Divider } from '@material-ui/core';
import Icon from '@mdi/react'
import { mdiFacebookBox, mdiTwitter } from '@mdi/js';
import Typography from '@material-ui/core/Typography';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import PhoneIcon from '@material-ui/icons/Phone';
import HistoryIcon from '@material-ui/icons/History';
import LatestBidInfo from './LatestBidInfo/LatestBidInfo';
import axios from 'axios';

class WorkerDash extends Component {
    state = {
        latestBid: {
            jobTitle: "",
            jobPoster: "",
            price: 0,
            status: "",
        },
        counts: {
            completed: 0,
            Ongoing: 0,
            pending: 0
        },
        bids: []
    }

    componentDidMount(){
        this.props.getWorkerInfo(this.props.email,this.props.token);

        //to get latest bid info
        axios.get('http://localhost:4000/bid/getLatest', {
            headers: {
                'x-auth-token': this.props.token
            },
            params: {
                email: this.props.email
            }
        })
        .then(res => {
            const bid = res.data;
            //console.log(bid);
            this.setState({latestBid:bid});
        })
        .catch(err => {
            console.log(err);
        })

        axios.get('http://localhost:4000/job/getCounts', {
            params: {
                email: this.props.email
            }
        })
        .then(res => {
            console.log(res.data);
            this.setState({counts: res.data})
        })
        .catch(err => {
            console.log(err);
        })

        
    }

    
    render() { 
        
        return (
            <Grid container spacing={3} justify="center" style={{flexGrow: '1', padding: '40px', marginTop: '60px', marginLeft: '20px', backgroundColor: '#f0f0cc'}}>

                <Grid item md={3}>
                    <ProfileImg source={this.props.picUrl}/>
                    <Grid container justify="center" spacing={3}>
                            <Grid item md={12}>
                                <br/>
                                <Divider/>
                            </Grid>
                            <Grid item md={12}>
                                <Grid container spacing={1} justify="center">

                                    <Grid item md={12}>
                                        <AlternateEmailIcon fontSize="small" color="primary" style={{padding:"3px"}}/>
                                        <Typography variant="caption">:{this.props.email}</Typography>
                                    </Grid>

                                    <Grid item md={12}>
                                        <PhoneIcon fontSize="small" color="primary" style={{padding:"3px"}}/>
                                        <Typography variant="caption">:{this.props.contactNumber}</Typography>
                                    </Grid>

                                </Grid>
                            </Grid>
                            <IconButton>
                                <Icon path={mdiFacebookBox} size={1.5} color="blue"/>
                            </IconButton>
                            <IconButton>
                                <Icon path={mdiTwitter} size={1.5} color="cyan"/>
                            </IconButton>
                    </Grid>
                </Grid>
                <Grid item md={6}>
                    <Grid container spacing={2}>
                        <Grid item md={12}>
                            <ProfileInfo
                            fName={this.props.fName}
                            lName={this.props.lName}
                            birthday={this.props.birthday}
                            profession={this.props.profession}
                            />
                        </Grid>
                        <Grid item md={12}>
                            <RatingInfo
                            totalStars={this.props.totalStars}
                            numberOfRatings={this.props.numberOfRatings}
                            />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item md={2}>
                    <Grid container spacing={3} justify="center">
                        <Grid item md={12}>
                            <StatisticsCard 
                            desc={"Total jobs completed"} 
                            number={this.state.counts.completed}
                            icon={<CheckCircleOutlineIcon fontSize='large' style={{color: 'white'}}/>}
                            color={"#2aad0c"}
                            />
                        </Grid>
                        <Grid item md={12}>
                            <StatisticsCard
                            desc={"Ongoing Jobs"} 
                            number={this.state.counts.Ongoing}
                            icon={<AutorenewIcon fontSize='large' style={{color: 'white'}}/>}
                            color={"#faba39"}
                            />
                        </Grid>
                        <Grid item md={12}>
                            <StatisticsCard
                            desc={"Pending Bids"} 
                            number={this.state.counts.pending}
                            icon={<TimelapseIcon fontSize='large' style={{color: 'white'}}/>}
                            color={"DarkOrange"}
                            />
                        </Grid>
                        <Grid item md={12}>
                        <EditInfoWorker
                             email={this.props.email}
                             history={this.props.history}
                            />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item md={11}>
                    <Divider/>
                </Grid>
                <Grid item md={11}>
                    <Grid container spacing={1}>
                        <Grid item xl={4}>
                            <h5>Latest Bid</h5>
                        </Grid>
                        <Grid item sm={4}>
                            <LabelImportantIcon/>
                        </Grid>
                    </Grid>  
                </Grid>
                <Grid item md={11}>
                    <LatestBidInfo
                    jobTitle={this.state.latestBid.jobTitle}
                    jobPoster={this.state.latestBid.jobPoster}
                    price={this.state.latestBid.price}
                    status={this.state.latestBid.status}
                    />
                </Grid>
                <Grid item md={11}>
                    <Divider/>
                </Grid>
                <Grid item md={11}>
                    <Grid container spacing={1}>
                        <Grid item xl={4}>
                            <h5>Monthly Earnings</h5>
                        </Grid>
                        <Grid item sm={4}>
                            <HistoryIcon/>
                        </Grid>
                    </Grid>  
                </Grid>
                <Grid item md={11}>
                    <EarningsChart 
                    data={this.state.bids}
                    />
                </Grid>
            </Grid>
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
        twitter: state.user.twitter,
        contactNumber:state.user.contactNumber,
        profession:state.user.profession,
        totalStars:state.user.totalStars,
        numberOfRatings:state.user.numberOfRatings
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getWorkerInfo: (email, token) => dispatch(actions.getWorker(email, token))
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(WorkerDash);