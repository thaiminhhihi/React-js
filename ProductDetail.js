import { Link } from "react-router-dom";
function ProductDetail() {
    return (
        <div>
            <h1>Chi tiết sản phẩm</h1>
           <Link to="/ProductList">Danh sách sản phẩm</Link>
              <Link to="/AddProduct">Thêm sản phẩm</Link>
                <Link to="/Home">Trang chủ</Link>
        </div>
    );
}
export default ProductDetail;