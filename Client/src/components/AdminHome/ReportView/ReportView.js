import React,{ Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Sort from './Sort/Sort';
import Reports from './Reports/Reports';
import Typography from '@material-ui/core/Typography';
class ReportView extends Component {

    render() {

        return (
            <div style={{backgroundColor: '#F5F1FA'}}>
               
               <Grid container spacing={3}  justify="space-around"  alignItems="flex-start" style={{padding: '100px', flexGrow: '1'}} >
                     <Grid item xs={5} container justify="center">
                            <Sort/>
                    </Grid>
                    <Grid item xs={5} container justify="center">
                             <Sort/>
                    </Grid>
                </Grid>

                <Grid  container spacing={3}  justify="space-around"  alignItems="flex-start" style={{padding: '100px', flexGrow: '1'}} >
                     <Grid item xs={5} container justify="center">
                     <Typography >
                            Complaints against workers
                     </Typography>
                    </Grid>
                    <Grid item xs={5} container justify="center">
                    <Typography >
                            Complaints against Customers
                     </Typography>
                    </Grid>
                </Grid>

                <Grid  container spacing={3}  justify="space-around"  alignItems="flex-start" style={{padding: '100px', flexGrow: '1'}} >
                     <Grid item xs={5} container justify="center">
                            <Reports/>
                    </Grid>
                    <Grid item xs={5} container justify="center">
                             <Reports/>
                    </Grid>
                </Grid>
                
            </div>
        );
    }
}

export default ReportView;