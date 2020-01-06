import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
//import { genericTypeAnnotation } from '@babel/types';
//import backImage from '../../../../assests/backgrounds/workers.gif';
//import { mdiBlackMesa } from '@mdi/js';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 3,
    padding: 50,
   
    
  },
  paper: {
    height: 150,
    width: 300,
    //backgroundColor:"rgba( 0, 60, 90 ,0.8)",
    
  },
  //back: {
    //backgroundImage:  `url(${backImage})`,
  //},
  
}));

const WorkerCount = () => {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();

  const handleChange = event => {
    setSpacing(Number(event.target.value));
  };

  return (
    <Grid container className={classes.back} spacing={2}>
        <Grid container  className={classes.root} direction="row" alignItems="center" justify="space-between" spacing={3} padding="100%">
              
              <Paper className={classes.paper} style={{backgroundColor: '#fe657a'}}>
              <Typography style={{ fontFamily:"Calibri " , fontSize:27 , fontStyle:"Italic" , color:"white"}} align="center"> Workers Count </Typography>
              <Typography style={{ fontSize:60 , color:"silver"}} align="center"> 179 </Typography>
              </Paper>
             <Paper className={classes.paper} style={{backgroundColor: '#06cd88'}}>
              <Typography style={{ fontFamily:"Calibri " , fontSize:27 , fontStyle:"Italic" , color:"white"}} align="center"> Customers Count </Typography>
              <Typography style={{ fontSize:60 , color:"silver"}} align="center"> 352 </Typography>
              </Paper>
              <Paper className={classes.paper} style={{backgroundColor: '#fd9b6d'}}>
              <Typography style={{ fontFamily:"Calibri " , fontSize:27 , fontStyle:"Italic" , color:"white"}} align="center"> Total existing Accounts </Typography>
              <Typography style={{ fontSize:60 , color:"silver"}} align="center"> 352 </Typography>
              </Paper>
        </Grid>
        <Grid container  className={classes.root} direction="row" alignItems="center" justify="space-between" spacing={3} padding="100%">
              <Paper className={classes.paper} style={{backgroundColor: '#00afb2'}}>
              <Typography style={{ fontFamily:"Calibri " , fontSize:27 , fontStyle:"Italic" , color:"white"}} align="center"> Pending jobs </Typography>
              <Typography style={{ fontSize:60 , color:"silver"}} align="center"> 352 </Typography>
              </Paper>
     
              <Paper className={classes.paper} style={{backgroundColor: '#8b9bcc'}}>
              <Typography style={{ fontFamily:"Calibri " , fontSize:27 , fontStyle:"Italic" , color:"white"}} align="center"> Completed Works </Typography>
              <Typography style={{ fontSize:60 , color:"silver"}} align="center"> 298 </Typography>
              </Paper>

              <Paper className={classes.paper} style={{backgroundColor: '#fbd777'}}>
              <Typography style={{ fontFamily:"Calibri " , fontSize:27 , fontStyle:"Italic" , color:"white"}} align="center"> Uncompleted Works </Typography>
              <Typography style={{ fontSize:60 , color:"silver"}} align="center"> 40 </Typography>
              </Paper>
            
      </Grid>
      </Grid>
  );
}

export default WorkerCount;