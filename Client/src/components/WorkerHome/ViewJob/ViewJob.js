//display a single job after clicking on it in the list
import React, { useState } from 'react';
import { Grid, Divider, Button, Chip, Typography, TextField, Snackbar, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { Carousel } from 'react-bootstrap';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import axios from 'axios';



const ViewJob = (props) => {

    //for bid amount
    const[amount,setAmount] = useState(0);
    //for opening the snackbar after bid is placed
    const[open,setOpen] = useState(false);
    //responce after bid is placeed
    const[message,setMessage] = useState("");

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

    //close snackbar
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
      };
    

    const placeBIdHandler = () => {
        const bid = {
            amount: amount,
            poster: props.location.state.poster,
            jobId: props.location.state.id,
            status: "pending",
            postDate: props.location.state.date
        }

        axios.post('http://localhost:4000/bid/add',bid)
        .then(res=> {
            console.log(res.data);
            setOpen(true);
            setMessage(res.data.bid);
        })
        .catch(error=> {
            console.log(error);
            setOpen(true);
            setMessage("Bid placing failed");
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
                <TextField onChange={(event) => setAmount(event.target.value)} label="Amount" id="amount"/>
            </Grid>
            <Grid item md={2}>
                <Button onClick={placeBIdHandler} variant="contained" style={{marginTop:'12px', backgroundColor: 'orange'}}>Bid</Button>
            </Grid>



            <Snackbar
            style={{backgroundColor: 'green'}}
            anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
            }}
            open={open}
            autoHideDuration={6000}
            onClose={handleClose}
            ContentProps={{
            'aria-describedby': 'message-id',
            }}
            message={<span id="message-id">{message}</span>}
            action={[
            <IconButton
                key="close"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
            >
                <CloseIcon />
            </IconButton>
            ]}
            />
        </Grid>
    )
};

export default ViewJob;