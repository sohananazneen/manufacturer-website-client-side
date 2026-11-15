import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddReview = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data, e) => {
        const url = `https://still-temple-50521.herokuapp.com/review`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    toast('Review Added');
                    e.target.reset();
                };
            })
    };
    return (
        <Container>
            <Row>
                <Col>
                    <div className='mx-auto'>
                        <h2 className='text-center fw-bold'>Add A Review </h2>
                        <Form onSubmit={handleSubmit(onSubmit)} className='w-50 border border-danger text-center mx-auto p-3 shadow-lg mb-5 bg-body rounded'>
                            <Form.Group className="mb-3" controlId="formBasicName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="name" placeholder="Enter Name"  {...register("name", { required: true, maxLength: 20 })} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicText">
                                <Form.Label>Ratings</Form.Label>
                                <Form.Control type="text" placeholder="Please Give a Rating"{...register("rating")} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Review</Form.Label>
                                <Form.Control as="textarea" rows={3} {...register("customerReview")} />
                            </Form.Group>
                            <Button variant="danger" type="submit" className='mx-auto d-block'>
                                Add Review
                            </Button>
                        </Form>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default AddReview;