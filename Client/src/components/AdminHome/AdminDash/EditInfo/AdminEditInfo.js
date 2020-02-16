import React from 'react';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import HelpIcon from '@material-ui/icons/Help';
import Typography from '@material-ui/core/Typography';
import ProfilePic from '../../../../assests/AdminDash/admin.png';



const AdminEditInfo = (props) => {
    return(

          <Paper style={{padding: '20px'}}>
            <img src={ProfilePic} width={250} height={200}/>
            <br/>
            <Typography variant="h5" gutterBottom>{props.fName} {props.lName}</Typography>
            <Typography variant="overline" gutterBottom>{props.email}</Typography>
        </Paper>
    );
};

export default AdminEditInfo;