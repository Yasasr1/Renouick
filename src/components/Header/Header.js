import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Logo from '../Logo/Logo';
import OrangeButton from '../UI/OrangeButton/OrangeButton';



const useStyles = makeStyles(theme =>({
    root: {
        flexGrow: 1,   
      },

      button: {
        margin: theme.spacing(0,3),
        color: 'orange'
      },

      logo: {
        height: 43,
        '@media(max-width: 910px)': {
          display: 'none'
        }
      }
}));

const Header = (props) => {
    const classes = useStyles();

    return(
        <div >
            
            <AppBar color='default' className={classes.root} position="static">
                <Toolbar>
                    <Grid container justify="flex-start">
                      <div  className={classes.logo}>
                        <Logo/>
                      </div>
                      <Button color="primary" className={classes.button}>Home</Button>
                      <Button color="primary" className={classes.button}>About</Button>
                      <Button color="primary" className={classes.button}>Our Team</Button>
                      <Button color="primary" className={classes.button}>FAQ</Button>
                    </Grid>
                    <Grid justify="flex-end" container>
                      <OrangeButton content="Login"/>
                    </Grid>
                </Toolbar>
            </AppBar>
           

        </div>
    );
};

export default Header;