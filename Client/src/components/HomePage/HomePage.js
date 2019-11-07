import React , { Component } from 'react';
import CardBox from '../UI/Card/CardBox';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { purple } from '@material-ui/core/colors';
import cardImage from '../../assests/card/card.jpg';
import Grid from '@material-ui/core/Grid';
import { Paper } from '@material-ui/core';
import './HomePage.css'; 
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import { Card, CardContent, Fab } from '@material-ui/core';

import slide1 from '../../assests/HomeSlides/17773.jpg';
import slide2 from '../../assests/HomeSlides/63280.jpg';
import slide3 from '../../assests/HomeSlides/412611-PD51HB-765.jpg';
import workerImage1 from '../../assests/HomeImages/workers-uniform_3446-430.jpg';
import workerImage2 from '../../assests/HomeImages/concept-handyman-worker_98292-1125.jpg';


/*const style = {
  paperContainer: {
    backgroundImage: `url(${backImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: 600
  }
};*/

const ColorButton = withStyles(theme => ({
    root: {
      color: 'white',
      backgroundColor: purple[500],
      margin: '100px',
      '&:hover': {
        backgroundColor: purple[700],
        color: 'white'
      },
    },
  }))(Button);

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
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={slide2}
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={slide3}
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          </div>
          <br/>

          <Grid container style={{padding: '20px'}}>
            <Grid item md={6}>
              <h2 className="display-4">Got Work ?</h2>
              <h3>
              Post a Job 
              <small class="text-muted"> Get Work Done...</small>
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
              <small class="text-muted"> Earn Money...</small>
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