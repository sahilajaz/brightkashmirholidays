import './Footer.css';
import { Link } from 'react-router-dom';
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";


const Footer = () => {

  const openWhatsApp = () => {
    const phoneNumber = "+916006151196"
    const url = `https://wa.me/${phoneNumber}`
    window.open(url , "_blank")
  }


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
              <Link to="/policy">Privacy and Policy</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/terms">Terms and Conditions</Link>
            </li>
          </ul>
          <ul className='social-media' style={{zIndex: 5}}>
          <li>
              <a href="https://www.instagram.com/bright_kashmir_holidays/?igsh=MXdtNWo4dWpobG42bw%3D%3D#" target='_blank' rel='noopener noreferrer'>
              <FaInstagram style={{ width: '70px',height:'28px' ,color: 'white' }} />
              </a>
          </li>
          <li>
        <a href="https://www.facebook.com/share/13eELviwJ8/" target='_blank' rel='noopener noreferrer'>
          <CiFacebook style={{ width: '70px',height:'28px', color: 'white' }} />
        </a>
      </li>
        <li >
            <button style={{
          background: 'transparent',  
          border: 'none',             
          padding: 0,                 
        }} > <a href='https://www.linkedin.com/in/bright-kashmir-holidays-749517344/' target='_blank'><CiLinkedin style={{ width: '70px',height:'28px', color: 'white' }}/></a> </button>
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
