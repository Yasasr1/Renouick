import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { genericTypeAnnotation } from '@babel/types';
import backImage from '../../assests/backgrounds/backgroundHome.jpg';
import { mdiBlackMesa } from '@mdi/js';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 3,
    padding: 50,
   
    
  },
  paper: {
    height: 300,
    width: 200,
    backgroundColor: "black",
    
  },
  back: {
    backgroundImage:  `url(${backImage})`,
  },
  
}));

const About = () => {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();

  const handleChange = event => {
    setSpacing(Number(event.target.value));
  };

  return (
    <Grid container className={classes.back} spacing={2}>
        <Grid container className={classes.root} direction="row" justify="space-around" alignItems="center"  spacing={3}>

              <Paper className={classes.paper}>
              <Typography style={{ fontFamily:"Calibri " , fontSize:24 , fontStyle:"Italic" , color:"white"}}> Renouick is a way to connect customers who are not capable of finding services and workers who are not capable of promoting their services.</Typography>
              </Paper>
             <Paper className={classes.paper}>
              <Typography style={{ fontFamily:"Calibri " , fontSize:24 , fontStyle:"Italic" , color:"white"}}> In the current society people face problems in finding workers for their day to day problems.</Typography>
              </Paper>
     
              <Paper className={classes.paper}>
              <Typography style={{ fontFamily:"Calibri " , fontSize:24 , fontStyle:"Italic" , color:"white"}}> Even if many workers are available if they cannot be founded when needed there is no use.</Typography>
              </Paper>
            
      </Grid>
      <Grid container className={classes.root} direction="row" justify="space-around" alignItems="center" spacing={3} >

            <Paper className={classes.paper}>
            <Typography style={{ fontFamily:"Calibri " , fontSize:24 , fontStyle:"Italic", align:"center" , color:"white"}}>That is why we provided a solution by introducing Renouick.</Typography>
            </Paper>

            <Paper className={classes.paper}>
            <Typography style={{ fontFamily:"Calibri " , fontSize:24 , fontStyle:"Italic" , color:"white"}}> Renouick is a way to connect customers who are not capable of finding services and workers who are not capable of promoting their services.</Typography>
            </Paper>


</Grid>
     </Grid>
  );
}

export default About;