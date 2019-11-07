import React, { Component } from 'react';
import { Grid, Divider, Typography, Link, CircularProgress, Button } from '@material-ui/core';
import ExploreIcon from '@material-ui/icons/Explore';
import axios from 'axios';
import { connect } from 'react-redux';
import Job from './Job/Job';


class BrowseJobs extends Component {
    state = {
        jobs: null,
        loading: true,
    }

    componentDidMount() {
        axios.get('http://localhost:4000/job/getEveryJob', {
            headers: {
                'x-auth-token': this.props.token
            },
            params: {
                email: this.props.email
            }
        })
        .then(res => {
            const jobs = res.data;
            console.log(jobs);
            this.setState({jobs: jobs, loading: false});
        })
        .catch(err => {
            console.log(err);
        })
    }

    //sort the job list based on date, poster or title
    sortJobs = (event) => {
        let jobs = this.state.jobs;
        const selector = event.target.value;

        if(selector === "1") {
            jobs.sort((a,b) => (a.postDate > b.postDate) ? -1 : 1);
            this.setState({jobs: jobs});
            
        }
        else if(event.target.value === "2") {
            jobs.sort((a,b) => (a.poster > b.poster) ? -1 : 1);
            this.setState({jobs: jobs});
        }
        else if(event.target.value === "3") {
            jobs.sort((a,b) => (a.category > b.category) ? -1 : 1);
            this.setState({jobs: jobs});
        }
        else if(event.target.value === "4") {
            jobs.sort((a,b) => (a.title > b.title) ? 1 : -1);
            this.setState({jobs: jobs});
        }
        
        
    }

    filterJobs = (input) => {
        if(input === "painting") {
            const jobsCopy = this.state.jobs.map(job => {
                if(job.category === "painting") {
                    return job;
                }
            });
            console.log(jobsCopy);
        }
    }
    
    render () {
        let jobs = null;

        if(this.state.loading === true) {
            jobs = <CircularProgress/>
        }
        if(this.state.loading === false) {
            jobs = this.state.jobs.map(job => {
                return <Job
                        key={job._id}
                        title={job.title}
                        poster={job.poster}
                        desc={job.description}
                        cat={job.category}
                        date={job.postDate}
                        images={job.images}
                        />
            })
        }

        return (
            <Grid container spacing={2} style={{flexGrow: '1', padding: '40px', marginTop: '80px', marginLeft: '50px'}} >
                <Grid item md={12}>
                    <Grid container spacing={1}>
                        <Grid item xl={1}>
                            <Typography variant="body1">Sort By</Typography>
                        </Grid>
                        <Grid item md={5}>
                            <select onChange={(event)=>this.sortJobs(event)} className="form-control form-control-sm" id="exampleFormControlSelect1" style={{width: '100px'}}>
                            <option value={1}>Date</option>
                            <option value={2}>Poster</option>
                            <option value={3}>Job Type</option>
                            <option value={4}>Job Title</option>
                            </select>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item md={9}>
                    <Divider orientation="horizontal"/>
                </Grid>
                <Grid item md ={9}>
                    {jobs}
                </Grid>
                <Grid item xl={1}>
                    <Divider orientation="vertical"/>
                </Grid>
                <Grid item md={2}>
                    <Grid container spacing={1}>
                        <Grid item xl={2}>
                            <ExploreIcon/>
                        </Grid>
                        <Grid item xl={6}>
                            <Typography variant="h5">Categories</Typography>
                        </Grid>
                    </Grid>
                    <br/>
                    
                        <Button>
                            All jobs
                        </Button>
                        <br/>
                        <Button onClick={() => this.filterJobs("painting")}>
                            Painting
                        </Button>
                        <br/>
                        <Link href="#" >
                            Plumbing
                        </Link>
                        <br/>
                        <Link href="#" >
                            A/C Repair and Maintance
                        </Link>
                        <br/>
                        <Link href="#" >
                            Grass Cutting
                        </Link>
                        <br/>
                        <Link href="#" >
                            House Cleaning
                        </Link>
                        <br/>
                        <Link href="#" >
                            Electrical Work
                        </Link>
                        <br/>
                        <Link href="#">
                            Equipment Repair
                        </Link>
                    
                </Grid>
            </Grid>
            
        );
    }
};

const mapStateToProps = state => {
    return {
        token: state.token,
        email: state.email
    }
}

export default connect(mapStateToProps,null)(BrowseJobs);