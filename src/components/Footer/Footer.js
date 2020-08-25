import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = (props) => (
  <footer>
    <div className="footer__icons">
      <FontAwesomeIcon className="footer__icon footer__icon--envelope" icon="envelope" />
      {/* <FontAwesomeIcon className="footer__icon--times" icon="times" /> */}
      <FontAwesomeIcon className="footer__icon footer__icon--linkedin" icon={['fab', 'linkedin']} />
      <FontAwesomeIcon className="footer__icon footer__icon--github" icon={['fab', 'github']} />
    </div>
    <div className="footer__copyright">
      © {new Date().getFullYear()} Rise Erpelding
    </div>
  </footer>
);

export default Footer;
