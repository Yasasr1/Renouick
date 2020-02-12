import React,{ Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Sort from './Sort/Sort';
import Reports from './Reports/Reports';
import Typography from '@material-ui/core/Typography';
class ReportView extends Component {

    render() {

        return (
            <div style={{backgroundColor: '#F5F1FA'}}>
               
               <Grid container spacing={15}  justify="space-around"  alignItems="flex-start" style={{padding: '100px', flexGrow: '1'}} >
               <Typography variant="h4" component="h4" style={{fontSize:30 , fontStyle:"Italic" , color:"Black" }}>
                            Complaints against workers
                     </Typography>
                     <Typography variant="h4" component="h4" style={{fontSize:30 , fontStyle:"Italic" , color:"Black" }}>
                            Complaints against workers
                     </Typography>
                     <Grid container justify="space-around">
                            <Sort/> <Sort/>
                    </Grid>
                    <Grid  container spacing={10}  justify="center"  alignItems="center" style={{padding: '10px', flexGrow: '1'}} >
                     <Grid item xs={5} container justify="center">
                            <Reports/> 
                    </Grid>
                    <Grid item xs={5} container justify="center">
                             <Reports/>
                    </Grid>
                </Grid>
                
                </Grid>
                     
                
            </div>
        );
    }
}

export default ReportView;