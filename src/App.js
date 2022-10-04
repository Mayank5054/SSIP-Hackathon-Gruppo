import React from "react";
import Home from "./views/Home";
import { Routes, Route, useNavigate } from "react-router-dom";
import LoginPage from "./views/LoginPage";
import RegisterPage from "./views/RegisterPage";
import Meets from "./views/Meets";
import pathContext from "./context/path-context";
import MeetDetails from "./views/MeetDetails";
import CalendarPage from "./views/calendarPage";

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
        navigate(`/meetdetails/:${id}`);
    };
    const navigateToCalendar = () => {
        navigate("/calendarpage");
    };
    return (
        <pathContext.Provider
            value={{
                navigateToRegister: navigateToRegister,
                navigateToLogin: navigateToLogin,
                navigateToHome: navigateToHome,
                navigateToMeets: navigateToMeets,
                navigateToMeetsDetail: navigateToMeetsDetail,
                navigateToCalendar: navigateToCalendar,
            }}>
            <Routes>
                <Route path='/register' element={<RegisterPage />} />
                <Route path='/login' element={<LoginPage />} />
                <Route path='/' element={<Home />} />
                <Route path='/meets' element={<Meets />} />
                <Route path='/meetdetails/:meetid' element={<MeetDetails />} />
                <Route path='/calendarpage' element={<CalendarPage />} />
            </Routes>
        </pathContext.Provider>
    );
}

export default App;
