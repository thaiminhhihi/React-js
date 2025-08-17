import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
function ProductList() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div>
      <ul>
        {products.map((products) => (
          <li key={products.id}>
            <br />
            <img
              src={products.image}
              alt={products.title}
              style={{ width: "100px" }}
            />
            <br />
            {products.title}
            <br />
            Giá: ${products.price}
            <br />
            <Button
              variant="contained"
              component={Link}
              to={`/products/${products.id}`}
            >
              Xem chi tiết
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default ProductList;
