import React from 'react';
import renouickLogo from '../../assests/logo/logo.PNG';
import './Logo.css';

const logo = () => (
    <div className="HeaderLogo">
        <img src={renouickLogo} alt="Company Logo" />
    </div>
);

export default logo;