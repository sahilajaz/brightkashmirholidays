import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css'; 
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';

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
            <NavDropdown title="Places to See" id="navbar-dropdown" className="custom-nav-link" align="end">
  <div className="dropdown-menu-full-width">
    <div className="row">
      <div className="col-3">
        <h6>JK Tours</h6>
        <NavDropdown.Item>Amarnath Yatra</NavDropdown.Item>
        <NavDropdown.Item>Discover Kashmir</NavDropdown.Item>
        <NavDropdown.Item>Family Vacation</NavDropdown.Item>
        <NavDropdown.Item>Kashmir Holiday</NavDropdown.Item>
        <NavDropdown.Item>Group Tour</NavDropdown.Item>
        <NavDropdown.Item>Budget Tour</NavDropdown.Item>
        <NavDropdown.Item>Srinagar Tour</NavDropdown.Item>
      </div>
      <div className="col-3">
        <h6>Kashmir</h6>
        <NavDropdown.Item>Bangus Valley</NavDropdown.Item>
        <NavDropdown.Item>Doodhpathri</NavDropdown.Item>
        <NavDropdown.Item>Gulmarg</NavDropdown.Item>
        <NavDropdown.Item>Kokarnag</NavDropdown.Item>
        <NavDropdown.Item>Mughal Gardens</NavDropdown.Item>
        <NavDropdown.Item>Pahalgam</NavDropdown.Item>
        <NavDropdown.Item>Sonamarg</NavDropdown.Item>
        <NavDropdown.Item>Srinagar</NavDropdown.Item>
      </div>
      <div className="col-3">
        <h6>Jammu</h6>
        <NavDropdown.Item>Bahu Fort</NavDropdown.Item>
        <NavDropdown.Item>Bhaderwah</NavDropdown.Item>
        <NavDropdown.Item>Doda</NavDropdown.Item>
        <NavDropdown.Item>Kishtawar</NavDropdown.Item>
        <NavDropdown.Item>Lakes</NavDropdown.Item>
        <NavDropdown.Item>Patnitop</NavDropdown.Item>
        <NavDropdown.Item>Rivers</NavDropdown.Item>
      </div>
      <div className="col-3">
        <h6>Ladakh</h6>
        <NavDropdown.Item>Kargil</NavDropdown.Item>
        <NavDropdown.Item>Lamayuru</NavDropdown.Item>
        <NavDropdown.Item>Leh</NavDropdown.Item>
        <NavDropdown.Item>Nubra Valley</NavDropdown.Item>
        <NavDropdown.Item>Places</NavDropdown.Item>
        <NavDropdown.Item>Trekking</NavDropdown.Item>
        <NavDropdown.Item>Zanskar</NavDropdown.Item>
      </div>
    </div>
  </div>
</NavDropdown>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header;
