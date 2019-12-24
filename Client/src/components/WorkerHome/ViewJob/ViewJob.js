//display a single job after clicking on it in the list
import React from 'react';
import { Grid, Divider, Button, Chip, Typography, TextField } from '@material-ui/core';
import { Carousel } from 'react-bootstrap';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';



const ViewJob = (props) => {

    let images = null;
    const date = new Date(props.location.state.date).toLocaleString();


    if(props.location.state.images.length > 0) {
        images = props.location.state.images.map(image => {
            return <Carousel.Item key={image.publicId}>
                <img
                className="d-block w-100 h-100"
                src={image.url}
                alt="First pic"
                /> 
            </Carousel.Item>
        })
    }
    //{props.location.state.title}
    return (
        <Grid style={{margin: '100px', padding: '20px'}} container spacing={2}>
            <Grid item md={12}>
                <h3>{props.location.state.title}</h3>
            </Grid>
            <Grid item md={12}>
                <Divider/>
            </Grid>
            <Grid item md={5}>
                <Carousel>
                    {images}
                </Carousel>
            </Grid>
            <Grid item md={7}>
            <Chip size="medium" label={props.location.state.cat} icon={<LocalOfferIcon/>}/>
            <br/>
            <p style={{fontSize: '1.2rem'}}>{props.location.state.desc}</p>
            
            </Grid>
            <Grid item md={12}>
                <p className="h6">Posted By : {props.location.state.poster}</p>
                <p className="h6">Poste Date : {date}</p>
                <p className="h6">Contact Number : {props.location.state.contactNumber}</p>
            </Grid>
            <Grid item md={12}>
                <Divider/>
                <Typography variant="h5">Place a Bid</Typography>
                <br/>
                <Typography variant="body1">Enter the price you expect to charge for this job and click the bid button to place a bid</Typography>
            </Grid>
            <Grid item md={2}>
                <TextField label="Amount" id="amount"/>
            </Grid>
            <Grid item md={2}>
                <Button variant="contained" style={{marginTop:'12px', backgroundColor: 'orange'}}>Bid</Button>
            </Grid>
        </Grid>
    )
};

export default ViewJob;