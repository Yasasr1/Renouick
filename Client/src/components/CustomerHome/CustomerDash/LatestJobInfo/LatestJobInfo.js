import React, { Component } from 'react';
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import { Divider,Chip } from '@material-ui/core';
import { Carousel } from 'react-bootstrap';
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
        workerPic: ''
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

        if(this.props.status == "Ongoing"){
            axios.get("http://localhost:4000/worker/getsomeInfo", {
                params: {
                    email: this.props.worker
                }
            })
            .then(res => {
                console.log(res.data[0].firstName);
                this.setState({workerFName: res.data[0].firstName,workerLName: res.data[0].lastName,workerPic: res.data[0].profilePicUrl});
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
                        <Typography variant="body2">Worker rating</Typography>
                        <Rating value={3} readOnly />
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
        token: state.token,
        
    }
}
export default connect(mapStateToProps,null)(LatestJobInfo);