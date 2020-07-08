import React from 'react';
import { SectionTitle } from '../../utils/headings';

const Header = (props) => (
  <header>
    <div className="section-title__container">
      <SectionTitle title={props.section} />
    </div>
  </header>
);

export default Header;