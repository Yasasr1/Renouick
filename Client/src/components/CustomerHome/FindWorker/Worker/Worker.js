import React from 'react';
import { Paper, Grid, Typography, Divider, Button, Chip } from '@material-ui/core';
import profiePicture from '../../../../assests/testAvatar/avatar.jpg';
import WorkIcon from '@material-ui/icons/Work';
import TodayIcon from '@material-ui/icons/Today';
import StarIcon from '@material-ui/icons/Star';

const Worker = (props) => {
    let profilePic = true;
    return (
        <Paper style={{padding: '20px'}}>
             <Grid container spacing={1}>
                <Grid item md={3}>
                    {profilePic ? <img src={profiePicture}
                    style={{width: '70%', height: 'inherent', borderRadius: '8px' }}
                    ></img>
                    : <p>No Photo</p>}
                </Grid>
                <Grid item md={9}>
                    <Typography variant="h6" align="center">Yasas Ramanayaka</Typography>
                    <Divider/>
                    <br/>
                    <Grid container spacing={1}>
                        <Grid item md={1}>
                            <WorkIcon/>
                        </Grid>
                        <Grid item md={2}>
                            <Typography variant="overline">Profession</Typography>
                        </Grid>
                        <Grid item md={9}>
                            <Typography variant="overline">:Painting</Typography>
                        </Grid>
                        <Grid item md={1}>
                            <TodayIcon/>
                        </Grid>
                        <Grid item md={2}>
                        <Typography variant="overline">Age</Typography>
                        </Grid>
                        <Grid item md={9}>
                            <Typography variant="overline">:45</Typography>
                        </Grid>
                        <Grid item md={1}>
                            <StarIcon/>
                        </Grid>
                        <Grid item md={2}>
                        <Typography variant="overline">Rating</Typography>
                        </Grid>
                        <Grid item md={9}>
                            <Typography variant="overline">:3.9</Typography>
                        </Grid>
                    </Grid>
                    <Button variant="outlined" style={{float: 'right', color: '#e68a00', borderColor: 'orange'}}>View Profile</Button>
                </Grid>

             </Grid>
        </Paper>
    );
};

export default Worker;