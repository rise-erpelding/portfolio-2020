import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
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
    this.setState({menuClicked: toggleState})
  }

  render() {
    const navbarClass = this.state.menuClicked ? "navbar show-menu" : "navbar";
    const links = [
      { name: "About", path: "/about" },
      { name: "Projects", path: "/projects" },
      { name: "Resume", path: "/resume" },
    ];
    const navbarLinks = links.map((link, index) => (
      <li key={index + '-' + link.name}>
        <NavLink activeClassName="navbar__link--active" className="navbar__link" to={link.path}>
          {link.name}
          <div className="navbar__underline"></div>
        </NavLink>
        
      </li>
    ));

    return (
      <div className="navbar__container">
        <button className="navbar__button" onClick={this.clickMenu}>
          <FontAwesomeIcon className="navbar__bars" icon="bars" />
        </button>
        <ul className={navbarClass}>
          <li>
            <Link className="navbar__link" to="/">
              Home

            <div className="navbar__underline"></div>
            </Link>
          </li>
          {navbarLinks}
          {/* <li>Contact</li> */}
        </ul>
      </div>
    );
  }
};

export default NavBar;