import React from 'react';
import Button from '../components/buttons/button';
import Logo from '../assets/logo.svg';

const NavBar = () => {
  return (
    <div className="navBar">
      <img src={Logo} alt="logo" />
      <Button
        type="button"
        className="button roundbtn"
        text="CONTACT"
      />
    </div>
  );
};
export default NavBar;
