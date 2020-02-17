import React, { Component } from 'react';
import { Paper, Grid, GridList, GridListTile, Typography, Divider, Button, Chip } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import { Redirect } from 'react-router-dom';


class Job extends Component {
    state = {
        redirect : null
    }
    

    selectJob = () => {
        this.setState({redirect: <Redirect push to={{
            pathname: "/worker/viewJob",
            state: {
                id:this.props.id,
                title: this.props.title,
                poster: this.props.poster,
                desc: this.props.desc,
                cat: this.props.cat,
                date: this.props.date,
                images: this.props.images,
                contactNumber:this.props.contactNumber
            }
        }}/>})  
    };
    
    //if images are available display them and if not display no photos message
    render () {
        const category = this.props.cat;
        const date = new Date(this.props.date).toLocaleString();
        
        //if there are images map them to the variable localimages
        //and save the first image of the array to firstImage variable
        let localImages = null;
        let firstImage = null;
        if(this.props.images.length > 0) {
            firstImage = this.props.images[0].url;
            localImages = this.props.images.slice(1).map(photo => {
                return <GridListTile key={photo.publicId} cols={1}>
                        <img src={photo.url} alt="job"  border={5}/>
                    </GridListTile>
            })
        }
        return (
            <React.Fragment>
            {this.state.redirect}
            <Paper className="shadow p-3 mb-5 bg-white rounded" style={{padding: '30px', margin: '20px'}}>
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
                        <Typography variant="h6" align="center">{this.props.title}</Typography>
                        <Divider/>
                        <Chip size="small" label={category} icon={<LocalOfferIcon/>}/>
                        <div style={{float: 'right'}}>
                            <PersonIcon fontSize="small"/>
                            <Typography variant="caption">{this.props.poster}</Typography>
                            <br/>
                            <CalendarTodayIcon fontSize="small"/>
                            <Typography variant="caption" color="textSecondary">{date}</Typography>
                        </div>
                        <br/>
                        <br/>
                        <Typography variant="body1" color="textSecondary">
                            {this.props.desc}
                        </Typography>
                        <br/>
                        <Typography variant="caption" color="textSecondary">
                            Location: {this.props.address}
                        </Typography>
                        <br/>
                        <Button onClick={this.selectJob} variant="outlined" style={{float: 'right', color: '#e68a00', borderColor: 'orange'}}>View</Button>
                    </Grid>
                </Grid>
                <br/>
            </Paper>
            </React.Fragment>
            
        );
    }
    
};

export default Job;

