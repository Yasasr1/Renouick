import React, { Component } from 'react';
import { Grid, Typography, Divider, Button, CircularProgress } from '@material-ui/core';
import ExploreIcon from '@material-ui/icons/Explore';
import Worker from './Worker/Worker';
import axios from 'axios';
import { connect } from 'react-redux';

class FindWorker extends Component {
    state = {
        workers: null,
        loading: true,
        searchString: ''
    }

    componentDidMount() {
        axios.get('http://localhost:4000/worker/getAll', {
            headers: {
                'x-auth-token': this.props.token
            }
           
        })
        .then(res => {
            const workers = res.data;
            this.setState({workers: workers, loading: false});
        })
        .catch(err => {
            console.log(err);
        })
    }

    //sort the worker list based on name, age or rating
    sortJobs = (event) => {
        let workers = this.state.workers;
        const selector = event.target.value;

        if(selector === "1") {
            workers.sort((a,b) => (a.firstName < b.firstName) ? -1 : 1);
            this.setState({workers: workers});
            
        }
        else if(event.target.value === "2") {
            workers.sort((a,b) => (a.firstName < b.firstName) ? -1 : 1);
            this.setState({workers: workers});
        }
        else if(event.target.value === "3") {
            workers.sort((a,b) => (a.birthday > b.birthday) ? -1 : 1);
            this.setState({workers: workers});
        }
        else if(event.target.value === "4") {
            workers.sort((a,b) => (a.birthday < b.birthday) ? -1 : 1);
            this.setState({workers: workers});
        } 
    }

    //save the substring in the searchbar to state
    inputChangeHandler = (event) => {
        const substring = event.target.value;
        this.setState({searchString: substring});
    }

    //search for a worker with a given name substring
    searchWorker = (event) => {
        const string = this.state.searchString;
        const re = new RegExp(string,'i');
        const workerList = this.state.workers.filter( worker => {
            if(worker.firstName.match(re)) {
                return worker;
            }else if(worker.lastName.match(re)) {
                return worker;
            }
            else
                return null;
        });
        this.setState({workers: workerList});
    }

    render () {
        let workers = null;
        if(this.state.loading === true) {
            workers = <CircularProgress/>
        }
        if(this.state.loading === false) {
            workers = this.state.workers.map(worker => {
                return <Worker
                        key={worker._id}
                        fName={worker.firstName}
                        lName={worker.lastName}
                        profession={worker.workingCategory}
                        date={worker.birthday}
                        profilePic={worker.profilePicUrl}
                        />
            })
        }
        return (
            <Grid container spacing={2} style={{flexGrow: '1', padding: '40px', marginTop: '80px', marginLeft: '50px'}}>
                 <Grid item md={12}>
                    <Grid container spacing={1}>
                        <Grid item xl={1}>
                            <Typography variant="body1">Sort By</Typography>
                        </Grid>
                        <Grid item md={2}>
                            <select onChange={(event)=>this.sortJobs(event)} className="form-control form-control-sm" id="exampleFormControlSelect1" style={{width: '100px'}}>
                            <option value={1}>Name</option>
                            <option value={2}>Rating</option>
                            <option value={3}>Age ascending</option>
                            <option value={4}>Age decending</option>
                            </select>
                        </Grid>
                        <Grid item md={3}>
                            <input onChange={this.inputChangeHandler} type="text" className="form-control" placeholder="Search Worker"/>
                        </Grid>
                        <Grid item md={3}>
                            <Button onClick={this.searchWorker} color="primary" variant="contained">Search</Button>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item md={9}>
                    <Divider orientation="horizontal"/>
                </Grid>
                <Grid item md ={9}>
                    {workers}
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
                            All Categories
                        </Button>
                        <br/>
                        <Button>
                            Painting
                        </Button>
                        <br/>
                        <Button>
                            Plumbing
                        </Button>
                        <br/>
                        <Button>
                            A/C Reapir and Maintance
                        </Button>
                        <br/>
                        <Button>
                            Grass Cutting
                        </Button>
                        <br/>
                        <Button>
                            House Cleaning
                        </Button>
                        <br/>
                        <Button>
                            Electrical Work
                        </Button>
                        <br/>
                        <Button>
                            Equipment Repair
                        </Button>
                    
                </Grid>
            </Grid>
        );
    }
};
const matchStateToProps = state => {
    return {
        token: state.token
    }
}

export default connect(matchStateToProps,null)(FindWorker);