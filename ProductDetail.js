import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Button from "@mui/material/Button";
import axios from 'axios';
function ProductDetail() {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(false);

    const {id }= useParams();


    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product data:", error);
      } finally {
        setLoading(false);
      }
    };

    useEffect(() => {
      fetchData();
    }, []);


    const AddToCart= (ProductId) => {
   
   const cart = JSON.parse(localStorage.getItem("cart")) || [];
   
 
   if (cart.includes(ProductId)) {
    alert("Sản phẩm đã tồn tại, không thể thêm vào giỏ hàng");
   } else {
     cart.push(ProductId);
     localStorage.setItem("cart", JSON.stringify(cart));
     alert('Đã thêm sản phẩm vào giỏ hàng');
   }
  };

  if(loading) return <h2>Loading ...</h2>
    
  return (
    <div>
        <div>
           <h2>{product?.title}</h2> <img src={product?.image} alt={product?.title} style={{ width: "200px" }} /> <p>Giá: ${product?.price}</p> <p>{product?.description}</p> <p>Loại: {product?.category}</p> <Button variant="outlined" component={Link} to="/"> Quay lại </Button> <Button onClick={() => AddToCart(product?.id)}>
              Thêm vào giỏ
            </Button> </div>
    </div>
  );
}
export default ProductDetail;