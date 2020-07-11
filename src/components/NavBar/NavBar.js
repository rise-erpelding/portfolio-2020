import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = (props) => (
  <ul className="navbar">
    <li><Link to="/">Home</Link></li>
    <li><Link to="/about">About</Link></li>
    <li><Link to="/projects">Projects</Link></li>
    <li><Link to="/resume">Resume</Link></li>
    <li>Contact</li>
  </ul>
);

export default NavBar;