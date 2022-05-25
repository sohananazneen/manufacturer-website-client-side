import { useEffect, useState } from "react";

const useProductDetails = id => {
    const [products, setProducts] = useState({});

    useEffect(() => {
        const url = `Products.json/products/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data));

    }, [id]);
    return [products, setProducts]
};

export default useProductDetails;