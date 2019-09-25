import React ,{ Component } from 'react';
import Grid from '@material-ui/core/Grid';
import JobPostForm from './JobPostForm/JobPostForm';
import Ad from './Ad/Ad';
import { connect } from 'react-redux';
import axios from 'axios';



class PostJob extends Component {
    state ={
        jobTitle: '',
        jobDesc: '',
        jobCategory: '',
        isValid: true
       
    }

    handleInput = (event) => {
        let newState = {
            ...this.state,
            [event.target.name] : event.target.value
        };

        this.setState(newState);

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

    handleSubmit = () => {
        
        if(this.validateInputs()) {
            let currentDate = new Date()
            const newJob = {
                title: this.state.jobTitle,
                category: this.state.jobCategory,
                description: this.state.jobDesc,
                postDate: currentDate,
                poster: this.props.email,
                status: 'pending'
            };
    
            axios.post('http://localhost:4000/job/post',newJob)
            .then(res => {
                console.log(res.data);
                alert(res.data.job);
            })
            .catch(error => {
                console.log(error);
                alert('job posting failed');
            })
        }
        
       


    }

    render() {
        
        return(
            <Grid justify="center" container spacing={5} style={{padding: '80px', flexGrow: '1', marginTop: '20px'}}>
                <Grid item md={7}>
                    <JobPostForm 
                    jobCategory={this.state.jobCategory}
                    Change={this.handleInput}
                    Desc={this.state.jobDesc}
                    onSubmit={this.handleSubmit}
                    valid={this.state.isValid}
                  
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