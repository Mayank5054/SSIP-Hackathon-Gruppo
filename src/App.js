import React from "react";
import Home from "./views/Home";
import { Routes, Route, useNavigate } from "react-router-dom";
import LoginPage from "./views/LoginPage";
import RegisterPage from "./views/RegisterPage";
import Meets from "./views/Meets";
import pathContext from "./context/path-context";
import MeetDetails from "./views/MeetDetails";
import History from "./views/History";

function App() {
  const navigate = useNavigate();
  const navigateToRegister = () => {
    navigate("/register");
  };
  const navigateToLogin = () => {
    navigate("/login");
  };
  const navigateToHome = () => {
    navigate("/");
  };
  const navigateToMeets = () => {
    navigate("/meets");
  };
  const navigateToMeetsDetail = (id) => {
    console.log("id: ", id, typeof id, "from navigate");
    navigate(`/meetdetails/:${id}`);
  };
  const navigateToHistory = () => {
    navigate("/history");
  };
  return (
    <pathContext.Provider
      value={{
        navigateToRegister: navigateToRegister,
        navigateToLogin: navigateToLogin,
        navigateToHome: navigateToHome,
        navigateToMeets: navigateToMeets,
        navigateToMeetsDetail: navigateToMeetsDetail,
        navigateToHistory: navigateToHistory,
      }}
    >
      <Routes>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<Home />} />
        <Route path="/meets" element={<Meets />} />
        <Route path="/meetdetails/:meetid" element={<MeetDetails />} />
        <Route path="/history" element={<History />} />
        {/* <Route path="/meetdetails/:meetid" element={<MeetDetails />} /> */}
      </Routes>
    </pathContext.Provider>
  );
}

export default App;
