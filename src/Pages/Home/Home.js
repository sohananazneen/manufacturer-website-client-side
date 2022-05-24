import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useProducts from '../../hooks/useProducts';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Products from './Products';
import Reviews from './Reviews';

const Home = () => {
    const [product, setProduct] = useProducts();
    return (
        <div>
            <Banner />
            <Container>
                <Row xs={1} md={3} className="g-4">
                    {
                        product.slice(0, 6).map(product => <Products
                            key={product._id}
                            product={product}
                        ></Products>)
                    }
                </Row>
            </Container>
            <BusinessSummary />
            <Reviews />
        </div>
    );
};

export default Home;