import React from 'react';
import { Button, Col, Container, Row, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddProduct = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        const url = `https://still-temple-50521.herokuapp.com/product`;
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
                    toast('Product Added');
                    data.target.reset();
                };
            })
    };
    return (
        <Container>
            <Row>
                <Col>
                    <div className='mx-auto'>
                        <h2 className='text-center'>Add A Product </h2>
                        <Form onSubmit={handleSubmit(onSubmit)} className='w-50 border border-danger text-center mx-auto p-3 shadow-lg mb-5 bg-body rounded'>
                            <Form.Group className="mb-3" controlId="formBasicName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="name" placeholder="Enter Name"  {...register("name", { required: true, maxLength: 20 })} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicText">
                                <Form.Label>Price</Form.Label>
                                <Form.Control type="text" placeholder="Price" {...register("price")} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicText">
                                <Form.Label>Quantity</Form.Label>
                                <Form.Control type="number" placeholder="Quantity"  {...register("quantity")} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Description</Form.Label>
                                <Form.Control as="textarea" rows={3} {...register("description", { required: true, maxLength: 20 })} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicText">
                                <Form.Label>Photo URL</Form.Label>
                                <Form.Control type="text" placeholder="Photo URL" {...register("img")} />
                            </Form.Group>

                            <Button variant="danger" type="submit" className='mx-auto d-block'>
                                Add Product
                            </Button>
                        </Form>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default AddProduct;