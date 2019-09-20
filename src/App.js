import React from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
//import HomePage from './components/HomePage/HomePage';
import WorkerRegistration from './components/RegistrationPages/WorkerRegistration/WorkerRegistration';
import About from './components/About/About';
const app = () => {
  return (
    <div>
      <Layout>
        <About/> 
      </Layout>
    </div>
  );
}


export default app;
