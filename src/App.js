import React from "react";
import Home from "./views/Home";
import { Routes, Route, useNavigate } from "react-router-dom";
import LoginPage from './views/LoginPage';
import RegisterPage from "./views/RegisterPage";
import Meets from "./views/Meets";
import pathContext from "./context/path-context";


function App() {
  const navigate = useNavigate();
  const navigateToRegister = () => {

    navigate('/register');

  }
  const navigateToLogin = () => {
    navigate('/login');
  }
  const navigateToHome = () => {
 
    console.log("error");
    navigate('/home');
   
  }
  const navigateToMeets = () => {
    navigate('/meets');
  }
  return (
    <pathContext.Provider value={{
      navigateToRegister: navigateToRegister,
      navigateToLogin: navigateToLogin,
      navigateToHome: navigateToHome ,
      navigateToMeets: navigateToMeets
    }}>
      <Routes>
        <Route path="/register" element={<RegisterPage/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/home" element={localStorage.getItem("check_obj")==='true' && <Home/>}/>
        <Route path="/meets" element={localStorage.getItem("check_obj")==='true' && <Meets/>}/>
      </Routes>
    </pathContext.Provider> 
  );
}

export default App;
