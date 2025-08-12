import { Link } from "react-router-dom";
function ProductList() {
    return (
        <div>
            <h1>Danh sách sản phẩm</h1>
            <Link to="/ProductDetail">Chi tiết sản phẩm</Link>
            <Link to="/AddProduct">Thêm sản phẩm</Link>
            <Link to="/Home">Trang chủ</Link>
        </div>
    );
}
export default ProductList;