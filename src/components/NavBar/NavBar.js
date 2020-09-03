import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './NavBar.css';

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
          {
          this.state.menuClicked ?
          <FontAwesomeIcon className="navbar__cross navbar__icon" icon="times" /> :
          <FontAwesomeIcon className="navbar__bars navbar__icon" icon="bars" />
          }
          
        </button>
        <nav role="navigation" className={navbarClass}>
          <ul className="navigation">
            <li>
              <Link className="navbar__link" to="/">
                Home

              <div className="navbar__underline"></div>
              </Link>
            </li>
            {navbarLinks}
            {/* <li>Contact</li> */}
          </ul>
        </nav>

      </div>
    );
  }
};

export default NavBar;