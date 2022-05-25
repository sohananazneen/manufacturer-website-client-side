import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FcEngineering } from 'react-icons/fc';
import { BiSupport } from 'react-icons/bi';
import { FcSupport } from 'react-icons/fc';
import { FiBox } from 'react-icons/fi';
const BusinessSummary = () => {
    const style = { color: "red", fontSize: "60px" }
    return (
        <Container className='text-center my-4'>
            <Row>
                <h2>Business Summary</h2>
                <p>We always try to provide good quality products</p>
            </Row>
            <Row>
                <Col xs={6} md={3} lg={3}>
                    <div>
                        <p><FcEngineering style={style} /></p>
                        <h4>Engine</h4>
                    </div>
                </Col>
                <Col xs={6} md={3} lg={3}>
                    <div>
                        <p><FiBox style={style} /></p>
                        <h4>Quality</h4>
                    </div>
                </Col>
                <Col xs={6} md={3} lg={3}>
                    <div>
                        <p><FcSupport style={style} /></p>
                        <h4>Gearbox</h4>
                    </div>
                </Col>
                <Col xs={6} md={3} lg={3}>
                    <div>
                        <p><BiSupport style={style} /></p>
                        <h4>Customer support</h4>
                    </div>
                </Col>
            </Row>

        </Container>
    );
};

export default BusinessSummary;