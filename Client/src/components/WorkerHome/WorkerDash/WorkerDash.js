import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import ProfileImg from '../../CustomerHome/CustomerDash/ProfileImg/ProfileImg';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import RatingInfo from '../../CustomerHome/CustomerDash/RatingInfo/RatingInfo';
import StatisticsCard from './StatisticsCard/StatisticsCard';
import EarningsChart from './EarningsChart/EarningsChart';
import avatar from '../../../assests/testAvatar/avatar.jpg';

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

class WorkerDash extends Component {

    
    render() { 
        
        return (
            <Grid container spacing={3} justify="center" style={{flexGrow: '1', padding: '40px', marginTop: '60px', marginLeft: '20px', backgroundColor: '#f0f0cc'}}>

                <Grid item md={3}>
                    <ProfileImg source={avatar}/>
                    <Grid container justify="center" spacing={3}>
                            <Grid item md={12}>
                                <br/>
                                <Divider/>
                            </Grid>
                            <Grid item md={12}>
                                <Grid container spacing={1} justify="center">

                                    <Grid item md={12}>
                                        <AlternateEmailIcon fontSize="small" color="primary" style={{padding:"3px"}}/>
                                        <Typography variant="caption">:yasasramanayaka@gmail.com</Typography>
                                    </Grid>

                                    <Grid item md={12}>
                                        <PhoneIcon fontSize="small" color="primary" style={{padding:"3px"}}/>
                                        <Typography variant="caption">:071738036</Typography>
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
                            <ProfileInfo/>
                        </Grid>
                        <Grid item md={12}>
                            <RatingInfo/>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item md={2}>
                    <Grid container spacing={3} justify="center">
                        <Grid item md={12}>
                            <StatisticsCard 
                            desc={"Total jobs completed"} 
                            number={23}
                            icon={<CheckCircleOutlineIcon fontSize='large' style={{color: 'white'}}/>}
                            color={"#2aad0c"}
                            />
                        </Grid>
                        <Grid item md={12}>
                            <StatisticsCard
                            desc={"Ongoing Jobs"} 
                            number={4}
                            icon={<AutorenewIcon fontSize='large' style={{color: 'white'}}/>}
                            color={"#faba39"}
                            />
                        </Grid>
                        <Grid item md={12}>
                            <StatisticsCard
                            desc={"Pending Bids"} 
                            number={2}
                            icon={<TimelapseIcon fontSize='large' style={{color: 'white'}}/>}
                            color={"DarkOrange"}
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
                    <LatestBidInfo/>
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
                    <EarningsChart/>
                </Grid>
            </Grid>
        );
    }
}

export default WorkerDash;