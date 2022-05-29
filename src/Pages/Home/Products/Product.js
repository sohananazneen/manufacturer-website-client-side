import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Product = ({ product }) => {
    const { _id, name, img, description, price, quantity
    } = product;

    const navigate = useNavigate();
    const navigateToPurchase = id => {
        navigate(`/product/${id}`);
    }

    return (
        <Col>
            <Card style={{ height: '750px' }} className="shadow p-3 mb-5 bg-body rounded">
                <Card.Img variant="top" src={img} className="img-fluid w-75 " />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text><strong> || Price: $ {price} ||</strong></Card.Text>
                    <Card.Text>
                        {
                            quantity > 0
                                ? <span>{quantity} pieces available </span>
                                : <span className='text-danger'>Sold Out </span>
                        }
                    </Card.Text>
                    <Card.Text>{description}</Card.Text>
                    <Button onClick={() => navigateToPurchase(_id)} disabled={quantity == 0} className='btn btn-danger mx-2'>Purchase</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Product;