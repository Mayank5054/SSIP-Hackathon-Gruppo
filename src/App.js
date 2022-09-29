import React from "react";
import Home from "./views/Home";
import { Routes, Route, useNavigate } from "react-router-dom";
import LoginPage from './views/LoginPage';
import RegisterPage from "./views/RegisterPage";


function App() {
  const navigate = useNavigate();
  const navigateToRegister = () => {
    navigate('/register');
  }
  const navigateToLogin = () => {
    navigate('/login');
  }
  const navigateToHome = () => {
    navigate('/home');
  }
  return (
    <>
      <Routes>
        <Route path="/register" element={<RegisterPage goToLogin={navigateToLogin} goToHome={navigateToHome}/>} />
        <Route path="/login" element={<LoginPage goToRegister={navigateToRegister} goToHome={navigateToHome}/>} />
        <Route path="/home" element={<Home/>}/>
      </Routes>
    </>
  );
}

export default App;
