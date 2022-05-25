import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useProducts from '../../../hooks/useProducts';
import Product from './Product';

const Products = () => {
    const [product, setProduct] = useProducts();
    return (
        <Container>
            <h2 className='text-center my-4'>Car Parts</h2>
            <Row xs={1} md={3} className="g-4">
                {
                    product.map(product => <Product
                        key={product._id}
                        product={product}
                    ></Product>)
                }
            </Row>
        </Container>
    );
};

export default Products;