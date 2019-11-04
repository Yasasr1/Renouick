import React, { Component } from 'react';
import { Grid, Divider, Typography, Link, CircularProgress } from '@material-ui/core';
import ExploreIcon from '@material-ui/icons/Explore';
import axios from 'axios';
import { connect } from 'react-redux';
import Job from './Job/Job';


class BrowseJobs extends Component {
    state = {
        jobs: [],
        loading: true,
    }

    componentDidMount() {
        axios.get('http://localhost:4000/job/getEveryJob', {
            headers: {
                'x-auth-token': this.props.token
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
                            <select className="form-control form-control-sm" id="exampleFormControlSelect1" style={{width: '100px'}}>
                            <option>Date</option>
                            <option>Poster</option>
                            <option>Job Type</option>
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
                    <Typography variant="overline" style={{fontSize: '1em'}}>
                        <Link href="#">
                            All Jobs
                        </Link>
                        <br/>
                        <Link href="#" >
                            Painting
                        </Link>
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
                    </Typography>
                </Grid>
            </Grid>
            
        );
    }
};

const mapStateToProps = state => {
    return {
        token: state.token,
    }
}

export default connect(mapStateToProps,null)(BrowseJobs);