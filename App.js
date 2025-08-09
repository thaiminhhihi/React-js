// Bài tập:
// Tạo một ứng dụng nhỏ gồm 2 thành phần chính:
// Component cha: quản lý state count và thông tin userName.
// Component con: nhận count và userName qua props, và hiển thị dữ liệu đó ra màn hình.
import React, { useState } from 'react';
import './App.css';

import Childecomponent from './Childecomponent';

function Dadcomponent() {
  const [count, setCount] = useState(0);
  const [userName, setUserName] = useState("Thai Minh");
  return (
    <div className="App">
      <button onClick={() => setCount(count + 1)}></button>

    <Childecomponent count={count} userName={userName} />
    </div>
  );
}

export default Dadcomponent;
