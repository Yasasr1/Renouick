import React from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
//import HomePage from './components/HomePage/HomePage';
import WorkerRegistration from './components/RegistrationPages/WorkerRegistration/WorkerRegistration';

const app = () => {
  return (
    <div>
      <Layout>
        <WorkerRegistration/>
      </Layout>
    </div>
  );
}

export default app;
