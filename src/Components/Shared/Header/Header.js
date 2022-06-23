import * as React from 'react';
import { Container, Nav, Navbar, NavLink } from 'react-bootstrap';

const Header = () => {
    return (
        <div>
            <Navbar className='py-3' style={{background:"Brown"}} collapseOnSelect expand="lg" variant="dark">
            <Container>
                <Navbar.Brand to="/home" className='fs-1' style={{fontFamily:"'Courgette', cursive", color:"white"}}>Sunglasses</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                <Nav className="ms-auto nav_menu fs-5">
                <NavLink style={{color:'#E5E4E2',fontWeight:500}} to="/home">Home</NavLink>
                <NavLink style={{color:'#E5E4E2',fontWeight:500}} to="/explore">Explore</NavLink>
                <NavLink style={{color:'#E5E4E2',fontWeight:500}} to="/about">About</NavLink>
                <NavLink style={{color:'#E5E4E2',fontWeight:500}} to="/contact">Contact</NavLink>
                <NavLink style={{color:'#E5E4E2',fontWeight:500}} to="/dashboard">Dashboard</NavLink>
                </Nav>
                <Navbar.Text>
                    
                </Navbar.Text>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
    );
};

export default Header;