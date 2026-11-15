import axios from 'axios';
import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const MyProfile = () => {

    const [user] = useAuthState(auth);

    const handleProfile = event => {
        event.preventDefault();
        const user = {
            email: user.email,
            user: user.name,
            education: event.target.address.value,
            location: event.target.address.value,
            LinkedIn: event.target.address.value,
            phone: event.target.phone.value
        }

        axios.post('https://still-temple-50521.herokuapp.com/user', user)
            .then(response => {
                const { data } = response;
                if (data.insertedId) {
                    toast('Your Profile Updated');
                    event.target.reset();
                }
            })
    }
    return (
        <Container>
            <Row>
                <Col>
                    <div className='p-4 mx-auto'>
                        <h2 className='text-center'>My profile</h2>
                        <Form onSubmit={handleProfile} className='w-50 border border-danger text-center mx-auto p-3 shadow-lg mb-5 bg-body rounded'>
                            <Form.Group className="mb-3" controlId="formBasicName">
                                <Form.Control type="name" value={user?.displayName} readOnly disabled />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="email" value={user?.email} readOnly disabled />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicText">
                                <Form.Control type="text" name="education" placeholder='Education' />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicText">
                                <Form.Control type="text" name="location" placeholder='Location' />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicText">
                                <Form.Control type="text" name="LinkedIn" placeholder='LinkedIn Profile Link' />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicText">
                                <Form.Control type="number" name="phone" placeholder='Phone Number' />
                            </Form.Group>
                            <Button variant="danger" type="submit" className='mx-auto d-block'>
                                Update
                            </Button>
                        </Form>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default MyProfile;