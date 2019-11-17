import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { genericTypeAnnotation } from '@babel/types';
import backImage from '../../../../assests/backgrounds/workers.gif';
import { mdiBlackMesa } from '@mdi/js';
import CardBox1 from '../../../UI/Card/CardBox1';
import cardImage1 from '../../../../assests/AdminDash/workers.jpeg';
import cardImage2 from '../../../../assests/AdminDash/customers.jfif';
import cardImage3 from '../../../../assests/AdminDash/completed.jfif';
import cardImage4 from '../../../../assests/AdminDash/uncompleted.jpg';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 3,
    padding: 50,
   
    
  },
  paper: {
    height: 250,
    width: 150,
    backgroundColor:"rgba( 0, 60, 90 ,0.8)",
    
  },
  back: {
    backgroundImage:  `url(${backImage})`,
  },
  
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

              <Paper className={classes.paper}>
              <Typography style={{ fontFamily:"Calibri " , fontSize:27 , fontStyle:"Italic" , color:"black"}}> Workers Count </Typography>
              <CardBox1 image={cardImage1}/>
              <Typography style={{ fontSize:60 , color:"silver"}}> 179 </Typography>
              </Paper>
             <Paper className={classes.paper}>
              <Typography style={{ fontFamily:"Calibri " , fontSize:27 , fontStyle:"Italic" , color:"orange"}}> Customers Count </Typography>
              <CardBox1 image={cardImage2}/>
              <Typography style={{ fontSize:60 , color:"silver"}}> 352 </Typography>
              </Paper>
     
              <Paper className={classes.paper}>
              <Typography style={{ fontFamily:"Calibri " , fontSize:27 , fontStyle:"Italic" , color:"green"}}> Completed Works </Typography>
              <CardBox1 image={cardImage3}/>
              <Typography style={{ fontSize:60 , color:"silver"}}> 298 </Typography>
              </Paper>

              <Paper className={classes.paper}>
              <Typography style={{ fontFamily:"Calibri " , fontSize:27 , fontStyle:"Italic" , color:"red"}}> Uncompleted Works </Typography>
              <CardBox1 image={cardImage4}/>
              <Typography style={{ fontSize:60 , color:"silver"}}> 40 </Typography>
              </Paper>
            
      </Grid>
      </Grid>
  );
}

export default WorkerCount;