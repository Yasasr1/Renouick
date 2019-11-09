import React, { Component } from 'react';
import { Grid, Typography, Divider, Button, TextField } from '@material-ui/core';
import ExploreIcon from '@material-ui/icons/Explore';
import Worker from './Worker/Worker';

class FindWorker extends Component {
    render () {
        return (
            <Grid container spacing={2} style={{flexGrow: '1', padding: '40px', marginTop: '80px', marginLeft: '50px'}}>
                 <Grid item md={12}>
                    <Grid container spacing={1}>
                        <Grid item xl={1}>
                            <Typography variant="body1">Sort By</Typography>
                        </Grid>
                        <Grid item md={2}>
                            <select className="form-control form-control-sm" id="exampleFormControlSelect1" style={{width: '100px'}}>
                            <option value={1}>Name</option>
                            <option value={2}>Rating</option>
                            <option value={3}>Age</option>
                            </select>
                        </Grid>
                        <Grid item md={3}>
                            <input type="text" className="form-control" placeholder="Search Worker"/>
                        </Grid>
                        <Grid item md={3}>
                            <Button color="primary" variant="contained">Search</Button>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item md={9}>
                    <Divider orientation="horizontal"/>
                </Grid>
                <Grid item md ={9}>
                    <Worker/>
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

export default FindWorker;