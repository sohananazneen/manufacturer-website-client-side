import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const Products = ({ product }) => {
    const { name, img, description, price, minOrderQuantity, availableQuantity
    } = product;
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={img} className="img-fluid rounded" />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text><strong> || Price: $ {price} ||</strong></Card.Text>
                    <Card.Text>Min Order Quantity: {minOrderQuantity}</Card.Text>
                    <Card.Text>Available Quantity: {availableQuantity}</Card.Text>
                    <Card.Text>{description}</Card.Text>
                    <Button className='btn btn-danger mx-2'>Purchase</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Products;