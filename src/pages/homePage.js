import React from 'react';
import NavBar from '../components/navBar';
import About from '../components/about';
import Contacts from '../components/contacts';
import Footer from '../components/footer';
import Dashboard from '../components/dashboard';
const HomePage = () => {
  return (
    <>
      <div className="header bg-main">
        <NavBar />
      </div>
      <Dashboard />
      <About />
      <Contacts />
      <Footer />
    </>
  );
};

export default HomePage;
