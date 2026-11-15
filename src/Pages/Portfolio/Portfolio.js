import React from 'react';
import { Card, Col, Container, ListGroup, Row } from 'react-bootstrap';

const Portfolio = () => {
    return (
        <div className='my-5'>
            <Container>
                <Row>
                    <Col xs={12} lg={6}>
                        <Card border="danger" className="text-center">
                            <Card.Header className='text-danger fw-bold' >My Portfolio</Card.Header>
                            <Card.Body>
                                <Card.Title>Sohana Nazneen</Card.Title>
                                <Card.Text>
                                    Email: sohana.nazneen.1@gmail.com
                                </Card.Text>
                                <Card.Text>
                                    Educational Background: B.Sc. (Hons) in CSE
                                </Card.Text>
                                <h6 className='text-danger' >Live Links</h6>
                                <Card.Link href="https://sohanan.github.io/sohana-1st-portfolio/">My portfolio</Card.Link>
                                <Card.Link href="https://halal-food-app.netlify.app/">Halal Food</Card.Link>
                                <Card.Link href="https://halal-grocery.web.app/">Halal Grocery</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} lg={6}>
                        <div className='d-flex justify-content-center' >
                            <Card style={{ width: '18rem' }} className='text-center'>
                                <Card.Header className='text-danger fw-bold' >Technologies or Skills</Card.Header>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>Web Design</ListGroup.Item>
                                    <ListGroup.Item>Web Development</ListGroup.Item>
                                    <ListGroup.Item>Graphics Design</ListGroup.Item>
                                    <ListGroup.Item>AutoCad Design</ListGroup.Item>
                                </ListGroup>
                            </Card>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Portfolio;