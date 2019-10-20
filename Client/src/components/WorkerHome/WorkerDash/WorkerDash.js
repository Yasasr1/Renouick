import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

import ProfileImg from '../../CustomerHome/CustomerDash/ProfileImg/ProfileImg';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import RatingInfo from '../../CustomerHome/CustomerDash/RatingInfo/RatingInfo';
import StatisticsCard from './StatisticsCard/StatisticsCard';
import avatar from '../../../assests/testAvatar/avatar.jpg';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import TimelapseIcon from '@material-ui/icons/Timelapse';
import { IconButton, Divider } from '@material-ui/core';
import Icon from '@mdi/react'
import { mdiFacebookBox, mdiTwitter } from '@mdi/js';
import Typography from '@material-ui/core/Typography';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import PhoneIcon from '@material-ui/icons/Phone';
import LatestBidInfo from './LatestBidInfo/LatestBidInfo';

import { LineChart, XAxis, YAxis, Tooltip, Legend, Line, CartesianGrid} from 'recharts';



class WorkerDash extends Component {

    
    render() { 
        const data = [
            {
              "name": "Page A",
              "uv": 4000,
              "pv": 2400,
              "amt": 2400
            },
            {
              "name": "Page B",
              "uv": 3000,
              "pv": 1398,
              "amt": 2210
            },
            {
              "name": "Page C",
              "uv": 2000,
              "pv": 9800,
              "amt": 2290
            },
            {
              "name": "Page D",
              "uv": 2780,
              "pv": 3908,
              "amt": 2000
            },
            {
              "name": "Page E",
              "uv": 1890,
              "pv": 4800,
              "amt": 2181
            },
            {
              "name": "Page F",
              "uv": 2390,
              "pv": 3800,
              "amt": 2500
            },
            {
              "name": "Page G",
              "uv": 3490,
              "pv": 4300,
              "amt": 2100
            }
          ]
            
        return (
            <Grid container spacing={3} justify="center" style={{flexGrow: '1', padding: '40px', marginTop: '80px', marginLeft: '20px'}}>

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
                            color={"Lime"}
                            />
                        </Grid>
                        <Grid item md={12}>
                            <StatisticsCard
                            desc={"Ongoing Jobs"} 
                            number={4}
                            icon={<AutorenewIcon fontSize='large' style={{color: 'white'}}/>}
                            color={"Gold"}
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
                <Grid item md={12}>
                    <LatestBidInfo/>
                </Grid>
                <Grid item md={12}>
                <LineChart width={730} height={250} data={data}
  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="name" />
  <YAxis />
  <Tooltip />
  <Legend />
  <Line type="monotone" dataKey="pv" stroke="#8884d8" />
  <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
</LineChart>
                </Grid>
            </Grid>
        );
    }
}

export default WorkerDash;