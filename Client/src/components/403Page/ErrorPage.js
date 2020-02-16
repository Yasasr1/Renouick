import React from 'react';

const ErrorPage = () => {
    return(
        <div style={{
            margin: '0',
            padding: '0',
            border: '0',
            fontSize: '100%',
            font: 'inherit',
            verticalAlign: 'baseline',
            boxSizing: 'border-box',
            color: 'inherit',
            backgroundImage: 'linear-gradient(120deg, #4f0088 0%, #000000 100%',
            height: '100vh'
        
        }}>
            <h1 style={{
                fontSize: '45vw',
                textAlign: 'center',
                position: 'fixed',
                width: '100vw',
                zIndex:'1',
                color: '#ffffff26',
                textShadow: '0 0 50px rgba(0, 0, 0, 0.07)',
                top: '50%',
                transform: 'translateY(-50%)',
                fontFamily:' Montserrat, monospace',
            }}>403</h1>
            <div style={{
                background: 'rgba(0, 0, 0, 0)',
                width: '70vw',
                position: 'relative',
                top: '50%',
                transform: 'translateY(-50%)',
                margin: '0 auto',
                padding: '30px 30px 10px',
                boxShadow: '0 0 150px -20px rgba(0, 0, 0, 0.5)',
                zIndex:'3'
            
            }}><p style={{
                fontFamily: 'Share Tech Mono, monospace',
                color: '#f5f5f5',
                margin:' 0 0 20px',
                fontSize: '17px',
                lineHeight: '1.2'
            }}>> <span style={{color: '#f0c674'}}>ERROR CODE</span>: "<i style={{color:'#8abeb7'}}>HTTP 403 Forbidden</i>"</p>
            <p style={{
                fontFamily: 'Share Tech Mono, monospace',
                color: '#f5f5f5',
                margin:' 0 0 20px',
                fontSize: '17px',
                lineHeight: '1.2'
            }}>> <span style={{color: '#f0c674'}}>ERROR DESCRIPTION</span>: "<i style={{color:'#8abeb7'}}>Access Denied. You Do Not Have The Permission To Access This Page On This Server. Please Login To Gain Access To Your Dashboard</i>"</p>
            <p style={{
                fontFamily: 'Share Tech Mono, monospace',
                color: '#f5f5f5',
                margin:' 0 0 20px',
                fontSize: '17px',
                lineHeight: '1.2'
            }}>> <span style={{color: '#f0c674'}}>ERROR POSSIBLY CAUSED BY</span>: [<b style={{color:'#81a2be'}}>execute access forbidden, read access forbidden, write access forbidden, ssl required, ssl 128 required, ip address rejected, client certificate required, site access denied, too many users, invalid configuration, password change, mapper denied access, client certificate revoked, directory listing denied, client access licenses exceeded, client certificate is untrusted or invalid, client certificate has expired or is not yet valid, passport logon failed, source access denied, infinite depth is denied, too many requests from the same client ip</b>...]</p>
            <p style={{
                fontFamily: 'Share Tech Mono, monospace',
                color: '#f5f5f5',
                margin:' 0 0 20px',
                fontSize: '17px',
                lineHeight: '1.2'
            }}>> <span style={{color: '#f0c674'}}>SOME PAGES ON THIS SERVER THAT YOU DO HAVE PERMISSION TO ACCESS</span>: [<a href="/">Home Page</a>, <a href="/about">About Us</a>, <a href="/faq">FAQ</a>...]</p>
            </div>

            
        </div>
    );
};

export default ErrorPage;