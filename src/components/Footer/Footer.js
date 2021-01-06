import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = (props) => (
  <footer className="footer">
    <div className="footer__icons">
      <a
        href="https://github.com/rise-erpelding"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="github"
      >
        <FontAwesomeIcon
          className="footer__icon footer__icon--github"
          icon={['fab', 'github']}
        />
      </a>
      <a
        href="https://www.linkedin.com/in/riseerpelding/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="linked-in"
        >
        <FontAwesomeIcon
          className="footer__icon footer__icon--linkedin"
          icon={['fab', 'linkedin']}
        />
      </a>
      <a href="mailto:rise.erpelding@gmail.com" aria-label="email">
        <FontAwesomeIcon
          className="footer__icon footer__icon--envelope"
          icon="envelope"
        />
      </a>
    </div>
    <div className="footer__copyright">
      © {new Date().getFullYear()} Rise Erpelding
    </div>
  </footer>
);

export default Footer;
