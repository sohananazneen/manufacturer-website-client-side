import React from 'react';
import { useParams } from 'react-router-dom';
import useProductDetails from '../../hooks/useProductDetails';

const Purchase = () => {
    const { Pid } = useParams();
    const [product, setProduct] = useProductDetails(Pid);
    return (
        <div>
            <h1>purchase products : {Pid}</h1>
            <h1>Name : {product.name}</h1>

        </div>
    );
};

export default Purchase;