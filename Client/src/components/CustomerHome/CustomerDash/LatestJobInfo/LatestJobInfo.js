import React, { Component } from 'react';
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import { Divider,Chip, Button,TextField } from '@material-ui/core';
import { Carousel,Modal,Alert} from 'react-bootstrap';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Rating from '@material-ui/lab/Rating';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';


import Bid from './Bid/Bid';
import axios from 'axios';

class LatestJobInfo extends Component {
    state = {
        t : true,
        bids: [],
        workerFName: '',
        workerLName: '',
        workerPic: '',
        totalStars: 0,
        numberOfRatings: 0,
        isRated: false,
        isPopupOpen: false,
        reportTitle: '',
        reportDesc: '',
        alert: null
        
    }

    componentDidMount(){
        console.log("did mount ran");
        axios.get('http://localhost:4000/bid/getBids', {
            params: {
                id: this.props.id
            },
            headers: {
                'x-auth-token': this.props.token
            }
        })
        .then(res => {
            const bids = res.data;
            //console.log(res.data[0].jobId);
            this.setState({bids: bids});
        })
        .catch(err => {
            console.log(err);
        })

        if(this.props.status === "Ongoing"){
            axios.get("http://localhost:4000/worker/getsomeInfo", {
                params: {
                    email: this.props.worker
                }
            })
            .then(res => {
                console.log(res.data[0]);
                this.setState({workerFName: res.data[0].firstName,workerLName: res.data[0].lastName,workerPic: res.data[0].profilePicUrl,
                totalStars: res.data[0].totalStars, numberOfRatings: res.data[0].numberOfRatings});
            })
            .catch(err => {
                console.log(err);
            })
        }
    }

    componentDidUpdate(){
        axios.get('http://localhost:4000/bid/getBids', {
            params: {
                id: this.props.id
            },
            headers: {
                'x-auth-token': this.props.token
            }
        })
        .then(res => {
            const bids = res.data;
            //console.log(res.data[0].jobId);
            if(this.state.bids.length > 0 && res.data.length > 0){
                if(this.state.bids[0].jobId !== res.data[0].jobId){
                    this.setState({bids: bids});
                }
            }else if(this.state.bids.length === 0){
                if(res.data.length > 0){
                    this.setState({bids: bids});
                }
            }else if(this.state.bids.length > 0){
                if(res.data.length === 0){
                    this.setState({bids: bids});
                }
            }
        })
        .catch(err => {
            console.log(err);
        })
    }

    handleRating = (newValue) => {
        let numberRated = this.state.numberOfRatings
        let newTotalStars = this.state.totalStars + newValue;
        //console.log(newRating);
        this.setState({numberOfRatings: numberRated+1, totalStars: newTotalStars,isRated:true});
        let ratingObject = {
            email: this.props.worker,
            totalStars: newTotalStars,
            numberOfRatings: numberRated+1
        }

        axios.post('http://localhost:4000/worker/addRating',ratingObject)
        .then(res => {
            console.log(res.data);
            
        })
        .catch(error => {
            console.log(error);
        })
    }

    handleModelOpen = () => {
        this.setState({isPopupOpen: true});
    }

    handleModelClose = () => {
        this.setState({isPopupOpen: false});
    }

    //handle report input
    handleChange = (event) => {
        let newState = {
            ...this.state,
            [event.target.name]: event.target.value
        }

        this.setState(newState);
    }

    handleReportSubmit = ()=> {
        let report = {
            poster: this.props.email,
            ReportedAbout: this.props.worker,
            title: this.state.reportTitle,
            description: this.state.reportDesc
        }

        axios.post('http://localhost:4000/report/post',report)
            .then(res => {
                console.log(res.data);
                let alert = <Alert variant="success">Report submitted</Alert>
                this.setState({alert: alert})
                
            })
            .catch(error => {
                console.log(error);
                
                
            })

        this.handleModelClose();
    }

    render() {
        
        let images = <p>no images</p>;
        let bids = <p className="h6">No bids..</p>

        let isOngoing = false;
        if(this.props.status === "Ongoing"){
            isOngoing = true;
        }

        if(this.state.bids.length > 0 && this.props.status === "pending"){
            bids = this.state.bids.map(bid => {
                return <Bid
                    key={bid._id}
                    bidId={bid._id}
                    amount={bid.amount}
                    poster={bid.poster}
                    date={bid.postDate}
                    jobId={bid.jobId}
                />
            })
        }

        if(this.props.status === "accepted"){
            bids = null;
        }
        

        if(this.props.images.length > 0) {
            images = this.props.images.map(image => {
                return <Carousel.Item key={image.publicId}>
                    <img
                    className="d-block w-100 h-100"
                    src={image.url}
                    alt="First pic"
                    /> 
                </Carousel.Item>
            })
        }
    
        //if the props isWorkerAssigned is true worker info will also be displayed
        const workerInfo = (
            <React.Fragment>
                <br/>
                <Typography variant="body1">Assigned worker:</Typography>
                <Divider/>
                <br/>
                <Grid container>      
                    <Grid item md={4}>
                        <img src={this.state.workerPic} alt="worker"/>
                    </Grid>
                    <Grid item md={8}>
                        <Typography variant="h5">{this.state.workerFName} {this.state.workerLName}</Typography>
                        <br/>
                        <Typography variant="body2">Rate the worker</Typography>
                        {this.state.isRated ?
                         <Rating value={this.state.totalStars/this.state.numberOfRatings} readOnly/> 
                            : 
                            <Rating value={this.state.totalStars/this.state.numberOfRatings} onChange={(event, newValue) => {
                            this.handleRating(newValue)}}/>} 
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <Button
                        variant="contained"
                        color="secondary"
                        style={{float: 'right'}}
                        onClick={this.handleModelOpen}
                    >
                        Report
                    </Button>
                    <Modal show={this.state.isPopupOpen} onHide={this.handleModelClose}>
                        <Modal.Header closeButton>
                        <Modal.Title>Report Worker</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <TextField onChange={this.handleChange} id="tile" name="reportTitle" label="Report Title" fullWidth />
                            <br/>
                            <br/>
                            <TextField onChange={this.handleChange} id="description" name="reportDesc" label="Description" multiline rowsMax="10" fullWidth/>
                        </Modal.Body>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleModelClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={this.handleReportSubmit}>
                            Submit
                        </Button>
                        </Modal.Footer>
                    </Modal>
                    <br/>
                    <br/>
                    {this.state.alert}
                    </Grid>
                </Grid>
            </React.Fragment>
        );
        return(
            <Paper className="shadow p-3 mb-5 bg-white rounded" style={{padding: '25px'}}>
               <h4 align="center">{this.props.title}</h4>
               <Divider/>
               <br/>
               <Grid container>
                    <Grid item md={4}>
                        <Carousel>
                            {images}
                        </Carousel>
                    </Grid>
                    <Grid item md={1}>
                        <Divider orientation="vertical"/>
                    </Grid>
                    <Grid style={{padding:"20px"}} item md={7}>
                    <Chip size="small" label={this.props.category} icon={<LocalOfferIcon/>}/>
                    <br/>
                    <br/>
                        <Typography variant="body1" gutterBottom>{this.props.description}</Typography>
                        <br/>
                        <br/>
                        <Typography variant="overline" color="secondary" gutterBottom>status: {this.props.status}</Typography>
                        <br/>
                        <Typography variant="overline" gutterBottom>{isOngoing ? "" : "No assigned workers.."}</Typography>
                    </Grid>
               </Grid>
               {isOngoing ? workerInfo : null}
               <br/>
               <Divider/>
               <br/>
               <p className="h4">Current Bids</p>
               <br/>
               {bids}
            </Paper>
        );
    }  
};

const mapStateToProps = state => {
    return {
        email: state.email,
        token: state.token,
        
    }
}
export default connect(mapStateToProps,null)(LatestJobInfo);