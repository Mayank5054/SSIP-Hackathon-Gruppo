import React from "react";
import Home from "./views/Home";
import { Routes, Route, useNavigate } from "react-router-dom";
import LoginPage from "./views/LoginPage";
import RegisterPage from "./views/RegisterPage";
import Meets from "./views/Meets";
import pathContext from "./context/path-context";
import MeetDetails from "./views/MeetDetails";
import CreateNewMeet from "./views/CreateNewMeet";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import {AdapterDateFns} from "@mui/x-date-pickers/AdapterDateFns";


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
    const navigateToCreateNewMeet = () => {
        navigate("/createnewmeet");
    };
    const navigateToMeetsDetail = (id) => {
        console.log("id: ", id, typeof id, "from navigate");
        navigate(`/meetdetails/:${id}`);
    };
    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <pathContext.Provider
            value={{
                navigateToRegister: navigateToRegister,
                navigateToLogin: navigateToLogin,
                navigateToHome: navigateToHome,
                navigateToMeets: navigateToMeets,
                navigateToMeetsDetail: navigateToMeetsDetail,
                navigateToCreateNewMeet: navigateToCreateNewMeet,
            }}>
            <Routes>
                <Route path='/register' element={<RegisterPage />} />
                <Route path='/login' element={<LoginPage />} />
                <Route path='/' element={<Home />} />
                <Route path='/meets' element={<Meets />} />
                <Route path='/meetdetails/:meetid' element={<MeetDetails />} />
                <Route path='/createnewmeet' element={<CreateNewMeet />} />
            </Routes>
        </pathContext.Provider>
        </LocalizationProvider>
        
    );
}

export default App;
