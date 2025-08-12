import { Link } from "react-router-dom";    
 function Home(){
    return (
        <div>
            <h1>Trang chủ</h1>
            <Link to ="/ProductList">Danh sách sản phẩm</Link>
            <Link to="/AddProduct">Thêm sản phẩm</Link>
            <Link to="/ProductDetail">Chi tiết sản phẩm </Link>
        </div>);


 }
 export default Home;