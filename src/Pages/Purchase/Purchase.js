import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import useProductDetails from '../../hooks/useProductDetails';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
const Purchase = () => {
    const { id } = useParams();
    const [product, setProduct] = useProductDetails(id);
    const [user] = useAuthState(auth);
    return (
        <div>
            <h1>Product id: {id}</h1>
            <Container>
                <Row>
                    <Col>
                        <Card>
                            <Card.Body>
                                <Card.Title>{user.email}</Card.Title>
                                <Card.Text>{product.name}</Card.Text>
                                <Card.Text><strong> || Price: $ {product.price} ||</strong></Card.Text>
                                <Card.Text>{product.description}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Purchase;