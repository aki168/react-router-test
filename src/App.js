import './App.css';
import {
  HashRouter,
  NavLink,
  Routes,
  Route,
  useNavigate,
  useParams,
  Outlet
} from 'react-router-dom';
import * as antd from 'antd';
import { useState } from 'react';




// 0817
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
const User = () => {
  return (
    <div>
      <h2>使用者詳細資料</h2>
      <Outlet/>
    </div>
  )
};

const PostIdPage = () => {
  let params = useParams();
  return (
  <>
    <p>您的 POST ID 是 {params.postId}</p>
  </>
  );
};


// 0818
// 在 Todo 元件中加入 Logout 元件
// Logout 元件有一顆登出按鈕，點選登出後，使用 navigate 導回 /login 畫面。



function App() {

  const [user, setUser] = useState({name:"王小明", id:'ming', tel:'0988-555-666'}) 
  
  // 0819
  // 在 App.js 設定路由一個 Post 的巢狀路由，有父層 /post 路由以及子動態路由 /:postId
  // 定義 Post 和 PostId 兩個元件，分別會看到 Post 詳細資料頁面、點入 /:postId 路由會顯示 Post ID 是 xxxx。
  // 加上 NavLink，讓使用者可以直接點擊查看這些頁面。

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
          <NavLink to={`/user/${user.id}`}>
            <p>我的資料</p>
          </NavLink>
        </div>

          <Routes>
            <Route path="/register"  element={<Register/>} />
            <Route path="/login"  element={<Login />} />
            <Route path="/todo" element={<Todo/>} />
            <Route path="/user" element={<User/>}>
              <Route path=":postId" element={<PostIdPage/>} />
            </Route>
          </Routes>

      </HashRouter>
    </div>
  );
}

export default App;
