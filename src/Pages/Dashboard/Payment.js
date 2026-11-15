import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import CheckoutForm from './CheckoutForm';

const Payment = () => {
    const stripePromise = loadStripe('pk_test_51L5CsXDqUXs6MwhfMrFfZMpzb4B2VibJ0XoQAoDEbwa6LQAbhaP27ytn4yz0ukcvBsiUV94vyc3TgSb6W05THrnk00p7KWcfL8');
    const { id } = useParams();
    const url = `http://localhost:5000/order/${id}`;
    const { data: payorder, isLoading } = useQuery(['order', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <div className='text-center border border-danger p-4 m-4'>
                            <h6>Please Pay for <span className='fw-bold'>{payorder.productName}</span></h6>
                            <p><span className='fw-bold'>Quantity: </span>{payorder.quantity}</p>
                            <p><span className='fw-bold'>Please pay: </span>${payorder.price}</p>
                        </div>
                    </Col>
                    <Col>
                        <div >
                            <Elements stripe={stripePromise}>
                                <CheckoutForm payorder={payorder} />
                            </Elements>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Payment;