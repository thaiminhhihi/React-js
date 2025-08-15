

// Bài tập 2: Quản lý danh sách tên

// Mục tiêu:

// - Dùng useState với mảng.- Thêm và xóa phần tử trong mảng.

// Mô tả:

// Tạo một ứng dụng nhỏ:

// - Có ô input để nhập tên.- Nút Thêm để thêm tên vào danh sách.
// - Nút Xóa để xóa tên đó.

import './App.css';
import React, { useState } from 'react';
import Childcomponent from './Childcomponent';
function App() {
  const [names, setNames] = useState (['thai minh']);
  const [age, setAge] = useState(18);
  const [names2, setNames2] = useState('');
  const [namelist, setNamelist] = useState([]);
  const addName = () => {
    if (names2.trim() === '') return; 
    setNamelist([...namelist, names2]);
    setNames2(''); 
  }
  const deleteName = (index) => {
    const newList = namelist.filter((_, i) => i !== index);
    setNamelist(newList);
  }

  
  return (
    <div className="App">
      <Childcomponent names={names} age={age} />
      <div id= "bai2">
      <h2> bai 2</h2>
      <input type ="text" value={names2} onChange={(e) => setNames2(e.target.value)} placeholder="Nhập tên" />
      <button onClick={addName}>Thêm tên</button>
      <ul>
        {namelist.map((name, index) => (
          <li key={index}>
            {name}
            <button onClick={() => deleteName(index)}>Xóa</button>
          </li>
        ))}
      </ul>          
        </div>
    </div>
  );
}

export default App;
