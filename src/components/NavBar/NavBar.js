import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
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
      </NavLink>

    </li>
  ));

  return (
    <div className="navbar__container">
      <input type="checkbox" className="navbar__checkbox" id="nav-button" />
      <label htmlFor="nav-button" className="navbar__button">
        <span className="navbar__icon">&nbsp;</span>
      </label>
      <nav role="navigation" className="navigation">
        <ul className="navigation__list">
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