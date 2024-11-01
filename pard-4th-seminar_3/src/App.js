// import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
// import Home from './pages/Home';
// import About from './pages/About';
// import Profile from './pages/Profile';
// import Article from './pages/Article';
// import Articles from './pages/Articles';
// import Layout from './Layout';
// import { useEffect, useState } from 'react';
// import MyPage from './pages/MyPage';
// import Login from './pages/Login';
import MyInfo from './pages/MyInfo';
import UpdateInfo from './pages/UpdateInfo';
import MyComponent from './pages/MyComponent';
import React from 'react';

function App() {

  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // const navigate = useNavigate();
  // useEffect(() => {
  //   if (!isLoggedIn) {
  //     alert("로그인이 필요합니다.");
  //     navigate("/login");
  //   }
  // }, []);

  return (
    <Routes>
      <Route path='/' element={<MyComponent />} />
      {/* <Route path='/' element={<MyInfo />} />
      <Route path='/update' element={<UpdateInfo />} /> */}
      {/* <Route element={<Layout/>}>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/profiles/:username' element={<Profile />}/>
        <Route path='/articles' element={<Articles />}>
          <Route path=':id' element={<Article />}/>
        </Route>
        <Route
        path='/mypage'
        element={<MyPage isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} navigate={navigate} />}
        />
      </Route>
      <Route
        path='/login'
        element={<Login setIsLoggedIn={setIsLoggedIn} navigate={navigate} />}
      /> */}
    </Routes>
  );
}

export default App;
