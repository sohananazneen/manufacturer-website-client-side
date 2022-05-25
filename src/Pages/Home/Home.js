import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useProducts from '../../hooks/useProducts';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Product from './Product';
import Reviews from './Reviews';

const Home = () => {
    const [product, setProduct] = useProducts();
    return (
        <div>
            <Banner />
            <Container>
                <h2 className='text-center my-4'>Car Parts</h2>
                <Row xs={1} md={3} className="g-4">
                    {
                        product.slice(0, 3).map(product => <Product
                            key={product._id}
                            product={product}
                        ></Product>)
                    }
                </Row>
            </Container>
            <BusinessSummary />
            <Reviews />
        </div>
    );
};

export default Home;