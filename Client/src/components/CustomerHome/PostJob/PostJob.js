import React ,{ Component } from 'react';
import Grid from '@material-ui/core/Grid';
import JobPostForm from './JobPostForm/JobPostForm';
import Ad from './Ad/Ad';
import { connect } from 'react-redux';
import axios from 'axios';
import { Divider, Button } from '@material-ui/core';



class PostJob extends Component {
    state ={
        jobTitle: '',
        jobDesc: '',
        jobCategory: '',
        images: [],
        isValid: true
       
    }

    handleInput = (event) => {
        let newState = {
            ...this.state,
            [event.target.name] : event.target.value
        };

        this.setState(newState);

    }

    //save the image url and public id from cloudinary to state
    saveImageData = (result) => { 
        if(result.event === 'success') {
            console.log(result.info);
            const newState = {
                ...this.state,
                images : [...this.state.images,{
                    url: result.info.secure_url,
                    publicId: result.info.public_id
                }]
            }
            this.setState(newState);
        }
    }

    validateInputs = () => {
        if(this.state.jobTitle === '' || this.state.jobCategory === '' || this.state.jobDesc === '') {
            this.setState({isValid: false});
            return false
        }
        else {
            this.setState({isValid: true});
            return true
        }
    }

    clearFormHandler = () => {
        const newState = {
            jobTitle: '',
            jobDesc: '',
            jobCategory: '',
            isValid: true
        }

        this.setState(newState);
    } 

    handleSubmit = () => {
        
        if(this.validateInputs()) {
            let currentDate = new Date()
            const newJob = {
                title: this.state.jobTitle,
                category: this.state.jobCategory,
                description: this.state.jobDesc,
                postDate: currentDate,
                poster: this.props.email,
                status: 'pending',
                images: [...this.state.images]
            };
    
            axios.post('http://localhost:4000/job/post',newJob)
            .then(res => {
                console.log(res.data);
                alert(res.data.job);
                this.clearFormHandler();
            })
            .catch(error => {
                console.log(error);
                alert('job posting failed');
            })
        }
    }

    redirectHandler = () => {
        this.props.history.push('/customer/find_worker');
    }

    render() {
        
        return(
            
            <Grid justify="center" container spacing={5} style={{padding: '20px', flexGrow: '1', marginTop: '10px'}}>
                <Grid item md={12}>
                    <h3 style={{fontFamily:'Roboto, sansSerif'}}>Post a Job</h3>
                    <Divider/>
                    <br/>
                    <h5 style={{ fontFamily:"Calibri " , fontStyle:"Italic" , color:"purple"}}>Feel free to post here whatever the job you require!</h5>
                    <h6>Just enter the required details and uplaod images which shows the current condition. </h6>
                    <h5 style={{ fontFamily:"Calibri " , fontStyle:"Italic" }}>Search a worker if you are in a rush to find a worker for your job</h5>
                    <Button onClick={this.redirectHandler} variant="outlined">Search Worker</Button>
                    
                </Grid>
                <Grid item md={7}>
                    <JobPostForm 
                    jobCategory={this.state.jobCategory}
                    Change={this.handleInput}
                    Desc={this.state.jobDesc}
                    onSubmit={this.handleSubmit}
                    valid={this.state.isValid}
                    clear={this.clearFormHandler}
                    title={this.state.jobTitle}
                    saveImages={(result)=>this.saveImageData(result)}
                  
                    />
                </Grid>
                <Grid item md={3}>
                    <Ad/>
                </Grid>
            </Grid>
            
        );
    }
}

const matchStateToProps = state => {
    return {
        email: state.email
    }
}

export default connect(matchStateToProps,null)(PostJob);