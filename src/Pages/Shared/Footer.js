import React from 'react';
import { Col, Container, Nav, Row } from 'react-bootstrap';
import footer from '../../assets/images/footer-pic.jpg'
import CustomLink from './CustomLink';
const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer style={{
            background: `url(${footer})`,
            backgroundSize: 'cover'
        }} className="text-white">
            <div className="p-5">
                <Container>
                    <Row>
                        <Col xs={3} md={3}>
                            <h2>Links</h2>
                            <Nav className="ms-auto gap-4 ">
                                <CustomLink to='/'>Home</CustomLink>
                                <CustomLink to='/parts'>Parts</CustomLink>
                                <CustomLink to='/portfolio'>My Portfolio</CustomLink>
                                <CustomLink to='/blogs'>Blogs</CustomLink>
                                <CustomLink to='/about'>About Us</CustomLink>
                            </Nav>
                        </Col>
                        <Col xs={6} md={6}>
                            <div className="d-flex justify-content-center">
                                <div>
                                    <h2>SN Car Parts Co.</h2>
                                    <small>copyright &copy; {year} All rights reserved.</small>
                                </div>
                            </div>
                        </Col>
                        <Col xs={3} md={3}>
                            <div className="d-flex justify-content-end">
                                <Nav className="ms-auto gap-4 ">
                                    <CustomLink to=' '>Legal</CustomLink>
                                    <CustomLink to=' '>Terms of use</CustomLink>
                                    <CustomLink to=' '>Privacy policy</CustomLink>
                                    <CustomLink to=' '>Cookie policy</CustomLink>
                                </Nav>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </footer>
    );
};

export default Footer;