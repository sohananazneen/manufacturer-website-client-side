
import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Review = ({ review }) => {
    const { rating, name, customerReview } = review;
    return (
        <Col>
            <Card style={{ height: '300px' }} className="shadow-sm p-3 mb-5 bg-body rounded">
                <Card.Body>
                    <blockquote className="blockquote mb-0 text-center">
                        <p>
                            {' '}
                            {customerReview}{' '}
                        </p>
                        <p>Ratings: {rating} out of 5</p>
                        <footer className="blockquote-footer">
                            <cite title="Source Title">{name}</cite>
                        </footer>
                    </blockquote>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Review;