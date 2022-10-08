import React, { useEffect, useState, useCallback } from "react";
import Home from "./views/Home";
import { Routes, Route, useNavigate } from "react-router-dom";
import LoginPage from "./views/LoginPage";
import RegisterPage from "./views/RegisterPage";
import Meets from "./views/Meets";
import pathContext from "./context/path-context";
import MeetDetails from "./views/MeetDetails";
import CalendarPage from "./views/calendarPage";
import HistoryPage from "./views/HistoryPage";
// import axios from "axios";

import CreateNewMeet from "./views/CreateNewMeet";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

function App() {
    // const WEATHER_API_KEY = "Tb4Gz2pnEFTA3ga7CjYi8nCTWdHWAE60";

    // const gapi = window.gapi;
    // console.log(gapi);
    // const CLIENT_ID =
    //     "934057497734-2k0sp365v94u0u08ta8mv9b4qodkoal6.apps.googleusercontent.com";
    // const API_KEY = "AIzaSyBI57Lt2FHhIiXvRZunhEvuqZhmgZ0lHbk";
    // const DISCOVERY_DOC =
    //     "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest";
    // const SCOPES = "https://www.googleapis.com/auth/calendar.events";
    // const handleCal = () => {
    //     gapi.load("client:auth2", () => {
    //         console.log("client loaded");
    //         gapi.client.init({
    //             apiKey: API_KEY,
    //             clientId: CLIENT_ID,
    //             discoveryDocs: DISCOVERY_DOC,
    //             scope: SCOPES,
    //             plugin_name: "Grouppo",
    //         });
    //         gapi.client.load("calendar", "v3", () => {
    //             console.log("bam!");
    //         });
    //         gapi.auth2
    //             .getAuthInstance()
    //             .signIn()
    //             .then((e) => {
    //                 console.log("logged in");
    //                 console.log(e);
    //                 const data = {
    //                     summary: "hello world",
    //                     start: { date: "2022-10-07" },
    //                     end: { date: "2022-10-11" },
    //                 };
    //                 const req = gapi.client.calendar.events.insert({
    //                     calendarId: "primary",
    //                     resource: data,
    //                 });
    //                 req.execute((e) => {
    //                     console.log("request sent");
    //                     console.log(e);
    //                 });
    //             });
    //     });
    // };

    const [lat, setLat] = useState(null);
    const [lng, setLng] = useState(null);
    const [status, setStatus] = useState(null);

    const getLocation = useCallback(() => {
        if (!navigator.geolocation) {
            setStatus("Geolocation is not supported by your browser");
        } else {
            setStatus("Locating...");
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    console.log(
                        position.coords.latitude,
                        position.coords.longitude,
                        "from response directly"
                    );
                    setStatus(null);
                    setLat(position.coords.latitude);
                    setLng(position.coords.longitude);
                },
                () => {
                    setStatus("Unable to retrieve your location");
                }
            );
        }
    }, []);
    useEffect(() => {
        const timeout = setTimeout(() => {
            getLocation();
            console.log(lat, lng, status, "from state variable");
        }, 5000);

        return () => {
            clearTimeout(timeout);
        };

        // const key = WEATHER_API_KEY;
        // axios
        //     .get(
        //         `http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${key}&q=${position.latitude}%2C${position.longitude}`
        //     )
        //     .then((e) => {
        //         console.log(e);
        //     })
        //     .catch((e) => {
        //         console.log(e);
        //     });
    }, [getLocation]);

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
        console.log("inside new meet nevigator");
        navigate("/createnewmeet");
    };
    const navigateToMeetsDetail = (id) => {
        navigate(`/meetdetails/:${id}`);
    };
    const navigateToCalendar = () => {
        navigate("/calendarpage");
    };
    const navigateToHistory = () => {
        navigate("/historypage");
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
                    navigateToCalendar: navigateToCalendar,
                    navigateToHistory: navigateToHistory,
                }}>
                <Routes>
                    <Route path='/register' element={<RegisterPage />} />
                    <Route path='/login' element={<LoginPage />} />
                    <Route path='/' element={<Home />} />
                    <Route path='/meets' element={<Meets />} />
                    <Route
                        path='/meetdetails/ :meetid'
                        element={<MeetDetails />}
                    />
                    <Route path='/createnewmeet' element={<CreateNewMeet />} />
                    <Route path='/calendarpage' element={<CalendarPage />} />
                    <Route path='/historypage' element={<HistoryPage />} />
                </Routes>
            </pathContext.Provider>
            {/* <button onClick={handleCal}>click to authorized calendar</button> */}
        </LocalizationProvider>
    );
}
export default App;
