import { Link } from "react-router-dom";
function AddProduct() {
    return (
        <div>
            <h1>Thêm sản phẩm</h1>
            <Link to="/ProductList">Danh sách sản phẩm</Link>
            <Link to="/ProductDetail">Chi tiết sản phẩm</Link>
            <Link to="/Home">Trang chủ</Link>
        </div>
    );
}
export default AddProduct;