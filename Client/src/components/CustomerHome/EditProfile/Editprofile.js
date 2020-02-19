import React, { Component } from 'react';
import { connect } from 'react-redux';

import EditPicture from './EditPicture/EditPicture';
import EditForm from './EditForm/EditForm';
import { Grid, Divider } from '@material-ui/core';

//importing action creators
import * as actions from '../../../store/actions/user';

class EditProfile extends Component {
    
    componentDidMount() {
        this.props.getCustomerInfo(this.props.email,this.props.token);
    }
   

    render() {
        return(
            <Grid container spacing={1}>
                <Grid item md={12} style={{padding: '20px'}}>
                    <h3 style={{fontFamily:'Roboto, sansSerif'}}>Edit Profile</h3>
                    <Divider/>
                </Grid>
                <Grid item md={3}>
                   <EditPicture/>
                </Grid>
                <Grid item xl={1}>
                    <Divider orientation="vertical"/>
                </Grid>
                <Grid item md={8}>
                    <EditForm
                    />
                </Grid>
            </Grid>
        );
    }
    
};

const mapStateToProps = state => {
    return {
        email: state.email,
        token: state.token
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getCustomerInfo: (email, token) => dispatch(actions.getUser(email, token))
    };
}



export default connect(mapStateToProps,mapDispatchToProps)(EditProfile);