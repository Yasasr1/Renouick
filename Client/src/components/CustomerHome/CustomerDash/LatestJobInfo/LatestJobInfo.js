import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import { Divider } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Rating from '@material-ui/lab/Rating';






class LatestJobInfo extends Component {
    state = {
        isImageSelected: false,
        t : true
    }

    selectedImage = <Typography variant="caption">No photos</Typography>

    firstLoad = true;
    
    render() {
        //display selected image bigger
        const selectImage = (event) => {
            console.log(event.target.src);
            this.selectedImage = <img src={event.target.src} alt="selected" height="100%" width="100%"/>
            this.setState({isImageSelected: !this.state.selectImage});
        }
    
        let imageElements = <Typography variant="caption">No photos</Typography>;
    
        //if there are any images passed as props, url's of those images will be mapped to a array
        
        if(this.props.images) {
            const imagesPassed = this.props.images;
            const imagesArray = imagesPassed.map(image => image.url)
            
            //this should only run when component load for the first time
            if(this.firstLoad) {
                //setting the last image in the array to the selected image 
                this.selectedImage = <img src={imagesArray[imagesArray.length-1]} alt="selected" height="80%" width="80%"/>
                this.firstLoad = false;
            }
            //save images to img elements 
            imageElements = imagesArray.map(url => 
                (<Grid item xs={2} key={url} >
                   <img onClick={selectImage} src={url} alt="job photos" style={{width: '50%', height: '50%'}}></img> 
                </Grid>)
            )
        }
    
        //if the props isWorkerAssigned is true worker info will also be displayed
        const workerInfo = (
            <React.Fragment>
                <Divider/>
                <br/>
                <Grid container>      
                    <Grid item md={4}>
                        <h5> assigned worker photo</h5>
                    </Grid>
                    <Grid item md={8}>
                        <Typography variant="h5">(Worker name)</Typography>
                        <Typography variant="body2">Worker rating</Typography>
                        <Rating value={3} readOnly />
                    </Grid>
                </Grid>
            </React.Fragment>
        );


        return(
            <Paper style={{padding: '25px'}}>
               <h4 align="center">{this.props.title}</h4>
               <Divider/>
               <br/>
               <Grid container>
                    <Grid item md={5}>
                        <Grid container>
                            <Grid item md={12}> 
                                {this.selectedImage}    
                            </Grid>
                            {imageElements}
                        </Grid>
                    </Grid>
                    <Grid style={{padding:"20px"}} item md={7}>
                    <Typography variant="caption" gutterBottom>{this.props.category}</Typography>
                    <br/>
                        <Typography variant="body1" gutterBottom>{this.props.description}</Typography>
                        <Typography variant="h5" color="secondary" gutterBottom>{this.props.status}</Typography>
                        <Typography variant="overline" gutterBottom>{this.props.worker || "No assigned workers.."}</Typography>
                    </Grid>
               </Grid>
               {this.props.isWorkerAssigned ? workerInfo : null}
            </Paper>
        );
    }
    
};

export default LatestJobInfo;