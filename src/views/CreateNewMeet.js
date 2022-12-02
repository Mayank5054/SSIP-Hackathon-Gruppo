import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import Heading from "../components/Heading";
import InputBox from "../components/InputBox";
import People from "../components/People";
import PeopleData from "../data/peopleData.json";
import DatePickerBox from "../components/DatePickerBox";
import TimePickerBox from "../components/TimePickerBox";
import LibraryAddOutlinedIcon from "@mui/icons-material/LibraryAddOutlined";
import PeoplePopup from "./../components/PeoplePopup";
import MultiSelectDropdown from "../components/MultiSelectDropdown";
import axios from "axios";
function CreateNewMeet() {
    //in DB extract date as time.toLocaleDateString() (because while selecting date it will select current time by default)
    //in DB extract time as time.toLocaleTimeString() (because while selecting time it will select current date by default)
    const [formData, setFormData] = useState({
        title: "",
        venue: "",
        date: new Date().toISOString(),
        time: new Date().toISOString(),
    });

    //handleChange function for formData
    function handleChange(event) {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    }

    //handle change function for date and time
    function setDateFun(e) {
        setFormData((prevFormData) => ({
            ...prevFormData,
            date: e.toISOString(),
        }));
        
    }
    function setTimeFun(e) {
        setFormData((prevFormData) => ({
            ...prevFormData,
            time: e.toISOString(),
        }));
        
    }

    // const [dept, setDept] = useState([]);

    //handle change function for dept
    // const handleDeptFunc = (event) => {
    //     const {
    //         target: { value },
    //     } = event;
    //     setDept(
    //         // On autofill we get a stringified value.
    //         typeof value === "string" ? value.split(",") : value
    //     );
    // };

    //isOpen for popup menu state
    const [isOpen, setIsOpen] = useState(false);
    const [mode, setMode] = useState("offline");
    // const [PeopleDataByDept, setPeopleDataByDept] = useState(
    //     filterPeopleData()
    // );
    //function to filter people (select people by selected department name)
    // function filterPeopleData() {
    //     return PeopleData.filter((people) => dept.includes(people.department));
    // }

    //for selecte or unselecte people
    const [toggleSelect, setToggleSelect] = useState(newToggleSelectData());
    //addind isSelecte for every object of people filtered by department name
    function newToggleSelectData() {
        const data = [];

        PeopleData.map((people) => {
            data.push({
                ...people,
                isSelecte: false,
            });
            return null;
        });
        return data;
    }

    //handle change function for toggleSelect
    function handleToggle(id) {
        setToggleSelect(
            toggleSelect.map((data) => {
                return data.id === id
                    ? { ...data, isSelecte: !data.isSelecte }
                    : data;
            })
        );

        console.log("Toggle button clicked");
    }

    //when dept arr change
    // useEffect(() => {
    //     setPeopleDataByDept(filterPeopleData());
    // }, [dept]);

    //when PeopleDataByDept arr change
    // useEffect(() => {
    //     setToggleSelect(newToggleSelectData());
    // }, [PeopleDataByDept]);

    //handle submit function (final submit function)
    //integrate Backend in this function
    const [finalFormObject, setFinalFormObject] = useState({
        title: "",
        venue: "",
        mode: "offline",
        date: new Date().toISOString(),
        time: new Date().toISOString(),
        selectedPeople: [],
    });
    const handleSubmit = async (e) => {
        console.log(formData, mode);
        e.preventDefault();
        const selectedPeople = toggleSelect.filter((person) => {
            return person.isSelecte;
        });
        setFinalFormObject({
            ...formData,
            mode,
            selectedPeople,
        });
        // setDept([]);
    };
    function onChangeMode(event) {
        setMode(event.target.value);
        console.log(event.target.value);
    }
    var object_url = [];
    useEffect(() => {
        console.log(finalFormObject)
    //     console.log("final _ object");
    //     console.log(finalFormObject);
    //     var CLIENT_ID =
    //     "934057497734-2k0sp365v94u0u08ta8mv9b4qodkoal6.apps.googleusercontent.com";
    // var API_KEY = "AIzaSyBI57Lt2FHhIiXvRZunhEvuqZhmgZ0lHbk";
    // const DISCOVERY_DOC = [
    //     "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
    //     "https://www.googleapis.com/discovery/v1/apis/gmail/v1/rest",
    // ];
    // const SCOPES =
    //     "https://www.googleapis.com/auth/calendar.events " +
    //     "https://www.googleapis.com/auth/calendar.readonly " +
    //     "https://mail.google.com/";
    //     gapi.load("client:auth2", () => {
    //         gapi.client.init({
    //             apiKey: API_KEY,
    //             clientId: CLIENT_ID,
    //             discoveryDocs: DISCOVERY_DOC,
    //             scope: SCOPES,
    //             plugin_name: "Grouppo",
    //         });
    //     console.log("final object", finalFormObject);
    //     var count=0;
    //     finalFormObject.selectedPeople.forEach(e => {
    //         var url={displayName:e.name,email:e.email}
    //         object_url[count]=url;
    //         count++;
    //     });
    //     console.log("object url = ");
    //   console.log(object_url);
    //     var data = {
    //         summary: "hello world",
    //         attendees: object_url/*[
    //             {
    //                 displayName:"",
    //                 email: "mayanksheladiya49@gmail.com",
    //             },{email:"mayanksheladiya4448@gmail.com"},
    //         ]*/,
    //         conferenceData: {
    //             createRequest: {
    //                 requestId: "create request By grouppo",
    //                 conferenceSolutionKey: { type: "hangoutsMeet" },
    //             },
    //         },
    //         start: { dateTime: finalFormObject.date + "T"+ finalFormObject.time },
    //         end: { dateTime: finalFormObject.date + "T"+ finalFormObject.time },
    //     };
    //     var req = gapi.client.calendar.events.insert({
    //         calendarId: "primary",
    //         resource: data,
    //         conferenceDataVersion: 1,
    //     });
    //     req.execute((e) => {
    //         console.log("request sent from createNewMeet");
    //         console.log(e);
    //         // var id = e.id;
    //         // gapi.client.calendar.events
    //         //     .patch({
    //         //         calendarId: "primary",
    //         //         eventId: id,
    //         //     })
    //         //     .execute((e) => {
    //         //         console.log("patch = ");
    //         //         console.log(e);
    //         //     });
    //     });
    // });
    //     // send request here.
    //      axios.post("http://localhost/php_practise/createMeet.php",finalFormObject).then((e)=>{console.log(e.data);})
    //     setFormData({
    //         title: "",
    //         venue: "",
    //         date: new Date(),
    //         time: new Date()
    //     });
    //     setMode("offline");
        var CLIENT_ID =
            "934057497734-2k0sp365v94u0u08ta8mv9b4qodkoal6.apps.googleusercontent.com";
        var API_KEY = "AIzaSyBI57Lt2FHhIiXvRZunhEvuqZhmgZ0lHbk";
        const DISCOVERY_DOC = [
            "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
            "https://www.googleapis.com/discovery/v1/apis/gmail/v1/rest",
        ];
        const SCOPES =
            "https://www.googleapis.com/auth/calendar.events " +
            "https://www.googleapis.com/auth/calendar.readonly " +
            "https://mail.google.com/";
        gapi.load("client:auth2", () => {
            gapi.client.init({
                apiKey: API_KEY,
                clientId: CLIENT_ID,
                discoveryDocs: DISCOVERY_DOC,
                scope: SCOPES,
                plugin_name: "Grouppo",
            });
            console.log("final object", finalFormObject);
            var count = 0;
            finalFormObject.selectedPeople.forEach((e) => {
                var url = { displayName: e.name, email: e.email };
                object_url[count] = url;
                count++;
            });
            console.log("object url = ");
            console.log(object_url);
            var data = {
                summary: "hello world",
                attendees: object_url /*[
                {
                    displayName:"",
                    email: "mayanksheladiya49@gmail.com",
                },{email:"mayanksheladiya4448@gmail.com"},
            ]*/,
                conferenceData: {
                    createRequest: {
                        requestId: "create request By grouppo",
                        conferenceSolutionKey: { type: "hangoutsMeet" },
                    },
                },
                start: { dateTime: "2022-11-07T09:00:00-07:00" },
                end: { dateTime: "2022-11-07T17:00:00-07:00" },
            };
            var req = gapi.client.calendar.events.insert({
                calendarId: "primary",
                resource: data,
                conferenceDataVersion: 1,
            });
            req.execute((e) => {
                console.log("request sent");
                console.log(e);
                // var id = e.id;
                // gapi.client.calendar.events
                //     .patch({
                //         calendarId: "primary",
                //         eventId: id,
                //     })
                //     .execute((e) => {
                //         console.log("patch = ");
                //         console.log(e);
                //     });
            });
        });
        // send request here.
        axios
            .post(
                "http://localhost/php_practise/createMeet.php",
                finalFormObject
            )
            .then((e) => {
                console.log(e.data);
            });
        setFormData({
            title: "",
            venue: "",
            date: new Date().toISOString(),
            time: new Date().toISOString(),
            date: new Date().toLocaleDateString(),
            time: new Date().toLocaleTimeString(),
        });
        setMode("offline");
    }, [finalFormObject]);

    return (
        <>
            <Nav showBg={true} isLoggedIn={true} />
            <div className="bg-[url('./../public/images/style02.png')] bg-no-repeat bg-right bg-fixed w-full h-screen">
                <section className='w-9/10 mx-auto relative mt-28'>
                    <Heading text='Create A New Meet' />
                    <form
                        className='grid grid-cols-12 gap-4 mt-5'
                        onSubmit={handleSubmit}>
                        <div className='col-start-2 col-span-5 flex flex-col'>
                            <InputBox
                                className='my-2'
                                type='text'
                                name='title'
                                value={formData.title}
                                placeHolder='Meet Title'
                                handleChange={handleChange}
                                required={true}
                            />

                            <DatePickerBox
                                name='date'
                                value={formData.date}
                                handleChange={setDateFun}
                            />
                            <TimePickerBox
                                name='time'
                                value={formData.time}
                                handleChange={setTimeFun}
                            />

                            <InputBox
                                className='my-2'
                                type='text'
                                name='venue'
                                value={formData.venue}
                                placeHolder='Venue'
                                handleChange={handleChange}
                            />

                            {/* <MultiSelectDropdown
                                text='Add Department'
                                handleChange={handleDeptFunc}
                                value={dept}
                                options={["ABc", "XYZ"]}
                            /> */}
                        </div>

                        <div className='col-start-8 col-span-4 bg-primary-900/50 shadow-mine p-4 rounded'>
                            <div
                                className='text-primary-200 text-2xl items-center mb-3 cursor-pointer'
                                onClick={() => setIsOpen(true)}>
                                <LibraryAddOutlinedIcon />
                                Click to invite people
                            </div>

                            <PeoplePopup
                                open={isOpen}
                                onClose={() => setIsOpen(false)}
                                onToggle={handleToggle}
                                toggleSelectArr={toggleSelect}
                            />

                            {/* <Scrollbars style={{ width: "100%", height: 300 }}> */}

                            <div className='w-full h-[300px] overflow-y-scroll pr-2'>
                                {toggleSelect.map(
                                    ({ id, img, name, role, isSelecte }) =>
                                        isSelecte && (
                                            <People
                                                key={id}
                                                id={id}
                                                imgUrl={img}
                                                name={name}
                                                role={role}
                                            />
                                        )
                                )}
                            </div>
                            {/* </Scrollbars> */}
                        </div>
                        <button className='col-start-5 col-span-5 text-primary-900 bg-linkColor z-40 rounded-md mt-6 p-1 w-full text-4xl font-medium border-4 hover:bg-primary-900 border-linkColor hover:text-linkColor shadow-mine'>
                            Schedule A New Meet
                        </button>
                    </form>
                </section>
            </div>
        </>
    );
}
export default CreateNewMeet;
