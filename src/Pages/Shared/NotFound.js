import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import errorImage from '../../assets/images/404-Page.gif'

const NotFound = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col sm={8} md={8} lg={8} >
                        <img src={errorImage} className='w-100' alt="" />
                    </Col>
                    <Col sm={4} md={4} lg={4} className='text-center text-danger fw-bold d-flex justify-content-center align-items-center'>
                        <div>
                            <h1 >404</h1>
                            <h6>Page Not Found</h6>
                        </div>
                    </Col>
                </Row>

            </Container>
        </div>
    );
};

export default NotFound;