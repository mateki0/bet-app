import React from 'react';
import Layout from 'Components/Layout';
import Login from 'Components/Login';

const RegistrationPage = () => {
  return (
    <Layout>
      <Login isRegistration />
    </Layout>
  );
};

export default RegistrationPage;
