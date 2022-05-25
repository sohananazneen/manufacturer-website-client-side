import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { IoIosPeople } from 'react-icons/io';
import { BsTools } from 'react-icons/bs';
import { MdRateReview } from 'react-icons/md';
const BusinessSummary = () => {
    const style = { color: "red", fontSize: "60px" }
    return (
        <Container className='text-center my-5'>
            <Row>
                <h2 className='text-danger fw-bolder'>Business Summary</h2>
                <p>We always try to provide good quality products</p>
            </Row>
            <Row>
                <Col xs={12} md={4} lg={4} className='shadow-lg p-3 mb-5 bg-body rounded' >
                    <div>
                        <p><IoIosPeople style={style} /></p>
                        <h4>100+ customers</h4>
                    </div>
                </Col>
                <Col xs={12} md={4} lg={4} className='shadow-lg p-3 mb-5 bg-body rounded' >
                    <div>
                        <p><MdRateReview style={style} /></p>
                        <h4>33K+ Reviews</h4>
                    </div>
                </Col>
                <Col xs={12} md={4} lg={4} className='shadow-lg p-3 mb-5 bg-body rounded' >
                    <div>
                        <p><BsTools style={style} /></p>
                        <h4>50+ tools</h4>
                    </div>
                </Col>
            </Row>
            <hr />
        </Container>
    );
};

export default BusinessSummary;