import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Button from "@mui/material/Button";

function ProductDetail() {
    const [products, setProducts] = useState(null);
    const {id }= useParams();
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then((response) => response.json())
            .then((data) => setProducts(data));
    }, [id]);

    if (!products) return <p>Đang tải...</p>;
  return (
    <div>
        <div> <h2>{products.title}</h2> <img src={products.image} alt={products.title} style={{ width: "200px" }} /> <p>Giá: ${products.price}</p> <p>{products.description}</p> <p>Loại: {products.category}</p> <Button variant="outlined" component={Link} to="/"> Quay lại </Button> </div>
    </div>
  );
}
export default ProductDetail;