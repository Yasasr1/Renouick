import React,{ Component } from 'react';
import Grid from '@material-ui/core/Grid';
import SortAndFilter from './SortAndFilter/SortAndFilter';
import Reports from './Reports/Reports';

class ReportView extends Component {

    render() {

        return (
            <div style={{backgroundColor: '#F5F1FA'}}>
               
               <Grid container spacing={3}  justify="space-around"  alignItems="flex-start" style={{padding: '100px', flexGrow: '1'}} >
                <SortAndFilter/>
                </Grid>
                <Grid container justify="center">
                    <Reports/>
                </Grid>
                
            </div>
        );
    }
}

export default ReportView;