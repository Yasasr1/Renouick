import React , { Component } from 'react';
import CardBox from '../UI/Card/CardBox';
/*import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { purple } from '@material-ui/core/colors';*/
import cardImage from '../../assests/card/card.jpg';
import Grid from '@material-ui/core/Grid';
import './HomePage.css'; 
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import { Card, CardContent, Fab } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import slide1 from '../../assests/HomeSlides/17773.jpg';
import slide2 from '../../assests/HomeSlides/63280.jpg';
import slide3 from '../../assests/HomeSlides/412611-PD51HB-765.jpg';
import workerImage1 from '../../assests/HomeImages/workers-uniform_3446-430.jpg';
import workerImage2 from '../../assests/HomeImages/concept-handyman-worker_98292-1125.jpg';
import logo from '../../assests/logo/logo1.PNG';

/*const style = {
  paperContainer: {
    backgroundImage: `url(${backImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: 600
  }
};*/

/*const ColorButton = withStyles(theme => ({
    root: {
      color: 'white',
      backgroundColor: purple[500],
      margin: '100px',
      '&:hover': {
        backgroundColor: purple[700],
        color: 'white'
      },
    },
  }))(Button);*/

// routing for material ui button component
const MyLink = React.forwardRef((props, ref) => <Link innerRef={ref} {...props} />);

class HomePage extends Component {
    render() {

      //used to redirect to customer dash if user has a token in local storage
      let redirect = null;
      if(this.props.isAuthenticated) {
          redirect = <Redirect to="/customer"/>
      }
      
      return(
        <React.Fragment>
          {redirect}
          <div>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={slide1}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>Have a work to do?</h3>
                <p>Post a job to get the best work offer</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={slide2}
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Are you in a rush to find a worker?</h3>
                <p>Find one here.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={slide3}
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3>Want a job?</h3>
                <p>Find jobs and bid here </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          </div>
          <br/>
        <Grid container direction="row" justify="center" alignItems="center">
        <Grid item xs={10}>
        <Box borderRadius={16} border={2}  p={5} style={{backgroundColor: '	#361463' }}>
      
          <Grid container direction="row" justify="center"  justify="space-between">
            <Grid item xs={8}>
              <p style={{ fontFamily:"Calibri " , fontSize:80 , fontStyle:"Italic" , color:"	#e28b05"}}>Renouick</p>
              <p style={{ fontFamily:"Calibri " , fontSize:30 , fontStyle:"Italic" , color:"white"}}> a web application that will be used to connect  household repair and maintenance professionals to their clients.</p>
            </Grid>
            <Grid item xs={4}>
            <img
                src={logo}
                alt="Company logo"
              />
              </Grid>
          </Grid>
        </Box>
        </Grid>
         </Grid>
          <Grid container style={{padding: '20px'}}>
            <Grid item md={6}>
              <h2 className="display-4">Got Work ?</h2>
              <h3>
              Post a Job 
              <small className="text-muted"> Get Work Done...</small>
              </h3>
              <ul>
                <li>Select a category</li>
                <li>Post a job</li>
                <li>Select the best offer</li>
              </ul>
              <br/>
              <Fab to="/customer_reg" component={MyLink} variant="extended" color="primary" style={{backgroundColor: '#350E6B'}}>Find a Worker</Fab>
            </Grid>
            <Grid item md={6}>
              <img src={workerImage1} alt="worker"></img>
            </Grid>
            <br/>
            <Grid item md={8}>
              <img src={workerImage2} alt="worker"></img>
            </Grid> 
            <Grid item md={4}>
              <h2 className="display-4">Need Work ?</h2>
              <h3>
              Place a Bid 
              <small className="text-muted"> Earn Money...</small>
              </h3>
              <ul>
                <li>Select a job</li>
                <li>place a bid</li>
                <li>get paid</li>
              </ul>
              <br/>
              <Fab to="/worker_reg" component={MyLink} variant="extended" color="primary" style={{backgroundColor: '#350E6B'}}>Find Work</Fab>
            </Grid>  
          </Grid>
            
              <Grid container justify="center" spacing={8}>
                <Grid item>
                <CardBox 
                title="Post Jobs" 
                image={cardImage}
                content="Renouick offers you the best facility to post your required job. Register with us today and  
                tell us what you need to be done. This is a free and new way for you. You can select the best offer. "/>
                </Grid>
                <Grid item>
                <CardBox 
                title="Find workers" 
                image={cardImage}
                content="Register here to have the best experience of finding workers. No time wastage and no trouble anymore. 
                Contact the best worker using Renouick and get your work done easily."/>
                </Grid>
                <Grid item>
                <CardBox 
                title="Get a Work " 
                image={cardImage}
                content="If you are in the search of work use our platform. You just have to register with us. There you can have
                the best and easiest way of contacting and sending offers to your clients. "/>
                </Grid>

              </Grid>
              <br/>
              <Card style={{backgroundColor: '#350E6B', color: 'white', textAlign: 'center'}}>
                <CardContent>
                  <p>copyright 2019 Renouick</p>
                </CardContent>
              </Card>
          </React.Fragment>           
      );
    }
}

const mapStateToProps = state => {
  return {
      isAuthenticated: state.token !== null
  }
}

export default connect(mapStateToProps,null)(HomePage);