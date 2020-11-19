import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './NavBar.css';

const NavBar = () => {
  const [menuClicked, setMenuClicked] = useState(false);

  const clickMenu = () => {
    const toggleState = !menuClicked;
    setMenuClicked(toggleState);
  }

  const navbarClass = menuClicked ? "navbar show-menu" : "navbar";
  const links = [
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Resume", path: "/resume" },
    { name: "Contact", path: "/contact" },
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
      <button
        type="button"
        className="navbar__button"
        onClick={clickMenu}
        aria-label="menu"
      >
        {
          menuClicked ?
            <FontAwesomeIcon className="navbar__cross navbar__icon" icon="times" /> :
            <FontAwesomeIcon className="navbar__bars navbar__icon" icon="bars" />
        }

      </button>
      <nav role="navigation" className={navbarClass}>
        <ul className="navigation">
          <li>
            <Link className="navbar__link" to="/">
              Home
              </Link>
          </li>
          {navbarLinks}
        </ul>
      </nav>

    </div>
  );
}

export default NavBar;