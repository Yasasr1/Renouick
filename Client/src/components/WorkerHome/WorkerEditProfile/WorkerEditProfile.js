import React, { Component } from 'react';
import { connect } from 'react-redux';

//import WorkerEditPicture from './WorkerEditPicture/WorkerEditPicture';
import WorkerEditForm from './WorkerEditForm/WorkerEditForm';
import WorkerEditPicture from './WorkerEdirPicture/WorkerEditPicture'
import { Grid, Divider } from '@material-ui/core';

//importing action creators
import * as actions from '../../../store/actions/user';

class WorkerEditProfile extends Component {
    
    componentDidMount() {
        this.props.getWorkerInfo(this.props.email,this.props.token);
    }
   

    render() {
        return(
            <Grid style={{marginLeft: '100px'}} container spacing={1}>
                <Grid item md={12} style={{padding: '20px'}}>
                    <h3 style={{fontFamily:'Roboto, sansSerif'}}>Edit Profile</h3>
                    <Divider/>
                </Grid>
                <Grid item md={3}>
                    <WorkerEditPicture/>
                </Grid>
                <Grid item xl={1}>
                    <Divider orientation="vertical"/>
                </Grid>
                <Grid item md={7}>
                    <WorkerEditForm
                    
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
        getWorkerInfo: (email, token) => dispatch(actions.getWorker(email, token))
    };
}



export default connect(mapStateToProps,mapDispatchToProps)(WorkerEditProfile);