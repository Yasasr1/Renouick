import React ,{ Component } from 'react';
import Grid from '@material-ui/core/Grid';
import JobPostForm from './JobPostForm/JobPostForm';
import Ad from './Ad/Ad';



class PostJob extends Component {
    state ={
        jobTitle: '',
        jobDesc: '',
        jobCategory: ''
    }

    handleInput = (event) => {
        let newState = {
            ...this.state,
            [event.target.name] : event.target.value
        };

        this.setState(newState);

    }

    render() {
        return(
            <Grid container spacing={3} style={{padding: '30px', flexGrow: '1', marginTop: '50px'}}>
                <Grid item md={9}>
                    <JobPostForm 
                    jobCategory={this.state.jobCategory}
                    Change={this.handleInput}
                    Desc={this.state.jobDesc}
                    />
                </Grid>
                <Grid item md={3}>
                    <Ad/>
                </Grid>
            </Grid>
        );
    }
}

export default PostJob;