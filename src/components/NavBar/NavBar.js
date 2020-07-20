import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuClicked: false,
    }
  }

  clickMenu = () => {
    const toggleState = !this.state.menuClicked;
    console.log(toggleState);
    this.setState({menuClicked: toggleState})
  }

  render() {
    const navbarClass = this.state.menuClicked ? "navbar show-menu" : "navbar";
    const navbarMenuClass = this.state.menuClicked ? "navbar__menu open" : "navbar__menu";

    return (
      <div className="navbar__container">
        <button className="navbar__button" onClick={this.clickMenu}>
          <FontAwesomeIcon className="navbar__bars" icon="bars" />
        </button>
        <ul className={navbarClass}>
          <li><Link className="hvr-sweep-to-right" to="/">Home</Link></li>
          <li><Link className="hvr-sweep-to-right" to="/about">About</Link></li>
          <li><Link className="hvr-sweep-to-right" to="/projects">Projects</Link></li>
          <li><Link className="hvr-sweep-to-right" to="/resume">Resume</Link></li>
          <li>Contact</li>
        </ul>
      </div>
    );
  }
};

export default NavBar;