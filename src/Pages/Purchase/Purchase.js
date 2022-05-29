import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import useProductDetails from '../../hooks/useProductDetails';
import axios from 'axios';
import { toast } from 'react-toastify';

const Purchase = () => {
    const { id } = useParams();
    const [product, setProduct] = useProductDetails(id);

    const [user] = useAuthState(auth);

    const handlePlaceOrder = event => {
        event.preventDefault();
        const order = {
            email: user.email,
            product: product.name,
            price: product.price,
            quantity: product.quantity,
            id: id,
            address: event.target.address.value,
            phone: event.target.phone.value
        }

        axios.post('https://still-temple-50521.herokuapp.com/order', order)
            .then(response => {
                const { data } = response;
                if (data.insertedId) {
                    toast('Your order is booked!!!');
                    event.target.reset();
                }
            })
    }
    return (
        <div>
            <Container>
                <Row>
                    <div className='text-center'>
                        <h2>Name: {user?.displayName}</h2>
                        <h4>Email: {user?.email}</h4>
                    </div>
                </Row>
                <Row>
                    <Col xs={12} lg={6}>
                        <Card>
                            <Card.Body>
                                <Card.Img variant="top" src={product.img} className="img-fluid rounded w-50" />
                                <Card.Title>Product: {product.name}</Card.Title>
                                <Card.Text><strong> || Price: $ {product.price} ||</strong></Card.Text>
                                <Card.Text><strong> Quantity: {product.quantity} ||</strong></Card.Text>
                                <Card.Text>{product.description}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} lg={6}>
                        <div className='border border-danger p-4 mx-auto'>
                            <h2>Please Order:</h2>
                            <Form onSubmit={handlePlaceOrder} className='border border-danger text-center mx-auto p-3 shadow-lg mb-5 bg-body rounded'>
                                <Form.Group className="mb-3" controlId="formBasicName">
                                    <Form.Control type="name" value={user?.displayName} readOnly disabled />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control type="email" value={user?.email} readOnly disabled />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicText">
                                    <Form.Control type="text" value={product.name} name="product" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicText">
                                    <Form.Control type="text" value={product.price} name="price" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicText">
                                    <Form.Control type="number" name={product.quantity} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicText">
                                    <Form.Control type="text" name="address" placeholder='address' />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicText">
                                    <Form.Control type="number" name="phone" placeholder='phone' />
                                </Form.Group>
                                <Button variant="danger" type="submit" className='mx-auto d-block'>
                                    Order Now
                                </Button>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Purchase;