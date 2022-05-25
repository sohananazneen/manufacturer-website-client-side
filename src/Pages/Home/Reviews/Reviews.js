import React, { useEffect, useState } from 'react';
import { Carousel, Container, Row } from 'react-bootstrap';
import Review from './Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('Reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])
    return (
        <div className='my-5' >
            <Container>
                <h2 className="text-center text-danger">Reviews</h2>
                <Row>
                    {
                        reviews.map(review => <Review
                            key={review._id}
                            review={review}
                        ></Review>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Reviews;