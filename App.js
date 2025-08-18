import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductList from './ProductList';
import ProductDetail from './ProductDetail';
import Login from './Login';


// Viết một trang web gồm trang hiển thị danh sách sản phẩm và trang chi tiết sản phẩm sử dụng thư viện MUI:
// - Trang danh sách sản phẩm
// - Trang chi tiết sản phẩm

// Công nghệ sử dụng: React Router, MUI, Fake API: https://fakestoreapi.com/docs#tag/Products
function App() {
  const [products, setProducts] = useState([]);
  useEffect(()=> {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      
  },[]) ;


  return (
   
     
      <Routes>
        <Route path="/" element={<ProductList products={products} />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    
   
  );
}

export default App;
