import React from 'react';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import HelpIcon from '@material-ui/icons/Help';
import Typography from '@material-ui/core/Typography';
import ProfilePic from '../../../../assests/OurTeam/member2.jpg';



const AdminEditInfo = (props) => {
    return(

          <Paper style={{padding: '20px', height: '100%'}}>
            <img src={ProfilePic} width={300} height={200}/>
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