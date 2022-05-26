import { signOut } from 'firebase/auth';
import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import CustomLink from './CustomLink';

const Header = () => {
    const [user] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
    };
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
                            <CustomLink to='/products'>Products</CustomLink>
                            <CustomLink to='/portfolio'>My Portfolio</CustomLink>
                            <CustomLink to='/blogs'>Blogs</CustomLink>
                            <CustomLink to='/contact'>Contact Us</CustomLink>
                            {
                                user ?
                                    <>
                                        <Button className="btn btn-danger" onClick={logout}>Sign out</Button>
                                    </>
                                    :
                                    <>
                                        <CustomLink to='/login'>Login</CustomLink>
                                    </>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;