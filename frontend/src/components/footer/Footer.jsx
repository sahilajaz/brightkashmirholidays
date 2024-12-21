import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <div className="footer-container">
      <div className="overlay"/>
      <img src="footerimg.jpg" alt="Footer Image" />
      <div className="list-div">
        <ul className="first-list">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
        </ul>
        <ul className="sec-list">
          <li>
            <Link to="/*">Privacy and Policy</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/contact">Terms and conditions</Link>
          </li>
        </ul>
      </div>
      <div className='footetr-text'>
        <p>&copy;Bright Kashmir Holidays <br/> Registered with Department of Tourism J&K under the Registration No : JKEA00004293</p>
      </div>
    </div>

  )
}

export default Footer
