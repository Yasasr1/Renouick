import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { Modal,Button } from 'react-bootstrap';
import axios from 'axios';
import * as actions from '../../../../store/actions/auth';
import { connect } from 'react-redux';







class EditInfoWorker extends Component {
    state = {
        show: false,
        redirect: null

    }

    handleLogout = () => {
        this.props.onLogout();
        this.props.history.replace('/');
    }

    redirectToEdit = () => {
        this.props.history.replace('/worker/editProfile');
    }

    handlePopupClose = () => {
        this.setState({show: false})
    };

    handlePopupShow = () => {
        this.setState({show: true})

    };

    handleDelete = () => {
        const send = {
            email: this.props.email
        }
        axios.post("http://localhost:4000/worker/delete",send)
        .then(res => {
            console.log(res.data);
        })
        .catch(error => {
            console.log(error);
        })


        this.handleLogout();
    }

    render(){
        return(
            <div>
                {this.state.redirect}
                <Modal show={this.state.show} onHide={this.handlePopupClose}>
                    <Modal.Body>Do you really want to delete your account?</Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={this.handlePopupClose}>
                        Cancel
                    </Button>
                    <Button variant="danger" onClick={this.handleDelete}>
                        Delete
                    </Button>
                    </Modal.Footer>
                </Modal>
                <Paper style={{padding: '25px', height: '100%'}}>
                    <EditIcon style={{margin: '8px', color: 'blue'}}/>
                    <Link onClick={this.redirectToEdit}component="button">Edit Profile</Link>
                    <br/>
                    <DeleteIcon style={{margin: '8px', color: 'red'}}/>
                    <Link onClick={this.handlePopupShow} component="button">Delete Account</Link>
                    <br/>
                </Paper>
            </div>
        );
    }
    
};

const matchDispatchToProps = dispatch => {
    return {
        onLogout: () => dispatch(actions.authLogout())
    }
}

export default connect(null,matchDispatchToProps)(EditInfoWorker);