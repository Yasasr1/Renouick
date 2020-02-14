import React from 'react';
import renouickLogo from '../../assests/logo/logo.png';
import './Logo.css';

const logo = () => (
    <div className="HeaderLogo">
        <img src={renouickLogo} alt="Company Logo" />
    </div>
);

export default logo;