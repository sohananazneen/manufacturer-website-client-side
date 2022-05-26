import { useEffect, useState } from "react";

const useProductDetails = id => {
    const [product, setProduct] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/product/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data));

    }, [id]);
    return [product, setProduct]
};

export default useProductDetails;