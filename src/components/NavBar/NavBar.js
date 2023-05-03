import React from 'react';
import { NavLink } from 'react-router-dom';
import RoundButton from '../../utils/components/RoundButton';

function NavBar() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/services">Services</NavLink>
      <NavLink to="/about">About Us</NavLink>
      <NavLink to="/contact">Contact Us</NavLink>
      <RoundButton text="Login" />
    </nav>
  );
}

export default NavBar;
