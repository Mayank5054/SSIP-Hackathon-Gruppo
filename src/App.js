import React, { useState, useEffect } from "react";
import Home from "./views/Home";
import { Routes, Route, useNavigate } from "react-router-dom";
import LoginPage from "./views/LoginPage";
import RegisterPage from "./views/RegisterPage";
import Meets from "./views/Meets";
import pathContext from "./context/path-context";
import MeetDetails from "./views/MeetDetails";
import CalendarPage from "./views/calendarPage";
import HistoryPage from "./views/HistoryPage";
import axios from "axios";

import CreateNewMeet from "./views/CreateNewMeet";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

function App() {
      var gapi=window.gapi;
      console.log(gapi);
  var CLIENT_ID="934057497734-2k0sp365v94u0u08ta8mv9b4qodkoal6.apps.googleusercontent.com";
  var API_KEY="AIzaSyBI57Lt2FHhIiXvRZunhEvuqZhmgZ0lHbk";
  const DISCOVERY_DOC = ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest',
                        'https://www.googleapis.com/discovery/v1/apis/gmail/v1/rest'];
  const SCOPES = 'https://www.googleapis.com/auth/calendar.events '+'https://www.googleapis.com/auth/calendar.readonly '+'https://mail.google.com/';

    const handleCal=()=>{
  gapi.load('client:auth2',()=>{
    
    gapi.client.init({
        apiKey:API_KEY,
        clientId:CLIENT_ID,
        discoveryDocs:DISCOVERY_DOC,
        scope:SCOPES,
        plugin_name:'Grouppo'
        });
        // gapi.client.load('calendar','v3',()=>{
        //   console.log("calendar loaded!");
        // })
       
// console.log(gapi.auth2.getAuthInstance().signOut())

    //    gapi.auth2.getAuthInstance().signIn().then((e)=>{
        var data_email=gapi.client.gmail.users.getProfile({
            'userId': 'me',
          })
            //   var email=gapi.client.gmail.users.messages.send({
            //     'userId': 'me',
            //     "resource":{
            //         // "id":"12025400",
            //         // "threadId":"111203200",
            //         // "snippet":"hrello .my friend",
            //         // "payload": 
            //         // {
            //         //     "headers": [
            //         //         // {"name":"to","value":"mayanksheladiya4448@gmail.com"},
            //         //         // {"name":"from","value":"mayanksheladiya49@gmail.com"},
            //         //         // {"name":"subject","value":"regarding hello world"}
            //         //         {"Content-Type":"message/rfc822"}
            //         //       ],
            //         //   },
            //           "raw":btoa(
            //             // "From:<mayanksheladiya49@gmail.com>\r\n" +
            //             "To: <mayanksheladiya4448@gmail.com>\r\n" +
            //             "Subject: this would be the subject\r\n" +
            //             "Content-type: text/html\r\n\r\n" +
            //             "<h3>BSDK ab kuch try nahi karunga BC  and this is the last message  to be tested </h3>"
            //           ).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')
                     
            //     }
            //   })
            //   console.log(atob("RnJvbTogSm9obiBEb2UgPGpkb2VAbWFjaGluZS5leGFtcGxlPiAKVG86IE1hcnkgU21pdGggPG1hcnlAZXhhbXBsZS5uZXQ+IApTdWJqZWN0OiBTYXlpbmcgSGVsbG8gCkRhdGU6IEZyaSwgMjEgTm92IDE5OTcgMDk6NTU6MDYgLTA2MDAgCk1lc3NhZ2UtSUQ6IDwxMjM0QGxvY2FsLm1hY2hpbmUuZXhhbXBsZT4KClRoaXMgaXMgYSBtZXNzYWdlIGp1c3QgdG8gc2F5IGhlbGxvLiBTbywgIkhlbGxvIi4="))
            //   console.log("email = ");
            //   console.log(email);
            //   email.execute((e)=>{console.log(e);})
              data_email.execute((e)=>{console.log(e);})
            // console.log("logged in");console.log(e);
            console.log("data_email =");
            console.log(data_email);
           
           
            var cal = gapi.client.calendar.calendarList.list()
            var list;
          
            cal.execute((e)=>{
                console.log(e);
                list=e.result.items[1].id;console.log(list);
                var cl01=gapi.client.calendar.events.quickAdd({
                    'calendarId':"primary",
                    "text":"hello, world again and again"
                })
                // cl01.execute((e)=>{console.log(e);})
            })
            
           
            console.log("cal =")
            console.log(cal);
            var patchh={
                'createRequest': {
                    'requestID': "randomString",
                }
            }
            var data={
                "summary":"hello world",
                "attendees":[{"email":"mayanksheladiya49@gmail.com"}/*,{"email":"mayanksheladiya4448@gmail.com"}*/],
               
                'conferenceData': {
                'createRequest':{
                    'requestId':"iammayanka",
                    "conferenceSolutionKey":{"type":"hangoutsMeet"}
                },
                
                },
                "start":{"dateTime":"2022-11-07T09:00:00-07:00"},
                "end":{"dateTime":"2022-11-07T17:00:00-07:00"},
                
            }
            var req=gapi.client.calendar.events.insert({
                "calendarId":"primary",
                "resource":data,
                "conferenceDataVersion":1,
            })
            
            req.execute((e)=>{
                console.log("request sent");console.log(e);var id=e.id;
                gapi.client.calendar.events.patch({
                    calendarId: "primary",
                    eventId: id,
                  }).execute((e)=>{console.log("patch = ");console.log(e);window.open(e.htmlLink)})
        
        })
        });
       
//   })
 
    }


    const [weatherData, setWeatherData] = useState(undefined);
    useEffect(() => {
        const key = process.env.REACT_APP_WEATHER_API;
        const getWeatherInfo = async (locationKey) => {
            console.log(locationKey, "location key");
            try {
                const res = await axios.get(
                    `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}?apikey=${key}`
                );
                setWeatherData(res.data);
            } catch (e) {
                console.log("Error in weather info function");
                console.log(e);
            }
        };
        const getLocationKey = async (lat, lng) => {
            console.log(lat, lng, "latitude and longitude");
            try {
                const res = await axios.get(
                    `http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${key}&q=${lat}%2C${lng}`
                );
                getWeatherInfo(res.data.Key);
            } catch (e) {
                console.log("Error in location key finder");
                console.log(e);
            }
        };
        const getLocation = () => {
            if (!navigator.geolocation) {
                console.log("Geolocation is not supported by your browser");
            } else {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        getLocationKey(
                            position.coords.latitude,
                            position.coords.longitude
                        );
                    },
                    (error) => {
                        console.log(error);
                        alert(
                            "Give Location Permision and reload the site to access weather information in calander."
                        );
                    }
                );
            }
        };
        getLocation();
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
                    <Route
                        path='/calendarpage'
                        element={<CalendarPage weatherData={weatherData} />}
                    />
                    <Route path='/historypage' element={<HistoryPage />} />
                </Routes>
            </pathContext.Provider>
            <button onClick={handleCal}>click to authorized calendar</button>
        </LocalizationProvider>
    );
}
export default App;
