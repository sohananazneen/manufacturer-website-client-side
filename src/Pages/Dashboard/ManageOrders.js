import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axiosPrivate from '../../api/axiosPrivate';
import auth from '../../firebase.init';

const ManageOrders = () => {
    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        fetch('http://localhost:5000/allorders')
            .then(res => res.json())
            .then(data => setOrders(data));

    }, [])

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `http://localhost:5000/order/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    const remaining = orders.filter(order => order._id !== id);
                    setOrders(remaining);
                })
            toast('order Deleted');
        }
    }
    return (
        <Container>
            <h2 className='text-center mt-4'> Orders: {orders.length}</h2>
            <Row className="d-flex justify-content-center mt-4">
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Email</th>
                            <th scope="col">Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Quantity</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) =>
                                <tr>
                                    <th scope="row">{index + 1}</th>
                                    <td>{user.email}</td>
                                    <td>{order.product}</td>
                                    <td>{order.price}</td>
                                    <td>{order.quantity}</td>
                                    <Button className='btn btn-danger text-dark mx-2' onClick={() => handleDelete(order._id)}>Delete</Button>
                                </tr>)
                        }
                    </tbody>
                </table>
            </Row>
        </Container>
    );
};

export default ManageOrders;