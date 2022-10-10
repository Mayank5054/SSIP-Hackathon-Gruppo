import React, { useState, useEffect } from "react";
import Nav from "../components/Nav";
import Heading from "../components/Heading";
import InputBox from "../components/InputBox";
import DropDownMenu from "../components/DropDownMenu";
import People from "../components/People";
import PeopleData from "../data/peopleData.json";
import DatePickerBox from "../components/DatePickerBox";
import TimePickerBox from "../components/TimePickerBox";
import LibraryAddOutlinedIcon from "@mui/icons-material/LibraryAddOutlined";

function CreateNewMeet() {
    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState(new Date());
    //in DB extract date as time.toLocaleDateString() (because while selecting date it will select current time by default)
    //in DB extract time as time.toLocaleTimeString() (because while selecting time it will select current date by default)
    const [formData, setFormData] = useState({
        title: "",
        venue: "",
        department: "",
        date: date,
        time: time,
    });

    function handleChange(event) {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    }

    function setDateFun(e) {
        setDate(e);
    }
    function setTimeFun(e) {
        setTime(e);
    }
    useEffect(() => {
        formData.time = time;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [time]);

    useEffect(() => {
        formData.date = date;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [date]);
    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormData({
            title: "",
            venue: "",
            department: "",
            date: new Date(),
            time: new Date(),
        });
    };

    return (
        <>
            <Nav showBg={true} isLoggedIn={true} />
            <div className="bg-[url('./../public/images/style02.png')] bg-no-repeat bg-right bg-fixed w-full h-screen">
                <section className='w-9/10 mx-auto relative mt-28 mb-10'>
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
                                value={date}
                                handleChange={setDateFun}
                            />
                            <TimePickerBox
                                name='time'
                                value={time}
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
                            <DropDownMenu
                                className='my-2 w-full rounded p-4 text-primary-900 font-medium outline-primary-900'
                                value={formData.department}
                                name='department'
                                text='Add Department'
                                handleChange={handleChange}
                            />
                        </div>
                        {console.log(formData)}
                        <div className='col-start-8 col-span-4 bg-primary-900/50 shadow-mine p-4 rounded'>
                            <a
                                href='http://localhost:3000'
                                className='text-primary-200 text-2xl items-center'>
                                <LibraryAddOutlinedIcon /> Click to invite
                                people
                            </a>
                            {Object.keys(PeopleData).map((id) => (
                                <People
                                    key={id}
                                    imgUrl={PeopleData[id].img}
                                    name={PeopleData[id].name}
                                    role={PeopleData[id].role}
                                />
                            ))}
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
