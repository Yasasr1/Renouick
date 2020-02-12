import React,{ Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Sort from './Sort/Sort';
import Reports from './Reports/Reports';

class ReportView extends Component {

    render() {

        return (
            <div style={{backgroundColor: '#F5F1FA'}}>
               
                <Grid container spacing={1} alignItems="flex-start" style={{padding: '1px'}} >
                <Sort/> 
                <Reports/>
                </Grid>
                
            </div>
        );
    }
}

export default ReportView;