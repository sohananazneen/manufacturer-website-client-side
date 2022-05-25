import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import about from '../../assets/images/about.jpg'
const About = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col xs={12} md={4} lg={5}>
                        <img
                            className="w-75"
                            src={about}
                            alt="First slide"
                        />
                    </Col>
                    <Col xs={12} md={8} lg={7}>
                        <div className='d-flex justify-content-center mt-5'>
                            <div>
                                <h2 className='text-danger fw-bolder'>About Us</h2>
                                <p> We provide a wide range of auto spare parts of world renowned brands meeting the highest quality of OEM products, exclusively imported from Japan, Korea, Taiwan, Malaysia, and Thailand. We cater to meet the parts requirement of Toyota, Nissan, Mitsubishi, Mazda, Daihatsu, Suzuki, Subaru, Isuzu, Hyundai and Kia. </p>
                                <p>Our primary objective is to provide our customers with the best possible solutions and maintain our reputation as an ideal importer in the automobile industry in Saudi Arabia. We strive to meet and exceed customer expectations in terms of quality and performance. </p>
                            </div>
                        </div>
                    </Col>
                </Row>
                <hr />
            </Container>
        </div>
    );
};

export default About;