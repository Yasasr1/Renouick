import React from 'react';
import { Paper, Grid, GridList, GridListTile, Typography, Divider, Button, Chip } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';


const Job = (props) => {
    const category = props.cat;
    const date = new Date(props.date).toLocaleString();
    
    //if there are images map them to the variable localimages
    //and save the first image of the array to firstImage variable
    let localImages = null;
    let firstImage = null;
    if(props.images.length > 0) {
        firstImage = props.images[0].url;
        localImages = props.images.slice(1).map(photo => {
            return <GridListTile key={photo.publicId} cols={1}>
                    <img src={photo.url} alt="job"  border={5}/>
                </GridListTile>
        })
    }
    
    //if images are available display them and if not display no photos message
    return (
        <Paper style={{padding: '30px', margin: '20px'}}>
            <Grid container spacing={1}>
                <Grid item md={3}>
                    {localImages ? <div>
                            <GridList cellHeight={120} cols={1}>
                            <GridListTile cols={1}>
                                <img src={firstImage} alt="painting"  border={5}/>
                            </GridListTile>
                            </GridList>
                            <GridList cellHeight={70} cols={4}>  
                                {localImages}
                            </GridList>
                        </div> 
                    : <p>No photos</p>}
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

