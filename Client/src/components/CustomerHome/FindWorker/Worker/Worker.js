import React from 'react';
import { Paper, Grid, Typography, Divider, Button } from '@material-ui/core';
import WorkIcon from '@material-ui/icons/Work';
import TodayIcon from '@material-ui/icons/Today';
import StarIcon from '@material-ui/icons/Star';

const Worker = (props) => {

    //calculate age
    let today = new Date();
    let birthday = new Date(props.date);
    let age = today.getFullYear() - birthday.getFullYear();
    let month = today.getMonth() - birthday.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthday.getDate())) {
        age--;
    }

    //render the professions to a list
    const profession = props.profession.map(p => {
        return <li key={p}>{p}</li>
    })
        
   
    return (
        <Paper className="shadow p-3 mb-5 bg-white rounded" style={{padding: '20px', margin: '20px'}}>
             <Grid container spacing={1}>
                <Grid item md={3}>
                    <br/>
                    {props.profilePic !== "" ? <img src={props.profilePic} alt="profilepic"
                    style={{width: '70%', height: 'inherent', borderRadius: '8px' }}
                    ></img>
                    : <p>No Photo</p>}
                </Grid>
                <Grid item md={9}>
                    <Typography variant="h6" align="center">{props.fName} {props.lName}</Typography>
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
                            <ul>
                                {profession}
                            </ul>
                        </Grid>
                        <Grid item md={1}>
                            <TodayIcon/>
                        </Grid>
                        <Grid item md={2}>
                        <Typography variant="overline">Age</Typography>
                        </Grid>
                        <Grid item md={9}>
                            <Typography variant="overline">:{age}</Typography>
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