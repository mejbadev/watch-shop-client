import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Header = () => {
    const {user, logOut} = useAuth();
    return (
        <div className='header-section mb-2'>
          <Navbar bg="dark" variant="dark" sticky="top">
            <Container >
            <Link to='/home' style={{textDecoration:'none'}}><Navbar.Brand >Watch Shop</Navbar.Brand></Link>
            <Nav className="m-2 d-flex justify-content-end">
            <Nav.Link as={Link} to="/home">Home</Nav.Link>
            <Nav.Link as={Link} to="/explore">Explore Products</Nav.Link>
            {
                user?.email? <div className='d-flex'><Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
                <Nav.Link as={Link} to="/login"><button onClick={logOut} className='btn btn-warning'>Logout</button></Nav.Link></div> : <Nav.Link as={Link} to="/login">Login</Nav.Link>
            }
            </Nav>
            </Container>
        </Navbar>
            
        </div>
    );
};

export default Header;