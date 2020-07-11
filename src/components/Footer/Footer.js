import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = (props) => (
  <footer>
    <div>
    © {new Date().getFullYear()} Rise Erpelding
    {' '}
    {/* Icon dump */}
    <FontAwesomeIcon icon="bars" />
          <FontAwesomeIcon icon="envelope" />
          <FontAwesomeIcon icon="times" />
          <FontAwesomeIcon icon={['fab', 'linkedin']} />
          <FontAwesomeIcon icon={['fab', 'github']} />
    </div>
  </footer>
);

export default Footer;
