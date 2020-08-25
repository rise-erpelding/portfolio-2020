import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = (props) => (
  <footer>
    <div className="footer__icons">
      <a href="https://github.com/rise-erpelding" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon
          className="footer__icon footer__icon--github"
          icon={['fab', 'github']}
        />
      </a>
      <a href="https://www.linkedin.com/in/riseerpelding/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon
          className="footer__icon footer__icon--linkedin"
          icon={['fab', 'linkedin']}
        />
      </a>
      <a href="mailto:rise.erpelding@gmail.com">
        <FontAwesomeIcon
          className="footer__icon footer__icon--envelope"
          icon="envelope"
        />
      </a>
      {/* <FontAwesomeIcon className="footer__icon--times" icon="times" /> */}
    </div>
    <div className="footer__copyright">
      © {new Date().getFullYear()} Rise Erpelding
    </div>
  </footer>
);

export default Footer;
