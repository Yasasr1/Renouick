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
import Icon from '@mdi/react';
import { mdiFacebookBox, mdiTwitter } from '@mdi/js';



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
   openSocialMedia = (type) => {
      if(type === 'facebook') {
          window.open(this.props.facebook)
      } else if(type === 'twitter') {
          window.open(this.props.twitter)
      }

  }

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
                  content="Yasas is a student of University of Colombo School of Computing. He was a bright student of Gururkula Vidyalaya, Kelaniya. Yasas is talented in many ways such as singing and script writing.He was an active member of the Astrology Society of Gurukula Vidyalaya. He is passionate about game development.  "/>
                   <IconButton color="black" className="OurTeamButton" target="_blank" href="http://www.google.com/" aria-label="share" >
                      <ShareIcon />
                   </IconButton>
                   <IconButton onClick={()=>this.openSocialMedia('facebook')}>
                                <Icon path={mdiFacebookBox} size={1} color="blue"/>
                   </IconButton>
                   <IconButton onClick={()=>this.openSocialMedia('twitter')}>
                                <Icon path={mdiTwitter} size={1} color="cyan"/>
                   </IconButton>
                  </Grid>
                  <Grid item>
                    <Typography style={{fontStyle:"Italic" , color:"brown"}}>
                       Designer / Developer
                    </Typography>
                  <CardBox 
                  title="Pasan Mahesha" 
                  image={cardImage2}
                  content="Pasan is a student of University of Colombo School of Computing. He was a bright student of Central College, Anuradhapura. Pasan is talented in many ways such as playing badminton and new inventions. He was an active member of the Science Society of Central College. He is passionate about arduino technology.  "/>
                  <IconButton color="black" className="OurTeamButton" target="_blank" href="http://www.google.com/" aria-label="share" >
                      <ShareIcon />
                   </IconButton>
                   <IconButton onClick={()=>this.openSocialMedia('facebook')}>
                                <Icon path={mdiFacebookBox} size={1} color="blue"/>
                   </IconButton>
                   <IconButton onClick={()=>this.openSocialMedia('twitter')}>
                                <Icon path={mdiTwitter} size={1} color="cyan"/>
                   </IconButton>
                  </Grid>
                  <Grid item>
                    <Typography style={{fontStyle:"Italic" , color:"brown"}}>
                       Developer
                    </Typography>
                  <CardBox 
                  title="Thisara Gimhani" 
                  image={cardImage3}
                  content="Thisara is a student of University of Colombo School of Computing. She was a bright student of Newsted Girls College, Meegamuwa.Thisara is talented in many ways such as singing and dancing. She was an active member of the Social Services Society of Newsted College. She is passionate about virtual reality.  "/>
                  <IconButton color="black" className="OurTeamButton" target="_blank" href="http://www.google.com/" aria-label="share" >
                      <ShareIcon />
                   </IconButton>
                   <IconButton onClick={()=>this.openSocialMedia('facebook')}>
                                <Icon path={mdiFacebookBox} size={1} color="blue"/>
                   </IconButton>
                   <IconButton onClick={()=>this.openSocialMedia('twitter')}>
                                <Icon path={mdiTwitter} size={1} color="cyan"/>
                   </IconButton>
                  </Grid>
                  <Grid item>
                    <Typography style={{fontStyle:"Italic" , color:"brown"}}>
                       Business Analysist
                    </Typography>
                  <CardBox 
                  title="Gayara Jayasinghe" 
                  image={cardImage4}
                  content="Gayara is a student of University of Colombo School of Computing. She was a bright student of Visakha Vidyalaya Colombo 05. Gayara is talented in many ways such as announcing and creative writing. She was an active member of the Student Parliament of Visakha Vidyalaya. She is passionate about business strategies.  "/>
                 <IconButton color="black" className="OurTeamButton" target="_blank" href="http://www.google.com/" aria-label="share" >
                      <ShareIcon />
                   </IconButton>
                   <IconButton onClick={()=>this.openSocialMedia('facebook')}>
                                <Icon path={mdiFacebookBox} size={1} color="blue"/>
                   </IconButton>
                   <IconButton onClick={()=>this.openSocialMedia('twitter')}>
                                <Icon path={mdiTwitter} size={1} color="cyan"/>
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