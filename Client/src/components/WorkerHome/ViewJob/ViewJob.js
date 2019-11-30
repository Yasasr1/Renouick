//display a single job after clicking on it in the list
import React from 'react';
import { Grid, Divider, Button, Chip, Typography } from '@material-ui/core';
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
            </Grid>
            <Grid item md={1}>
                <Button variant="contained" color="primary">Contact</Button>
            </Grid>
            <Grid item md={1}>
                <Button variant="contained" color="primary">Place Bid</Button>
            </Grid>
        </Grid>
    )
};

export default ViewJob;