import React , { Component } from 'react';
import CardBox from '../UI/Card/CardBox';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { purple } from '@material-ui/core/colors';
import cardImage from '../../assests/card/card.jpg';
import Grid from '@material-ui/core/Grid';
import { Paper } from '@material-ui/core';
import './HomePage.css'; 
import backImage from '../../assests/backgrounds/backgroundHome.jpg';

const style = {
  paperContainer: {
    backgroundImage: `url(${backImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: 600
  
}

};

const ColorButton = withStyles(theme => ({
    root: {
      color: 'white',
      backgroundColor: purple[500],
      margin: '100px',
      '&:hover': {
        backgroundColor: purple[700],
      },
    },
  }))(Button);

class HomePage extends Component {
    
    
    
    render() {
        return(
          <React.Fragment>
              <Paper style={style.paperContainer}>
                <div className="WrapperHomePage">
                <ColorButton style={style} size="large" variant="contained" >I Want to work</ColorButton>
                <ColorButton style={style} size="large" variant="contained" color="primary">I Want a Worker</ColorButton>
                </div>
              </Paper>
                <Grid container justify="center" spacing={8}>
                  <Grid item>
                  <CardBox 
                  title="Post Jobs" 
                  image={cardImage}
                  content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
                  cillum dolore eu fugiat nulla pariatur"/>
                  </Grid>
                  <Grid item>
                  <CardBox 
                  title="Find workers" 
                  image={cardImage}
                  content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
                  cillum dolore eu fugiat nulla pariatur"/>
                  </Grid>
                  <Grid item>
                  <CardBox 
                  title="Get Work Done" 
                  image={cardImage}
                  content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
                  cillum dolore eu fugiat nulla pariatur"/>
                  </Grid>

                </Grid>
            </React.Fragment>        
                
                
              
        );
    }
}

export default HomePage;