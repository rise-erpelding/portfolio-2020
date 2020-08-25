import React from 'react';
import { SectionTitle } from '../../utils/headings';

const Header = (props) => (
  <header>
    <div className="section-title__container">
      <SectionTitle title={props.section} />
    </div>
    <div className="section-title__underline"></div>
  </header>
);

export default Header;