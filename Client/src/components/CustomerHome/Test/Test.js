import React, { Component } from 'react';
import axios from 'axios';
import './Test.css';


class Test extends Component {
  state = {
      loading: false,
      imageURL: '',
      publicId: ''
  };
  
  uploadWidget() {
    
    window.cloudinary.openUploadWidget(
      { 
      cloud_name: 'dgrz2yde1', 
      upload_preset: 'h8ecxg04',
      thumbnails: '.Test', 
      tags:['xmas']
      },
      (error, result) => { this.modifyState(result); } 
      
    )
  }

  modifyState = (result) => {
    if(result.event === 'success') {
      console.log(result.info);
      this.setState({imageURL: result.info.secure_url, publicId: result.info.public_id});
    }
  }

  deleteImage = () => {
    const id = {
      publicId: this.state.publicId
    }
    axios.post('http://localhost:4000/test',id)
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    })
    this.setState({imageURL: '', publicId: ''})
  }
    
      render() {
       
        return (
          <div>
           <button onClick={()=>this.uploadWidget()}>Upload Photo</button>
           <button onClick={this.deleteImage}>Delete image</button>
           <div className="Test">

          </div>
          </div>
         
        );
      }
      
      
        
}

export default Test;


