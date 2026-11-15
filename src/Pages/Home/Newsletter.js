import React from 'react';
import { Button, Col, Container, FormControl, InputGroup, Row } from 'react-bootstrap';

const Newsletter = () => {
    return (
        <div>
            <Container>
                <Row className="shadow p-5 mb-5 bg-body rounded">
                    <Col xs={12} md={6} lg={6}>
                        <h3 className='fw-bold' >Subscribe To Our Newsletter</h3>
                        <p>Register now to get latest updates on promotions & coupons. Don’t worry, we not spam!</p>
                    </Col>
                    <Col xs={12} md={6} lg={6}>
                        <InputGroup className="mb-3">
                            <FormControl
                                placeholder="Enter Your E-mail"
                                aria-label="Enter Your E-mail"
                                aria-describedby="basic-addon2"
                            />
                            <Button id="button-addon2" className='btn btn-danger fw-bold' >
                                Subscribe
                            </Button>
                        </InputGroup>
                        <p>
                            By subscribing, you accepted the our Policy
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Newsletter;