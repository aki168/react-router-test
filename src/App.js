import './App.css';
import {
  HashRouter,
  NavLink,
  Routes,
  Route,
  useNavigate
} from 'react-router-dom';
import * as antd from 'antd';
import { useState } from 'react';




// 題目 :
// 請撰寫 Routes, Route 的部分，
// 建立 register（註冊）, login（登入）, todo（待辦事項） 三個頁面路由，
// 讓上方的 Nav 選單可切換到各頁面。

const Todo = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({name:"王小明", id:'ming'}) 
  const logout = () => { 
    navigate('/login',{replace:true,state:user})
  }

  return (
    <div className="container">
      <antd.Button onClick={logout}>登出</antd.Button>
    </div>
  )
};
const Login = () => {
  return <p>這是登入頁面</p>;
};
const Register = () => {
  return <p>這是註冊頁面</p>;
};

//在 Todo 元件中加入 Logout 元件
//Logout 元件有一顆登出按鈕，點選登出後，使用 navigate 導回 /login 畫面。

function App() {



  return (
    <div className="container">
      <HashRouter>
        <div className="nav-link">
          <NavLink to="/">
            <p>回到首頁</p>
          </NavLink>
          <NavLink to="/register">
            <p>註冊頁面</p>
          </NavLink>
          <NavLink to="/login">
            <p>登入頁面</p>
          </NavLink>
          <NavLink to="/todo">
            <p>Todo 頁面</p>
          </NavLink>
        </div>

        {/* Routes, Route 練習區 */}

 
          <Routes>
            <Route path="/register"  element={<Register/>} />
            <Route path="/login"  element={<Login />} />
            <Route path="/todo" element={<Todo/>} />
          </Routes>

        {/* 練習區 */}
      </HashRouter>
    </div>
  );
}

export default App;
