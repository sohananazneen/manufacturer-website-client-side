import React from 'react';
import { Col, Container, Nav, Row } from 'react-bootstrap';
import footer from '../../assets/images/footer-pic.jpg'
import CustomLink from './CustomLink';
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaPinterest
} from "react-icons/fa";

const Footer = () => {
    // Year 
    const today = new Date();
    const year = today.getFullYear();

    // social Icons

    let iconStyles = { color: "white", fontSize: "1.5em" };

    return (
        <footer style={{
            background: `url(${footer})`,
            backgroundSize: 'cover'
        }} className="text-white mt-4">
            <div className="p-5">
                <Container>
                    <Row>
                        <Col xs={3} md={3}>
                            <h2>Links</h2>
                            <Nav className="ms-auto gap-4 ">
                                <CustomLink to='/'>Home</CustomLink>
                                <CustomLink to='/products'>Products</CustomLink>
                                <CustomLink to='/portfolio'>My Portfolio</CustomLink>
                                <CustomLink to='/blogs'>Blogs</CustomLink>
                                <CustomLink to='/about'>About Us</CustomLink>
                            </Nav>
                        </Col>
                        <Col xs={6} md={6}>
                            <Row>
                                <div className="App w-50 mx-auto mb-4">
                                    <span style={{ background: "#3B5998" }} className="m-2">
                                        <CustomLink to=' '> <FaFacebookF style={iconStyles} /></CustomLink>
                                    </span>
                                    <span style={{ background: "#1DA1F2" }} className="m-2">
                                        <CustomLink to=' '><FaTwitter style={iconStyles} /></CustomLink>
                                    </span>
                                    <span style={{ background: "black" }} className="m-2">
                                        <CustomLink to=' '>  <FaInstagram style={iconStyles} />
                                        </CustomLink>
                                    </span>
                                    <span style={{ background: "#BD081C" }} className="m-2">
                                        <CustomLink to=' '>     <FaPinterest style={iconStyles} />
                                        </CustomLink>
                                    </span>
                                </div>
                            </Row>
                            <Row>
                                <div className="d-flex justify-content-center">
                                    <div>
                                        <h2>SN Car Parts Co.</h2>
                                        <small>copyright &copy; {year} All rights reserved.</small>
                                    </div>
                                </div>
                            </Row>

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