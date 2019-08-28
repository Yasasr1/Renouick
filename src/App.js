import React from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
//import HomePage from './components/HomePage/HomePage';
//import WorkerRegistration from './components/RegistrationPages/WorkerRegistration/WorkerRegistration';
import FAQ from './components/FAQ/FAQ';

const app = () => {
  return (
    <div>
      <Layout>
        <FAQ/> 
      </Layout>
    </div>
  );
}


export default app;
