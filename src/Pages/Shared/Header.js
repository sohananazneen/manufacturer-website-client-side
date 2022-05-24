import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import CustomLink from './CustomLink';

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={CustomLink} to="/">
                        <h2>SN Car Parts Co.</h2>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto gap-4 ">
                            <CustomLink to='/'>Home</CustomLink>
                            <CustomLink to='/parts'>Parts</CustomLink>
                            <CustomLink to='/portfolio'>My Portfolio</CustomLink>
                            <CustomLink to='/blogs'>Blogs</CustomLink>
                            <CustomLink to='/about'>About Us</CustomLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;