// Trang Login

// Form đăng nhập với email và password. (fake: email: user@gmail.com, password: password123)
// Nếu đăng nhập thành công thì lưu thông tin user (có thể lưu vào localStorage hoặc context).
// Sau khi login, chuyển hướng về trang Home.
import TextField from '@mui/material/TextField';
import React, { useState } from 'react';  
function Login() {
    const [propsemail, setemail] = useState("");
    const [propspassword, setpassword] = useState("");

    function handleLogin(event) {

  event.preventDefault();

  if (propsemail === "user@gmail.com" && propspassword === "password123") {
    localStorage.setItem("user", JSON.stringify({ email: propsemail }));
    window.location.href = "/";
  } else {
    alert("Đăng nhập thất bại");
  }
}
return (
    <div>
     <h2>Login</h2>
     <form>
       <TextField type="email" name="email" placeholder="Email" required onChange={(e) => setemail(e.target.value)} />
       <TextField type="password" name="password" placeholder="Password" required onChange={(e) => setpassword(e.target.value)} />
       <button type="submit" onClick={handleLogin}>Login</button>
     </form>
    </div>
)

}
export default Login;