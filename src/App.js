import './App.css';
import {
  HashRouter,
  NavLink,
  Routes,
  Route
} from 'react-router-dom';



// 題目 :
// 請撰寫 Routes, Route 的部分，
// 建立 register（註冊）, login（登入）, todo（待辦事項） 三個頁面路由，
// 讓上方的 Nav 選單可切換到各頁面。

const Todo = () => {
  return <p>這是 Todo 頁面 
  </p>;
};
const Login = () => {
  return <p>這是登入頁面</p>;
};
const Register = () => {
  return <p>這是註冊頁面</p>;
};

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
