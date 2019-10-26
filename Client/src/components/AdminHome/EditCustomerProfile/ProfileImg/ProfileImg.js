import React from 'react';
import './ProfileImg.css';

const ProfileImg = (props) => {
    return (
        <img src={props.source} alt="profile " className="ProfileImg"/>
    );
};

export default ProfileImg;