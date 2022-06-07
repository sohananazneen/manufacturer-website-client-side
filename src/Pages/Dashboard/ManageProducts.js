import React from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import useProducts from '../../hooks/useProducts';

const ManageProducts = () => {

    const [user] = useAuthState(auth);
    const [products, setProducts] = useProducts();

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `https://still-temple-50521.herokuapp.com/product/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    const remaining = products.filter(product => product._id !== id);
                    setProducts(remaining);
                })
            toast('product Deleted');
        }
    }
    return (
        <Container className='my-5'>
            <h2 className='text-center my-4'>Manage Products</h2>
            <Row xs={1} md={3} className="g-4">
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product, index) =>
                                <tr>
                                    <th scope="row">{index + 1}</th>
                                    <td>{user.email}</td>
                                    <td>{product.name}</td>
                                    <td>{product.price}</td>
                                    <td>{product.quantity}</td>
                                    <Button className='btn btn-danger text-dark mx-2' onClick={() => handleDelete(product._id)}>Delete</Button>
                                </tr>)
                        }
                    </tbody>
                </table>
            </Row>
        </Container>
    );
};

export default ManageProducts;