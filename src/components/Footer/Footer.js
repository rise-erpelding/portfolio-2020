import React from 'react';

const Footer = (props) => (
  <footer>
    <svg 
      className="footer__svg" 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 100 100" 
      preserveAspectRatio="none">
      <polygon 
        fill="#FFFFFF" 
        points="0,0 100,100 100,0" />
    </svg>
    <div>
    © {new Date().getFullYear()} Rise Erpelding
    </div>
  </footer>
);

export default Footer;
