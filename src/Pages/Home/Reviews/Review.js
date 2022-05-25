
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Reviews.css'

const Review = ({ review }) => {
    const { img, name, customerReview } = review;
    return (
        <Col>
            <Card style={{ height: '650px' }}>
                <Card.Img variant="top" src={img} className="img-fluid w-75 " />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{customerReview}</Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Review;