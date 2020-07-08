import React from 'react';
import { SectionTitle } from '../../utils/headings';

const Header = (props) => (
  <header>
    <SectionTitle title={props.section} />
    <svg
      className="header__svg" 
      xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
      <polygon fill="#FFFFFF" points="0,100 100,50 100,100" />
    </svg>
  </header>
);

export default Header;