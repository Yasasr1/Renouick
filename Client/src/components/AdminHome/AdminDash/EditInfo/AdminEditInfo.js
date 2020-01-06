import React from 'react';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import HelpIcon from '@material-ui/icons/Help';
import CardBox1 from '../../../UI/Card/CardBox1';
import Typography from '@material-ui/core/Typography';
import profilePic from '../../../../assests/OurTeam/member2.jpg';
//import CardBox from '../UI/Card/CardBox';


const AdminEditInfo = (props) => {
    return(

        /*<CardBox
                  title="Yasas Ramanayake" 
                  image={profilePic}
                  content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
                  cillum dolore eu fugiat nulla pariatur"/>*/
        <Paper style={{padding: '20px', height: '100%'}}>
            <CardBox1 image={profilePic}/>
            <br/>
            <Typography variant="h5" gutterBottom>Pasan Mahesha</Typography>
            <Typography variant="overline" gutterBottom>pmahesha.hera@gmail.com</Typography>
             <br/>       
            <EditIcon style={{margin: '8px', color: 'blue'}}/>
            <Link component="button">Edit Profile</Link>
            <br/>
            <DeleteIcon style={{margin: '8px', color: 'red'}}/>
            <Link component="button">Delete account</Link>
            <br/>
            <HelpIcon style={{margin: '8px', color: 'green'}}/>
            <Link component="button">Support</Link>
        </Paper>
    );
};

export default AdminEditInfo;