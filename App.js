// - Bài tập: Tạo cấu trúc route

// Tạo 4 file:
// Home.jsx
// ProductList.jsx
// ProductDetail.jsx
// AddProduct.jsx
// Chuyển trang qua lại và truyền đúng tham số đầu vào

import './App.css';
import { Link, Routes, Route } from 'react-router-dom';
import Home from './Home';
import ProductList from './ProductList';
import AddProduct from './AddProduct';
import ProductDetail from './ProductDetail';

function App() {
  return (
    <div className="App">
      <h1>Ứng dụng quản lý sản phẩm</h1>
      <Link to="/Home">Trang chủ</Link>
      <Link to="/ProductList">Danh sách sản phẩm</Link>
      <Link to="/AddProduct">Thêm sản phẩm</Link>
      <Link to="/ProductDetail">Chi tiết sản phẩm</Link>
   
      <Routes>
      
  <Route path="/Home" element={<Home />} />
        <Route path="/Productlist" element={<ProductList />} />
        <Route path="/Addproduct" element={<AddProduct />} />
        <Route path="/Productdetail/:id" element={<ProductDetail />} />
      </Routes>
  
    </div>  
    


  );
}

export default App;
