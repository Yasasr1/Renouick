import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Button } from '@material-ui/core';
import ProfileImg from '../../CustomerDash/ProfileImg/ProfileImg';
import axios from 'axios';


class EditPicture extends Component {
    state = {
        url : '',
        publicId: ''
    }

    picUpdateHandler = (result) => {
        if(result.event === 'success') {
          this.setState({url: result.info.secure_url, publicId: result.info.public_id});
          const newPic = {
              email: this.props.email,
              url: result.info.secure_url,
              publicId: result.info.public_id
          }
          axios.post('http://localhost:4000/customer/updatePic', newPic)
          .then(res => {
              alert(res.data);
          })
          .catch(err => {
              alert(err);
          })
        }
    }

    picDeleteHandler = () => {
        this.setState({
            url: '',
            publicId: ''
        })
        const email = {
            email : this.props.email
        }
        axios.post('http://localhost:4000/customer/deletePic', email)
        .then(res => {
            alert(res.data);
        })
        .catch(err => {
            alert(err);
        })
    }

    //saving url and id from redux store to local state
    componentDidMount() {
        this.setState({
            url: this.props.url,
            publicId: this.props.publicId
        })
    }

    uploadWidget() {
    
        window.cloudinary.openUploadWidget(
          { 
          cloud_name: 'dgrz2yde1', 
          upload_preset: 'h8ecxg04',
          },
          (error, result) => {this.picUpdateHandler(result)} 
          
        )
    }


    render() {
        return(
            <Grid container justify="center">
                <Grid item md={12} style={{padding: '20px'}}>
                    <ProfileImg source={this.state.url}/>
                </Grid>
                <Grid item md={12} style={{padding: '20px'}}>
                    <Button onClick={()=>this.uploadWidget()} variant="outlined" color="primary" fullWidth>Upload new avatar</Button>
                    <br/>
                    <br/>
                    <Button onClick={this.picDeleteHandler} variant="outlined" color="default" fullWidth>delete</Button>
                </Grid>
            </Grid>
        );
    }
    
};


const mapStateToProps = state => {
    return {
        email: state.email,
        url: state.user.profilePicUrl,
        publicId: state.user.profilePicId
    }
}


export default connect(mapStateToProps,null)(EditPicture);