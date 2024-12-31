import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css'; 
import { Navbar, Nav, Container } from 'react-bootstrap';


const Header = () => {
  return (
    <div>
      <Navbar expand="md" className="custom-navbar" variant="dark" style={{  
      zIndex: 999, 
      boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)' 
    }}>
      <Container>
        <Navbar.Brand className="ms-0">
          <div style={{marginBottom: '-25px'}}>
          <img 
            src="logo.jpg"  
            alt="Logo" 
            className="logo" 
            style={{ 
              height: '80px', 
              width: '80px',
              borderRadius: '50%', 
              objectFit: 'contain',
               
              border: '2px solid white' ,
              padding: ''
            }} 
          />
          <span style={{marginLeft:'10px' , fontSize: '1.7rem' , fontWeight: 'bold'}}>Bright Kashmir Holidays</span>
          </div>
           <p style={{marginRight: '90px' ,fontSize: '1rem'}}>Travel To Paradise</p>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" />

        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="custom-nav-link">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className="custom-nav-link">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/services" className="custom-nav-link">
              Services
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" className="custom-nav-link">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header
