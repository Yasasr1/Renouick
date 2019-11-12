import React, { Component } from 'react';
import { Grid, Divider, Typography, CircularProgress, Button } from '@material-ui/core';
import ExploreIcon from '@material-ui/icons/Explore';
import axios from 'axios';
import { connect } from 'react-redux';
import Job from './Job/Job';


class BrowseJobs extends Component {
    state = {
        jobs: null,
        loading: true,
        filtered: false
    }

    jobs = null;

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
        this.setState({filtered: true});
        if(input === "painting") {
            this.jobs = this.state.jobs.map(job => {
                if(job.category === "painting") {
                    return <Job
                            key={job._id}
                            title={job.title}
                            poster={job.poster}
                            desc={job.description}
                            cat={job.category}
                            date={job.postDate}
                            images={job.images}
                            />
                }
                else
                    return null;
            });
        }
        else if(input === "plumbing") {
            this.jobs = this.state.jobs.map(job => {
                if(job.category === "plumbing") {
                    return <Job
                            key={job._id}
                            title={job.title}
                            poster={job.poster}
                            desc={job.description}
                            cat={job.category}
                            date={job.postDate}
                            images={job.images}
                            />
                }
                else
                    return null;
            });
        }
        else if(input === "grassCutting") {
            this.jobs = this.state.jobs.map(job => {
                if(job.category === "grassCutting") {
                    return <Job
                            key={job._id}
                            title={job.title}
                            poster={job.poster}
                            desc={job.description}
                            cat={job.category}
                            date={job.postDate}
                            images={job.images}
                            />
                }
                else
                    return null;
            });
        }
        else if(input === "ac") {
            this.jobs = this.state.jobs.map(job => {
                if(job.category === "acRepair") {
                    return <Job
                            key={job._id}
                            title={job.title}
                            poster={job.poster}
                            desc={job.description}
                            cat={job.category}
                            date={job.postDate}
                            images={job.images}
                            />
                }
                else
                    return null;
            });
        }
        else if(input === "houseCleaning") {
            this.jobs = this.state.jobs.map(job => {
                if(job.category === "houseCleaning") {
                    return <Job
                            key={job._id}
                            title={job.title}
                            poster={job.poster}
                            desc={job.description}
                            cat={job.category}
                            date={job.postDate}
                            images={job.images}
                            />
                }
                else
                    return null;
            });
        }
        else if(input === "electricalWork") {
            this.jobs = this.state.jobs.map(job => {
                if(job.category === "electricalWork") {
                    return <Job
                            key={job._id}
                            title={job.title}
                            poster={job.poster}
                            desc={job.description}
                            cat={job.category}
                            date={job.postDate}
                            images={job.images}
                            />
                }
                else
                    return null;
            });
        }
        else if(input === "equipmentRepair") {
            this.jobs = this.state.jobs.map(job => {
                if(job.category === "equipmentRepair") {
                    return <Job
                            key={job._id}
                            title={job.title}
                            poster={job.poster}
                            desc={job.description}
                            cat={job.category}
                            date={job.postDate}
                            images={job.images}
                            />
                }
                else
                    return null;
            });
        }
        else if(input === "all") {
           this.setState({filtered: false});
        }

    }
    
    render () {

        if(this.state.loading === true) {
            this.jobs = <CircularProgress/>
        }
        if(this.state.loading === false && this.state.filtered === false) {
            this.jobs = this.state.jobs.map(job => {
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
                    {this.jobs}
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
                    
                        <Button onClick={() => this.filterJobs("all")}>
                            All jobs
                        </Button>
                        <br/>
                        <Button onClick={() => this.filterJobs("painting")}>
                            Painting
                        </Button>
                        <br/>
                         <Button onClick={() => this.filterJobs("plumbing")}>
                            Plumbing
                        </Button>
                        <br/>
                        <Button onClick={() => this.filterJobs("ac")}>
                            A/C Reapir and Maintance
                        </Button>
                        <br/>
                        <Button onClick={() => this.filterJobs("grassCutting")}>
                            Grass Cutting
                        </Button>
                        <br/>
                        <Button onClick={() => this.filterJobs("houseCleaning")}>
                            House Cleaning
                        </Button>
                        <br/>
                        <Button onClick={() => this.filterJobs("electricalWork")}>
                            Electrical Work
                        </Button>
                        <br/>
                        <Button onClick={() => this.filterJobs("equipmentRepair")}>
                            Equipment Repair
                        </Button>
                    
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