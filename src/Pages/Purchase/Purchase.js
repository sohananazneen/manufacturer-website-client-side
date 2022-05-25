import React from 'react';
import { useParams } from 'react-router-dom';
import useProductDetails from '../../hooks/useProductDetails';

const Purchase = () => {
    const { id } = useParams();
    const [products, setProducts] = useProductDetails(id);
    return (
        <div>
            <h1>purchase products{products.name}</h1>
        </div>
    );
};

export default Purchase;