import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Product = ({ product }) => {
    const { _id, name, img, description, price, minOrderQuantity, availableQuantity
    } = product;

    const navigate = useNavigate();
    const navigateToPurchase = id => {
        navigate(`/products/${id}`);
    }

    return (
        <Col>
            <Card style={{ height: '650px' }}>
                <Card.Img variant="top" src={img} className="img-fluid w-75 " />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text><strong> || Price: $ {price} ||</strong></Card.Text>
                    <Card.Text>Min Order Quantity: {minOrderQuantity}</Card.Text>
                    <Card.Text>Available Quantity: {availableQuantity}</Card.Text>
                    <Card.Text>{description}</Card.Text>
                    <Button onClick={() => navigateToPurchase(_id)} className='btn btn-danger mx-2'>Purchase</Button>
                </Card.Body>
            </Card>
        </Col >
    );
};

export default Product;