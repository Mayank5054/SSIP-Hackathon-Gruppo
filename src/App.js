import React, { useEffect } from "react";
import Home from "./views/Home";
import { Routes, Route, useNavigate } from "react-router-dom";
import LoginPage from "./views/LoginPage";
import RegisterPage from "./views/RegisterPage";
import Meets from "./views/Meets";
import pathContext from "./context/path-context";
import MeetDetails from "./views/MeetDetails";
import CalendarPage from "./views/calendarPage";
import axios from "axios";

import CreateNewMeet from "./views/CreateNewMeet";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import {AdapterDateFns} from "@mui/x-date-pickers/AdapterDateFns";


function App() {
    useEffect(() => {
        var key = process.env.REACT_APP_API_KEY;
        console.log(key);
        axios
            .get(
                "http://dataservice.accuweather.com/locations/v1/cities/search?apikey=" +
                    key +
                    "&q=Surat"
            )
            .then((e) => {
                console.log(e);
            });
    }, []);
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
        navigate(`/meetdetails/:${id}`);
    };
    const navigateToCalendar = () => {
        navigate("/calendarpage");
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
<<<<<<< HEAD
                navigateToCreateNewMeet: navigateToCreateNewMeet,
=======
                navigateToCalendar: navigateToCalendar,
>>>>>>> 030cab6a55ff2bdf69c6b686baf4be1101af8648
            }}>
            <Routes>
                <Route path='/register' element={<RegisterPage />} />
                <Route path='/login' element={<LoginPage />} />
                <Route path='/' element={<Home />} />
                <Route path='/meets' element={<Meets />} />
                <Route path='/meetdetails/:meetid' element={<MeetDetails />} />
<<<<<<< HEAD
                <Route path='/createnewmeet' element={<CreateNewMeet />} />
=======
                <Route path='/calendarpage' element={<CalendarPage />} />
>>>>>>> 030cab6a55ff2bdf69c6b686baf4be1101af8648
            </Routes>
        </pathContext.Provider>
        </LocalizationProvider>
        
    );
}

export default App;
