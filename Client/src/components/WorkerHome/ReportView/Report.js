import React,{ Component } from 'react';
import {Grid, Button} from '@material-ui/core';
import Sort from './Sort/Sort';
import Complain from './Complain/Complain';
import Typography from '@material-ui/core/Typography';

class Report extends Component {

    render() {

        return (
            <div style={{backgroundColor: '#F5F1FA'}}>
               
               <Grid container spacing={3}  direction="column" justify="space-around"  alignItems="flex-start" style={{padding: '100px', flexGrow: '1'}} >
                     <Grid item xs={5} container justify="center">
                            <Sort/>
                    </Grid>
                    <Grid item xs={2} container justify="center">
                     <Typography >
                            Complaints against Customers
                     </Typography>
                    </Grid>
                    <Grid item xs={5} container justify="center">
                        <Complain/>
                    </Grid>
                    <Grid>
                    <Button onClick={this.searchWorker} color="primary" variant="contained">Report</Button>
                    </Grid>
                </Grid>    
                

                
                
            </div>
        );
    }
}

export default Report;