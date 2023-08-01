import React from 'react';
//Function to display the Footer
const Footer = () => {
  return (
    <div className="footer-child">
    <p className="child-footer"> {new Date().getFullYear()} All rights reserved.</p>
    <p className="child-footer"> By Roopa Patel</p>
    </div>
    
  );
}

export default Footer;