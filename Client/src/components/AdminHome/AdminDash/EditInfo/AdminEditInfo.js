import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ProfilePic from '../../../../assests/AdminDash/admin.png';



const AdminEditInfo = (props) => {
    return(

          <Paper style={{padding: '20px'}}>
            <img alt="profile pic" src={ProfilePic} width={250} height={200}/>
            <br/>
            <Typography variant="h5" gutterBottom>{props.fName} {props.lName}</Typography>
            <Typography variant="overline" gutterBottom>{props.email}</Typography>
        </Paper>
    );
};

export default AdminEditInfo;