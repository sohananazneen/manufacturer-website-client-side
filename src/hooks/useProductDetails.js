import { useEffect, useState } from "react";

const useProductDetails = id => {
    const [product, setProduct] = useState({});
    useEffect(() => {
        const url = `https://still-temple-50521.herokuapp.com/product/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [id]);
    return [product, setProduct]
};

export default useProductDetails;