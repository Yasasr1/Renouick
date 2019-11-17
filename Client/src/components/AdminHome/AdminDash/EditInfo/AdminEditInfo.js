import React from 'react';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import HelpIcon from '@material-ui/icons/Help';





const AdminEditInfo = (props) => {
    return(
        <Paper style={{padding: '20px', height: '100%'}}>
            <EditIcon style={{margin: '8px', color: 'blue'}}/>
            <Link component="button">Edit Profile</Link>
            <br/>
            <DeleteIcon style={{margin: '8px', color: 'red'}}/>
            <Link component="button">Delete Account</Link>
            <br/>
            <HelpIcon style={{margin: '8px', color: 'green'}}/>
            <Link component="button">Support</Link>
        </Paper>
    );
};

export default AdminEditInfo;