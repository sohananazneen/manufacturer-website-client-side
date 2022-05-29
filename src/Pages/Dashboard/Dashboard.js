import React, { useState } from 'react';
import { Button, Col, Container, ListGroup, Offcanvas, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import useAdmin from '../../hooks/useAdmin';
import CustomLink from '../Shared/CustomLink';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);

    // offcanvas
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const menuItems = <>
        <ListGroup>
            <ListGroup.Item action>
                <CustomLink className='text-danger' to="/dashboard">My Profile </CustomLink>
            </ListGroup.Item>
            {
                !admin && <>
                    <ListGroup.Item action>
                        <CustomLink className='text-danger' to="/dashboard/addReview">Add Review</CustomLink>
                    </ListGroup.Item>
                    <ListGroup.Item action>
                        <CustomLink className='text-danger' to="/dashboard/myOrders">My Orders </CustomLink>
                    </ListGroup.Item>
                </>

            }

            {admin && <>
                <ListGroup.Item action>
                    <CustomLink className='text-danger' to="/dashboard/manageOrders">Manage All Orders</CustomLink>
                </ListGroup.Item>
                <ListGroup.Item action>
                    <CustomLink className='text-danger' to="/dashboard/addProduct">Add A Product</CustomLink>
                </ListGroup.Item>
                <ListGroup.Item action>
                    <CustomLink className='text-danger' to="/dashboard/users">Make Admin</CustomLink>
                </ListGroup.Item>
                <ListGroup.Item action>
                    <CustomLink className='text-danger' to="/dashboard/manageProducts">Manage Products</CustomLink>
                </ListGroup.Item>

            </>
            }
        </ListGroup>
    </>

    return (
        <div className='mt-4'>
            <Container>
                <Row>
                    <Col xs={12} lg={3}>
                        {/* Offcanvas */}
                        <div className='d-lg-none' >
                            <Button variant="danger" onClick={handleShow}>
                                Dashboard Menu
                            </Button>
                            <Offcanvas show={show} onHide={handleClose}>
                                <Offcanvas.Header closeButton>
                                    <Offcanvas.Title>Dashboard Menu</Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body className='bg-dark'>
                                    {menuItems}
                                </Offcanvas.Body>
                            </Offcanvas>
                        </div>
                        <div className='d-none d-lg-block' >
                            {menuItems}

                        </div>
                    </Col>
                    <Col xs={12} lg={9}>
                        <h2 className='text-center fw-bold text-danger'>Welcome to your Dashboard</h2>
                        <Outlet></Outlet>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Dashboard; <h2>Dashboard</h2>