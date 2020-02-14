import React,{ Component } from 'react';
import { Paper, Grid, Divider, Typography, Button } from '@material-ui/core';
import ReportProblemIcon from '@material-ui/icons/ReportProblem';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
class Report extends Component {

    render() {

        return (
            <Paper className="shadow p-3 mb-5 bg-white rounded" style={{padding: '10px'}}>
                <Grid container spacing={1}>
                    <Grid item md={12}>
                        <h5>{this.props.title}</h5>
                    </Grid>
                    <Grid item md={12}>
                        <Divider/>
                    </Grid>
                    <Grid item s={2}>
                        <ReportProblemIcon fontSize="small" style={{color: 'red'}}/> 
                    </Grid>
                    <Grid item md={11}>
                        <Typography variant="caption">{this.props.poster} reported {this.props.reportedAbout}</Typography>
                    </Grid>
                    <Grid container>
                        <Grid item s={3}>
                            <CheckCircleIcon fontSize="small" style={{color: 'blue'}}/> 
                        </Grid>
                        <Grid item md={10}>
                            <p>report status: {this.props.status}</p>
                        </Grid>
                    </Grid>
                    <Grid item md={12}>
                        <Button style={{float: 'right'}} variant="contained" color="primary">View</Button>
                    </Grid>
                   
                </Grid>
            </Paper>
        );
    }
}

export default Report;