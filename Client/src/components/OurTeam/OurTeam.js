import React , { Component } from 'react';
import CardBox from '../UI/Card/CardBox';
import cardImage1 from '../../assests/OurTeam/member1.jpg';
import cardImage2 from '../../assests/OurTeam/member2.jpg';
import cardImage3 from '../../assests/OurTeam/member3.jpg';
import cardImage4 from '../../assests/OurTeam/member4.jpg';
import Grid from '@material-ui/core/Grid';
import { Paper } from '@material-ui/core';
import './OurTeam.css'; 
import backImage from '../../assests/backgrounds/backgroundHome.jpg';
//import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ShareIcon from '@material-ui/icons/Share';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';



const style = {
    paperContainer: {
      backgroundImage: `url(${backImage})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      height: 700, 
    },
  
  }

// routing for material ui button component
//const MyLink = React.forwardRef((props, ref) => <Link innerRef={ref} {...props} />);
//const { style, href, hrefAs, children, prefetch } = this.props

class OurTeam extends Component {
    render() {
        return(
            
          <React.Fragment>
              
              <Paper style={style.paperContainer}>
                <div className="WrapperOurTeamPage" style={{padding: '40px'}}>
 
                <Grid container justify="space-around">
                  <Grid item >
                    <Typography style={{fontStyle:"Italic" , color:"brown"}} >
                       Developer / Designer
                    </Typography>
                  <CardBox
                  title="Yasas Ramanayake" 
                  image={cardImage1}
                  content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
                  cillum dolore eu fugiat nulla pariatur"/>
                   <IconButton color="secondary" className="OurTeamButton" target="_blank" href="http://www.google.com/" aria-label="edit" >
                      <EditIcon />
                   </IconButton>
                   <IconButton color="secondary" className="OurTeamButton" target="_blank" href="http://www.google.com/" aria-label="share" >
                      <ShareIcon />
                   </IconButton>
                   <IconButton color="secondary" className="OurTeamButton" target="_blank" href="http://www.google.com/" aria-label="delete" >
                      <DeleteIcon />
                   </IconButton>
                  </Grid>
                  <Grid item>
                    <Typography style={{fontStyle:"Italic" , color:"brown"}}>
                       Designer / Developer
                    </Typography>
                  <CardBox 
                  title="Pasan Mahesha" 
                  image={cardImage2}
                  content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
                  cillum dolore eu fugiat nulla pariatur"/>
                  <IconButton color="secondary" className="OurTeamButton" target="_blank" href="http://www.google.com/" aria-label="edit" >
                      <EditIcon />
                   </IconButton>
                   <IconButton color="secondary" className="OurTeamButton" target="_blank" href="http://www.google.com/" aria-label="share" >
                      <ShareIcon />
                   </IconButton>
                   <IconButton color="secondary" className="OurTeamButton" target="_blank" href="http://www.google.com/" aria-label="delete" >
                      <DeleteIcon />
                   </IconButton>
                  </Grid>
                  <Grid item>
                    <Typography style={{fontStyle:"Italic" , color:"brown"}}>
                       Developer
                    </Typography>
                  <CardBox 
                  title="Thisara Gimhani" 
                  image={cardImage3}
                  content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
                  cillum dolore eu fugiat nulla pariatur"/>
                  <IconButton color="secondary" className="OurTeamButton" target="_blank" href="http://www.google.com/" aria-label="edit" >
                      <EditIcon />
                   </IconButton>
                   <IconButton color="secondary" className="OurTeamButton" target="_blank" href="http://www.google.com/" aria-label="share" >
                      <ShareIcon />
                   </IconButton>
                   <IconButton color="secondary" className="OurTeamButton" target="_blank" href="http://www.google.com/" aria-label="delete" >
                      <DeleteIcon />
                   </IconButton>
                  </Grid>
                  <Grid item>
                    <Typography style={{fontStyle:"Italic" , color:"brown"}}>
                       Business Developer
                    </Typography>
                  <CardBox 
                  title="Gayara Jayasinghe" 
                  image={cardImage4}
                  content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
                  cillum dolore eu fugiat nulla pariatur"/>
                  <IconButton color="secondary" className="OurTeamButton" target="_blank" href="http://www.google.com/" aria-label="edit" >
                      <EditIcon />
                   </IconButton>
                   <IconButton color="secondary" className="OurTeamButton" target="_blank" href="http://www.google.com/" aria-label="share" >
                      <ShareIcon />
                   </IconButton>
                   <IconButton color="secondary" className="OurTeamButton" target="_blank" href="http://www.google.com/" aria-label="delete" >
                      <DeleteIcon />
                   </IconButton>
                  </Grid>

                </Grid>
                </div>
              </Paper>
            </React.Fragment>           
        );
    }
}

export default OurTeam;