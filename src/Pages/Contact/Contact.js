import React from 'react';
import { Button, Form } from 'react-bootstrap';

const Contact = () => {
    return (
        <div className='my-4'>
            <h2 className='text-center fw-bold'>Contact Us</h2>
            <div className='d-flex justify-content-center'>
                <Form className='w-50 border border-danger text-center p-5 shadow-lg p-3 mb-5 bg-body rounded'>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="name" placeholder="Enter Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter Email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                    <Button variant="danger" type="submit" className='mx-auto d-block'>
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default Contact;