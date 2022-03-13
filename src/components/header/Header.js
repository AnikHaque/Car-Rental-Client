import React from 'react';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header.css';

const Header = () => {
    const {user,logout,admin} = useAuth();
    return (
        <div>
           <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home"><b className='fw-bold fs-3'><i className='car-logo'>Car-Rental</i></b></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto navigation-menu">
      <Nav.Link as={Link} to="/home" className='mx-2 fw-bold'>Home</Nav.Link>
      <Nav.Link as={Link} to="/about" className='mx-2 fw-bold'>About</Nav.Link>
      <Nav.Link as={Link} to="/car" className='mx-2 fw-bold'>Cars</Nav.Link>
      <Nav.Link as={Link} to="/reservation" className='mx-2 fw-bold'>Reservation</Nav.Link>
      <Nav.Link as={Link} to="/gallary" className='mx-2 fw-bold'>Gallary</Nav.Link>
      <Nav.Link as={Link} to="/contact" className='fw-bold'>Contact</Nav.Link>
      
      
    </Nav>
    <Nav>
    
    {
      admin && 
      <NavDropdown title="Admin Dashboard" id="basic-nav-dropdown" className='mt-2 fw-bold'>
    <Nav.Link as={Link} to="/" className='text-light mx-2 me-2 fw-bold text-center bg-dark'>{user.displayName}</Nav.Link>
    <Nav.Link as={Link} to="/addcar" className='text-dark fw-bold text-center'>Add Car</Nav.Link>
    <Nav.Link as={Link} to="/rents" className='text-dark fw-bold text-center'>Manage Rents</Nav.Link>
    <Nav.Link as={Link} to="/makeadmin" className='text-dark fw-bold text-center'>Make Admin</Nav.Link>
        </NavDropdown>
        }

    {
      !admin && user.email &&
      <NavDropdown title="User Dashboard" id="basic-nav-dropdown" className='mt-2 fw-bold'>
    <Nav.Link as={Link} to="/" className='text-light mx-2 me-2 fw-bold text-center bg-dark'>{user.displayName}</Nav.Link>
    <Nav.Link as={Link} to="/myrent" className='text-dark fw-bold text-center'>My Rents</Nav.Link>
    <Nav.Link as={Link} to="/myreserve" className='text-dark fw-bold text-center'>My Reservation</Nav.Link>
        </NavDropdown>
        }
    
    
     { 
!user.email ?
     <Nav.Link as={Link} to="/login">
          <Button className='btn btn-login text-dark fw-bold px-4 pe-4'>Login</Button>
          </Nav.Link>
          :
          <Nav.Link as={Link} to="/login">
          <Button onClick={logout} className='btn btn-login text-dark fw-bold px-4 pe-4'>LogOut</Button>
          </Nav.Link>

          }
      
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
           
        </div>
    );
};

export default Header;