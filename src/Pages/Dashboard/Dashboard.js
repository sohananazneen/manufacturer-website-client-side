import React, { useState } from 'react';
import { Button, ListGroup, Offcanvas } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';
import CustomLink from '../Shared/CustomLink';

const Dashboard = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="danger" onClick={handleShow}>
                Dashboard Menu
            </Button>
            <h2 className='fw-bold text-danger'>Welcome to your Dashboard</h2>
            <Outlet></Outlet>

            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Dashboard Menu</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className='bg-dark'>
                    <ListGroup>
                        <ListGroup.Item action>
                            <CustomLink className='text-danger' to="/dashboard">My Orders</CustomLink>
                        </ListGroup.Item>
                        <ListGroup.Item action>
                            <CustomLink className='text-danger' to="/dashboard/addReview">Add Review</CustomLink>
                        </ListGroup.Item>
                        <ListGroup.Item action>
                            <CustomLink className='text-danger' to="/dashboard/profile">My Profile</CustomLink>
                        </ListGroup.Item>
                    </ListGroup>,
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
};

export default Dashboard; <h2>Dashboard</h2>