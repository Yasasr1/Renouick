import React from 'react';
import { Paper, Grid, GridList, GridListTile, Typography, Divider, Button, Chip } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';


import img1 from '../../../../assests/testImages/images.jpg';
import img2 from '../../../../assests/testImages/images1.jpg';
import img3 from '../../../../assests/testImages/images2.jpeg';
import img4 from '../../../../assests/testImages/images3.jpeg';

const Job = (props) => {
    const category = props.cat;
    const date = new Date(props.date).toLocaleString();
    return (
        <Paper style={{padding: '30px', margin: '20px'}}>
            <Grid container spacing={1}>
                <Grid item md={3}>
                    <GridList cellHeight={120} cols={1}>
                        <GridListTile cols={1}>
                            <img src={img1} alt="painting"  border={5}/>
                        </GridListTile>
                    </GridList>
                    <GridList cellHeight={70} cols={4}>  
                        <GridListTile cols={1}>
                            <img src={img2} alt="painting"/>
                        </GridListTile>
                        <GridListTile cols={1}>
                            <img src={img3} alt="painting"/>
                        </GridListTile>
                        <GridListTile cols={1}>
                            <img src={img4} alt="painting"/>
                        </GridListTile>
                        <GridListTile cols={1}>
                            <img src={img1} alt="painting"/>
                        </GridListTile>
                    </GridList>
                </Grid>

                <Grid item md={9}>
                    <Typography variant="h6" align="center">{props.title}</Typography>
                    <Divider/>
                    <Chip size="small" label={category} icon={<LocalOfferIcon/>}/>
                    <div style={{float: 'right'}}>
                        <PersonIcon fontSize="small"/>
                        <Typography variant="caption">{props.poster}</Typography>
                        <br/>
                        <CalendarTodayIcon fontSize="small"/>
                        <Typography variant="caption" color="textSecondary">{date}</Typography>
                    </div>
                    <br/>
                    <br/>
                    <Typography variant="body1" color="textSecondary">
                        {props.desc}
                    </Typography>
                    <br/>
                    <br/>
                    <Button variant="outlined" style={{float: 'right', color: '#e68a00', borderColor: 'orange'}}>View</Button>
                </Grid>
            </Grid>
            <br/>
        </Paper>
    );
};

export default Job;

